# Finishing your pdp

## :sparkles: **Branch:** pdp3

## Introduction

In this step we'll finish setting up our product page. We've learned how to stack blocks using [**Stack Layout**](https://vtex.io/docs/app/vtex.stack-layout), and we've also learned how to suggest similar product and better customize the SKU Selector for products with SKU images. 

Use the following product URL to test this step: `/3-colors-retro-stand-mixer/p`.

![image](https://user-images.githubusercontent.com/18701182/69393219-50a8a700-0cb7-11ea-8718-c5ec0536cbe2.png)

## Stack Layout

`stack-layout` is a type of layout that allows blocks to stack on top of others. It comes in handy when you want to a badge on top of an image or product. It's also useful when placing rich text onto images (using a `rich-text` and an `image`).

![image](https://user-images.githubusercontent.com/18701182/69392819-0a9f1380-0cb6-11ea-8238-1e2e75b9eee9.png)

(In the image, a shelf is stacked on top a carrossel :point_up_2:)

In this step, we'll use `stack-layout` to place the brand on top of product images.

## Activity

Develop the product page by adding the step below to `product.jsonc`:

1. Declare a [`shelf.relatedProducts`](https://vtex.io/docs/app/vtex.shelf) under the product's **main line**

    ```diff
    "store.product": {
      "children": [
        "breadcrumb",
        "flex-layout.row#main",
    +    "shelf.relatedProducts"
      ]
    }
    ```

:warning: Remember, this product shelf is only displayed for the `/3-colors-retro-stand-mixer/p` product.

2. From the left column, change `product-images` with a `stack-layout` declaration;

    ```json
    "flex-layout.col#left": {
      "children": [
        "stack-layout#brand"
      ]
    }
    ```

3. Define `stack-layout` and set `product-images` and [`product-brand`](https://vtex.io/docs/components/product-related/vtex.store-components/product-brand) as children;

    ```json
    "stack-layout#brand": {
      "children": [
        "product-images",
        "product-brand"
      ]
    }
    ```

4. Change the way in which `product-brand` is displayed. You should make the logo appear with a height of **30** and include the `displayMode: "logo"` prop. 
    ```json
      "product-brand": {
        "props": {
          "display-mode": "logo",
          "height": 30
        }
      },
    ```

> Note: remember to consult the [documentation](https://vtex.io/docs/components/product/vtex.store-components/product-brand#configuration)

5. Review the [documentation](https://vtex.io/docs/components/product/vtex.store-components/sku-selector) to make the `sku-selector` do the following: 
  - start without any selected SKU;
  - show the name by SKU variation, using property value as `image`, as it's shown in the documentation mentioned before;
  - display an error message if no SKU variation was selected.

  ```json
    "sku-selector": {
    "props": {
      "initialSelection": "empty",
      "showValueNameForImageVariation": true,
      "showVariationsErrorMessage": true
    }
  }
  ```
  
:information_source: Remember to use the `/3-colors-retro-stand-mixer/p` product to test this step. 

:information_source: Remember to read through the Stack Layout [documentation](https://vtex.io/docs/app/vtex.stack-layout) if you have any questions during the activity.