# Connecting _backend_ and _frontend_

## Introduction

Now we will learn how to retrieve data from the _backend_ and display it in the interface. VTEX IO uses [GraphQL](https://graphql.org/) as a language/technology for data transfer, which makes programming our components quite simple. We will modify our Countdown component to search for the _targetDate_ of the **`releaseDate` field of a VTEX product**. To perform GraphQL queries in React, the **Apollo Client** is used, a state management lib that facilitates the integration of a GraphQL API with the _front-end_ application.

The **Apollo Client** lib offers native integration with React, through _hooks_. Thus, making a _query_ means using a _hook_ that will not only perform the _queries_ and _fetch_ the data but will also provide caching and updating the UI state. This integration, called `react-apollo` is already declared in `package.json`.

## Preparation

- To implement this functionality, **add our countdown block on the product page** and also do our tests on this page as well. To do this, do the following:

1. On your cloned theme (`store-theme`) access the `store/blocks/pdp/product.jsonc` file and, on the `flex-layout.col#right-col` block add the `countdown` block, right before the `buy-button`:

   ```diff
       "product-gifts",
   +	 "countdown",
       "flex-layout.row#buy-button",
       "availability-subscriber",
   ```

2. Now, run `vtex link` on your theme again (if the process is not already running). It's done! Now our block is on the product page. Access any of these pages and see the rendered `Countdown` component.

## Release Date Query

1. First, create a folder in your Countdown app, `react/queries` and add a `productReleaseDate.graphql` file to it that will contain the _query_ to be made. In particular, this _query_ will receive a term, which will be **the product slug to be retrieved at the launch date**. It will call the _resolver_ `product`, already available through the`vtex.search-graphql` app, and we will retrieve only the field we need.

   ```graphql
   query productReleaseDate($slug: String) {
     product(slug: $slug) {
       releaseDate
     }
   }
   ```

   > Note that the query will need the _slug_ of the product we are looking for. To do so, **retrieve this information of the VTEX Product context**.

2. To use this query, it is necessary **to add the `vtex.search-graphql` app as a dependency on your app**. We will also need to use the `useProduct` hook, exported by the `vtex.product-context` the app, to retrieve the product slug that is loaded on the page. To do this, in your app's `manifest.json`, add in dependencies:

   ```
   "vtex.search-graphql": "0.x",
   "vtex.product-context": "0.x"
   ```

3. Now, it is necessary to import the `useQuery` hooks, to make the _query_ that will return the data we described, and `useProduct`, to give us information about the current product slug. In addition, it is also necessary to import the _query_ defined previously, which is found in the file `productReleaseDate.graphql`.

   ```diff
   // react/Countdown.tsx
   import React from 'react'
   ...
   +import { useQuery } from 'react-apollo'

   +import useProduct from 'vtex.product-context/useProduct'

   +import productReleaseDate from './graphql/productReleaseDate.graphql'
   ```

   > It is important to higlight that there is the possibility of your IDE showing an error while importing `product-context`.

   > The prop `targetDate` will no longer be necessary, so you can remove it.

4. After that, define the query using the `productReleaseDate` imported and the `useQuery` hook, you can find the product data in `useProduct` hook. Since they are [hooks](https://reactjs.org/docs/hooks-intro.html), they only work inside react functional components.

   ```diff
   + const { product } = useProduct()
   + const { data, loading, error } = useQuery(productReleaseDate, {
   +   variables: {
   +     slug: product?.linkText
   +   },
   +   ssr: false
   + })
   ```

   > `linkText` will be the same as `'red-front-loading-washer'`, for example, when your component is rendered in this product's page.

5. Now that we're using our block in pages that have the product context, it's important to test if this context exists. To do that, let's add the following code block:

   ```tsx
   if (!product) {
     return (
       <div>
         <span>There is no product context.</span>
       </div>
     )
   }
   ```

6. Besides, it is important to deal with the cases in which there is no data fetched when using `useQuery` and before returning the main component: _loading_ and _error_ In those cases, it is possible to return a span in the countdown component, such as the example below:

   ```tsx
   if (loading) {
     return (
       <div>
         <span>Loading...</span>
       </div>
     )
   }
   if (error) {
     return (
       <div>
         <span>Error!</span>
       </div>
     )
   }
   ```

7. After sending the changes, access a product page and note that the _query_ is working through a `console.log({data})` after calling `useQuery`, which should show something like this:

   ```ts
   {
     data: {
       product: {
         releaseDate: '2019-01-01T00:00:00"',
         __typename:  "Product"
       }
     }
   }
   ```

8. At last, but not least, to make Countdown set the hours for the product's `releaseDate`, change the `tick` function parameter. You can also remove the `props` received in the component, as they will no longer be used.

   ```diff
   -tick(targetDate, setTime)
   +tick(data?.product?.releaseDate, setTime)
   ```

Result using the _Red Front-Loading Washer_ product:

> In case of having cases that the countdown is going up or with negative values, don't worry! It's related to the fact that some `releaseDate` can be in the past.

![image](https://user-images.githubusercontent.com/18706156/79596495-0fc28c00-80b7-11ea-8361-35075dba3bd5.png)

---

## Well done!

This is the last step of the Store Block course, you did really well and we hope you've learned a lot until this moment. **Congratulations!**

If you want to continue learning more about how to develop using VTEX IO, we encourage you to start our next course, which focus on teaching how to develop services on top of VTEX IO.
