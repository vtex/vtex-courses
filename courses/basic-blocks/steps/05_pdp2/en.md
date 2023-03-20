# Evolving your product page

## Introduction

During the last step we learned how to create a simple product page with a minimum amount of products, but we know that the result is far from an ideal product page, so we'll add other elements that frequently appear on product pages from various stores.

![image](https://user-images.githubusercontent.com/18701182/69391258-002e4b00-0cb1-11ea-901f-f69d9c0b3062.png)

## Over 30 product blocks

Our [documentation](https://developers.vtex.com/docs/guides/store-framework-apps) contains more than 30 product-related blocks. We'll explore 4 more in this step:

- [Breadcrumb](https://developers.vtex.com/docs/guides/vtex-breadcrumb)
- [Product Identifier](https://developers.vtex.com/docs/guides/vtex-product-identifier)
- [Product Quantity](https://developers.vtex.com/docs/guides/vtex-product-quantity)
- [SKU Selector](https://developers.vtex.com/docs/guides/vtex-store-components-skuselector)

It's important that by the end of the course you take some time to fully explore our components, in addition to the customization possibilities that accompany each component.

## Activity

Develop the product page by adding the 4 blocks listed above to`product.jsonc` as follows:

1. Define a `breadcrumb` right before the product's **main line**;

   ```json
   "store.product": {
     "children": [
       "breadcrumb",
       "flex-layout.row#main"
     ]
   }
   ```

2. Define the `product-identifier.product` right under the `product-name`;

   ```diff
       },
       "children": [
         "product-name",
   +      "product-identifier.product",
         ...
       ]
     },
   ```

3. Create a **row** right under the price, having `sku-selector` and `product-quantity` as children;

   ```json
   {
     ...
       "children": [
         "product-price",
         "flex-layout.row#qty-sku"
       ]
     },
     "flex-layout.row#qty-sku": {
       "children": [
         "sku-selector",
         "product-quantity"
       ]
     },
     ...
   }
   ```

4. Define `shipping-simulator` right under the line containing the SKU Selector and Product Quantity:

```diff
    "children": [
      ...
+      "shipping-simulator",
      "buy-button"
    ]
```

Note: Remember to access the [Breadcrumb](https://developers.vtex.com/docs/guides/vtex-breadcrumb), [Product Identifier](https://developers.vtex.com/docs/guides/vtex-product-identifier), [Product Quantity](https://developers.vtex.com/docs/guides/vtex-product-quantity) and [SKU Selector](https://developers.vtex.com/docs/guides/vtex-store-components-skuselector) documentation if you have any questions during the activity.
