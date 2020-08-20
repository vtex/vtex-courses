# Product page

## Introduction

Once the store's homepage is done, we can start working on a new store template: the product page. Product pages are probably the templates with the most blocks, which makes them extremely flexible and customizable. 

## Product Page

Let's build a minimal product page, with only the bare essentials:

- **images;**
- **prices;**
- **names;**
- **buy button**

![image](https://user-images.githubusercontent.com/18701182/69375575-6b632780-0c87-11ea-85d2-41e1e858a33e.png)

## Product blocks

Most product blocks, unlike content blocks, are inserted into a certain context, making them a little bit "plug-n-play": placing `product-images` on the product page will automatically lead to images being rendered on that page, the same being valid for price and name.

This doesn't mean that these blocks are less customizable, quite the opposite actually, as we'll soon see.

## Activity

Build a product page using the following blocks in `product.jsonc` and declare it in the `store/blocks` folder: [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) and [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton). We expect the structure to contain the following:  

1. A **line** in `store.product`;

    ```json
    {
    "store.product": {
        "children": [
          "flex-layout.row#main"
        ]
      }
    }
    ```

2. That **line** should have **two columns**;

    ```json
    "flex-layout.row#main": { 
      "props": { 
        "marginTop": 6
      },
      "children": [
        "flex-layout.col#left",
        "flex-layout.col#right"
      ]
    }
    ```

3. The left column must contain a [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages);

    ```json
    "flex-layout.col#left": {
      "children": [
        "product-images"
      ]
    }
    ```

4. The right column must contain the [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price) and [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton):

    ```json
      "flex-layout.col#right": {    
        "children": [
          "product-name",
          "product-price",
          "buy-button"
        ]
      },
    ```

In addition, we want:

1. the right column to be vertically aligned to the center (see the `verticalAlign` and `preventVerticalStretch` props in the [Flex Layout Column documentation](https://developers.vtex.com/docs/vtex-flex-layout#flex-layoutcol)):

    ```json
      "flex-layout.col#right": {    
        "props": {
          "preventVerticalStretch": true,
          "verticalAlign": "middle"
        },
        "children": [
          ...
        ]
      },
    ```

2. the [`product-price`](https://developers.vtex.com/docs/vtex-product-price#configuration) to show the total savings and list price (`showSavings` and `showListPrice`):

    ```json
      "product-price": {
        "props": {
          "showSavings": true,
          "showListPrice": true
        }
      }
    ```


:information_source: Remember to access the [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) and [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton) documentation in case you have any questions during your activity. 
