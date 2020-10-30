# Using the Client Catalog to place orders

## Introduction

In this step you will learn how to use the _Client_ you just configured in a _middleware_ of the `service-example` app. We will use the `getSkuById` method to return information from a SKU (Stock Keeping Unit) in the VTEX Catalog.

> The term Stock Keeping Unit (SKU), Inventory Maintenance Unit, is linked to warehouse logistics and designates the different inventory items, and is normally associated with an identifier code. _(Wikipedia)_

## Test Route

Since the `service-example` app already exports a public route for testing (`https://{workspace}--{account}.myvtex.com/_v/status/:code`), we will use it to test making a call using the _Client_ of _Catalog_. We will use the `code` parameter as our "Sku ID"to quickly test our _Client_.

If you have already run the command `vtex link`, just keep it running since the VTEX CLI **automatically updates your application with changes in the code.** If not, run the command now.

## Activity

As we saw in the previous step, we now have our _Client_ methods available in `ctx.clients.catalog`. To use it, we will need to call the methods in some _middleware_ of our app.

1. In the `node / middlewares / status.ts` file to use` ctx.clients.catalog`. Paste the following code there:

```typescript
export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { catalog },
  } = ctx

  const data = await catalog.getSkuById(code.toString())
  ctx.body = data

  await next()
}
```
  **What are we doing?**
  - Extracting `catalog` from the context that is received in the middleware functions. This is a shortcut so we don't have to call `ctx.clients.catalog`. Learn more about Destructuring [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
  - Extracting the variable `code`, which will come as a parameter of the URL of our route (`/_v/status/:code`). We will use this data to represent the SKU ID that we will test when calling the Catalog.
  - Calling the _Client_ Catalog's `getSkuById` method. This method will, internally, call the relative endpoint in the catalog module, passing the parameter that we are passing (`code`) as the SKU ID to be searched. Remembering that this is an asynchronous call, so we need to add ʻawait` just before to wait for it.

However, we still need to configure one last step to test!

2. Generally, `commerce-clients` _Clients_ are already automatically configured to make authenticated calls, by default **using the app token**. Even so, we still need **to declare that our application will be making requests for some service**, and this is done in the `manifest.json` file.

For our specific case, we need to add the following section to the `policies` field of this file:

```json
{
  "name": "outbound-access",
  "attrs": {
    "host": "portal.vtexcommercestable.com.br",
    "path": "/api/catalog/*"
  }
},
```

This will allow your app to make calls to that URL, specifically. As much as you didn't need to put it in your code, it is what is used internally by the Catalog _Client._

> This statement is necessary and important for apps distributed on the [VTEX App Store] (https://apps.vtex.com). During the installation process, the person responsible for the account must read and accept all permissions that the app is requesting.

> If the resource you are trying to access needs some authorization _role_, you will also need to add it in this session. For example, the `store-graphql` app needs to [declare that it needs _policy_](https://github.com/vtex-apps/store-graphql/blob/91454631bffad6ad661cb87391f42f8886d9edd5/manifest.json#L117) `LogisticsAdmin` in order for it may be authorized to access some features of the Logistics module.


3. Now, let's test what we did! The `vtex link` process must have already updated, and we can copy the public URL that our service is exposing:
![Example](https://user-images.githubusercontent.com/18706156/93384506-4d306e80-f83b-11ea-9cec-0e1b23f23a48.png)

In this case, the app is being developed in the `marinbrasil` account and in the` trainingweek` workspace, but in your Terminal you must copy the link provided for your environment.

As our _middleware_ is activated by a GET request, we can test the functionality in our own browser. Paste in the address bar `https://{workspace}--{account}.myvtex.com/_v/status/1` to find information about the SKU 1 ID.

The result below should be expected:

![image](https://user-images.githubusercontent.com/18706156/93388848-b87d3f00-f841-11ea-8d2e-bed1c14d355d.png)

> Remembering that this information will depend **on the account catalog being used**.
