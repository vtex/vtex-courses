# Importing a Client into your application

## Introduction

In this step, you will learn how to search for ready-made _Clients_ that abstract the Core Commerce APIs, as well as how to import them into your app on VTEX IO. We will import the _Client_ `Catalog` which will allow us to search for details about an SKU within the VTEX platform.

## Clients

_Clients_, in VTEX IO, are abstractions for external services and are used natively to make external requests in _backend_ services. You can read a little about them [here](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-1dbd20c928c642d0ba059d5efbe7874b).

## VTEX IO Commerce Clients

The [Commerce Clients](https://github.com/vtex/commerce-io-clients/blob/master/src/clients/catalog.ts) package is a Typescript library that offers several **clients already configured** for access VTEX Core Commerce APIs. To use it in your app, just install it in the `node/` folder running:

`yarn add @vtex/clients`

## Custom Clients

If you don't find the _Client_ you want for a Core Commerce service from VTEX, we recommend that you **send a Pull Request** to the `commerce-clients` repository. We will be happy to review and eventually dive into your contribution.

But, if the service you are trying to access is an external provider (ex: Here Maps API), we recommend that you create _Client_ in your own app by following [these steps](https://developers.vtex.com/vtex-developer-docs/docs/how-to-use-and-create-clients-on-vtex-io).

# Activity

1. We will now import a _Client_ from the **Catalog** module into our app. After you have cloned the boilerplate app, open the app code that was downloaded in the `service-example` folder in your editor.

2. As the _Client_ that we will use is offered in the Commerce Clients package, we will perform the installation. **Inside the `node` folder, run the following command:**

`yarn add @vtex/clients`

3. Now that the package has been installed, we need to configure _Client_ to use it in the _resolvers_ and _middlewares_ of our app. For that, we need you to open the file `node/clients/index.ts` in your editor.

4. Import the _Client_ `Catalog` from the`@vtex/clients` library.

5. Add the _getter_ `catalog`, similar to the method above in the `Clients` class.

```diff
+    import { Catalog } from '@vtex/clients'
...
+    public get catalog() {
+      return this.getOrSet('catalog', Catalog)
+    }
```

Done! Now, any of the _resolver_ GraphQL or _middlewares_ service functions can use this Client via `ctx.clients.catalog`. Because of Typescript, it is possible to have _autocomplete_ of the methods and see details of the types needed in the parameters.
