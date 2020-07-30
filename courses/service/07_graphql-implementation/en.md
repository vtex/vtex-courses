# GraphQL: Retrieving data from Masterdata

## Introduction

Now that we have updated the products count, we need to retrieve the _top n_ most viewed products. We can, then, use Masterdata to retrieve the product page view data and sort by the _count_ field. We can also limit the length of retrieved products, creating a customized size rank of most visited products.

## GraphQL

To get these product page views, we will use [GraphQL](https://graphql.org/), the technology used by VTEX IO for data fetching, to implement a query to Masterdata. GraphQL allows us to implement queries in a simple and easy way, specifying the data you want to retrieve. This makes your API reliable, since GraphQL controls the data fetched instead of the server itself.

**It's also the only possible way to create an interface between services and front end applications.**

Therefore, GraphQL uses types and a query schema to specify the data retrieved and resolvers to get the exact data needed.

## Activity

1. On the directory `/graphql/types` create the `productView.graphql` file and declare the type of the product list we want to retrieve:

   ```
   type ProductView {
       slug: String
       count: Int
   }
   ```

2. Still in the `/graphql` directory, define the schema in the `schema.graphql` file:

   ```
   type Query {
       productList(topN: Int): [ProductView]
   }
   ```

   > Keep in mind that the schema will define the structure of our query and the retrieved data.
  
    Also, in this declaration you can include directives. In some cases, it is required, for example, if you need to get the user token or use cookies (e.g.: `OrderForm`). To read more about it, check out [this link](https://github.com/vtex-apps/graphql-example).

3. With the schema, types and the query defined, we need to create the query's resolver. The resolver is what happens when a query is executed. In our case, we want to perform a scroll on `Masterdata`, ordering by the count (as we want to get a top most viewed products) and limiting the page size (the top **n**). To define this resolver, in the `/node/resolvers` directory, create the file `products.ts` and do the following:

    ```ts
      //node/resolvers/products.ts
      import { COURSE_ENTITY } from '../utils/constants'

      export const productList = async (
        _: any,
        { topN }: { topN: number },
        { clients: { masterdata } }: Context
      ) =>
        masterdata.scrollDocuments(
          {
            dataEntity: COURSE_ENTITY,
            fields: ['count', 'slug'],
            schema: 'v1',
            size: topN,
            sort: `count DESC`
          }
        ).then((({data}) => data))
    ```

   > Note: you can check the Master Data scroll documentation in this [link](https://help.vtex.com/tutorial/querying-the-master-data-via-scroll-path--tutorials_4631)

4. At last, we need to update the `index.ts` file to set up the resolver and the query. Complete the `service` declaration as below:

    ```ts
        },
            graphql: {
                resolvers: {
                    Query: {
                        productList,
                    },
            },
        },
    })
    ```

    And, also, remember to add the `graphql` builder on the `manifest.json`:

    ```diff
    //manifest.json
    "builders": {
    +        "graphql": "1.x",
        "docs": "0.x",
        "node": "6.x"
    },
    ```

    Finally, link the app and you should get a GraphQL route. The result should be like this:

    ![image](https://user-images.githubusercontent.com/43679629/82947940-3c4faa80-9f77-11ea-8bfa-138d11cdec1f.png)
