# Clients: Using Master Data

## Introduction

Now that we are using the data retrieved from the _Analytics_, we need to save this data and update it. So, every time we retrieve new data we want to update it using **Master Data** (a database-as-a-service product from VTEX).

## Master Data Client

**Master Data** is the VTEX service that makes it possible to create database architectures for a store. By default, it's used to store and organize customer data, but it's also widely used by VTEX stores to make business rule customizations and create applications for your virtual store. You can configure applications that use the module as a data repository to create a system on top of Master Data, just by modeling new data.

In the current version of **Master Data**, we use the concept of _data entities_ and use [JSON Schema](https://spacetelescope.github.io/understanding-json-schema/) to validate and index documents. One _data entity_ can have many _schemas_, depending on how you need to use the data stored. You'll need the name of the JSON Schema to implement a query, as will be seen in the following steps.

> Note: the JSON Schema is not required for all endpoints. If you don't need to validate your data, you may save your documents without any setup, just indicate the data entity and some access credential. Like your case now, as we need validation, we must create a JSON Schema.

**Master Data Documents** have unique IDs and can have many customized fields. In the JSON Schema, you can declare fields and indicate the ones that you want to index. Indexed fields can be retrieved in queries.

A **Master Data client** is already provided in VTEX IO Node Runtime. It is possible to access this client through the `Context`, a param which contains all IO Clients in the clients property.

In this step, it will be used to fetch data regarding the top-N most viewed products, where N is a parameter that will be used to get the desired amount of products.

> **NOTE:** It is important to highlight that the Master Data client will be available as long as the correct version of `@vtex/api` is installed in the node folder. It can be used by accessing `ctx.clients.masterdata`.

## Initial setup

> This step is optional if you are already using the `appliancetheme` account.

Before following our activity for this step, you will need to set up your **Master Data** to be able to use it.

So, you'll have to create an entity to save your product list. To do so, using our [**Master Data API**](https://developers.vtex.com/vtex-developer-docs/reference/master-data-api-v2-overview), you'll save a new schema. 

1. Using [Postman](https://www.postman.com/downloads/) or any other API client you prefer, send a `PUT` request to this route: `https://{{your-account-name}}.vtexcommercestable.com.br/api/dataentities/course_backend_product_list/schemas/{{your-schema-name}}` with the following headers and body:

  > Note that you need to fill in some information on the route, such as `your-account-name` and `your-schema-name`. That last one can be anything, but we strongly recommend it to be something like `v0`. 

  Headers: 
  ```json  
      Content-Type: application/json
      VtexIdclientAutCookie: {your-token}
  ```

  Body: 
  ```json  
    {
      "properties": {
          "slug": {
              "type": "string"
          },
          "count": {
              "type": "number"
          }
      },
      "v-indexed": [
          "slug",
          "count"
      ],
      "v-security": {
          "allowGetAll": true,
          "publicRead": [
              "slug",
              "count"
          ],
          "publicWrite": [
              "slug",
              "count"
          ],
          "publicFilter": [
              "slug",
              "count"
          ]
      }
    }
  ```

  > To get your VTEX local token for the header, in your terminal run `vtex local token`. 

  Your request should look like this if you are using *Postman*: 
  ![headers](https://user-images.githubusercontent.com/43679629/108750696-182df380-7520-11eb-8cc3-178158ad8e94.png)
  ![body](https://user-images.githubusercontent.com/43679629/108750714-1ebc6b00-7520-11eb-9f61-4a21160bceef.png)


By doing this, you are not only creating an entity but also creating a new schema to be used during this step. 

Now you are good to go! 

## Using the Master Data client to store information

1. First, we need to setup the policies in our app, to authorize it to use **Master Data**. To do so, complement the `manifest.json` file:

   ```diff
   //manifest.json
   {
     ...
     },
     "credentialType": "absolute",
     "policies": [
   +      {
   +        "name": "ADMIN_DS"
   +      },
   +    {
   +      "name": "outbound-access",
   +      "attrs": {
   +        "host": "api.vtex.com",
   +        "path": "/dataentities/*"
   +      }
   +    }
     ],
     "dependencies": {
     ...
   }
   ```

   > By doing this, we are guaranteeing that this app has the authorization to access **Master Data**.

2. Now, to save this data in the **Master Data**, we need to, first, check for each _productSlug_, if it is already saved. To do so, we will use a method of the Master Data client called `searchDocuments`. To use it, in the `node/event/updateLiveUsers.ts` file, do something like this:

   ```diff
   //node/event/updateLiveUsers.ts
   ...
   + import { COURSE_ENTITY } from '../utils/constants'

   export async function updateLiveUsers(ctx: EventContext<Clients>) {
     const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
     console.log('LIVE USERS ', liveUsersProducts)
   +  await Promise.all(
   +    liveUsersProducts.map(async ({ slug, liveUsers }) => {
   +       const [savedProduct] = await ctx.clients.masterdata.searchDocuments<{
   +         id: string
   +         count: number
   +         slug: string
   +       }>({
   +         dataEntity: COURSE_ENTITY,
   +         fields: ['count', 'id', 'slug'],
   +         pagination: {
   +           page: 1,
   +           pageSize: 1,
   +         },
   +         schema: 'v1',
   +         where: `slug=${slug}`,
   +       })
   +    console.log('SAVED PRODUCT', savedProduct)
   +    })
   +  )
     return true
   }
   ```

   > Note that we are using the `COURSE_ENTITY`, from the global constants, to access your data.

3. Now, to make sure we are handling errors, implement a `try-catch` structure. To do so, do something like this:

   ```diff
   export async function updateLiveUsers(ctx: EventContext<Clients>) {
     const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
     console.log('MOCKED LIVE USERS ', liveUsersProducts)
     await Promise.all(
       liveUsersProducts.map(async ({ slug, liveUsers }) => {
   +      try {
           ...
   +      } catch (e) {
   +        console.log(`failed to update product ${slug}`)
   +        console.log(e)
   +      }
       })
     )
     return true
   }
   ```

4) If our product is already saved, we need to update it by incrementing its count. **Master Data** has a method that allows us to update an existing document or create a new document, if the document does not exist - `createOrUpdateEntireDocument`. To use this method and implement the incrementation on the Master Data entity, in the same file that was changed before, right after the log line of _saved product_, add this code:

   ```diff
   //node/event/updateLiveUsers.ts
   export async function updateLiveUsers(ctx: EventContext<Clients>) {
     await Promise.all(
       liveUsersProducts.map(async ({ slug, liveUsers }) => {
         try {
           ...
           console.log({savedProduct})
   +       await ctx.clients.masterdata.createOrUpdateEntireDocument({
   +          dataEntity: COURSE_ENTITY,
   +          fields: {
   +            count: liveUsers,
   +            slug,
   +          },
   +          id: savedProduct?.id,
   +          schema: 'v1'
   +        })
         } catch {
           console.log(`failed to update product ${slug}`)
           console.log(e)
         }
       })
     )
     return true
   }
   ```

   > Note: if an error is thrown inside an event handler, VTEX IO will retry sending this event.

5) Finally, run `vtex link` and wait for an event to be fired. Once it does, check your terminal for the logs in the code. Break the `vtex link` by typing `ctrl + C` and use the following _cURL_ on the terminal to check the updates on **Master Data**:

   ```
   curl --location --request GET 'https://api.vtex.com/api/dataentities/course_backend_product_list/search?_fields=slug,count&_schema=v1&an=appliancetheme' \
   --header 'Content-Type: application/json'
   ```

   The result should be like this:

   ![image](https://user-images.githubusercontent.com/43679629/85172472-8579de00-b247-11ea-9758-f34a66df29c7.png)
