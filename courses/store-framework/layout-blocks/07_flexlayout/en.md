# Flex Layout: create layouts using the power of Flexbox

## :sparkles: **Branch:** flexlayout

## Introduction

The [Flex Layout](https://vtex.io/docs/components/layout/vtex.flex-layout) is a layout structuring paradigm created in Store Framework to allow the construction of complex layouts. This paradigm uses the concepts of **lines** and **columns** to define the desired block structure and positioning on a certain page. 

There are two basic building blocks for each Flex Layout:

- `flex-layout.row`
- `flex-layout.col`

If you are already familiar with the Flexbox used in CSS, the Flex Layout should be easy to understand, since Flexbox is already used "under the hood" by flex-layout.row and flex-layout.col.

## Flex Layout

With the help of Flex Layout, you can create customized layouts, using the Flexbox structure of lines and columns.

Analyzing the block's documentation, we see that you can use any block *array* as Flex Layout's `children`. In addition, you should always use `flex-layout.row` and `flex-layout.col`, and **NEVER** `flex-layout` alone.

Below, we have an example of a flex layout comprised of a `flex-layout.row` with two *children*: an `info-card` and a `rich-text`:

```json
  "flex-layout.row":{
    "children": [
      "info-card#rethink",
      "rich-text#delete"
    ]
  },
  
 "info-card#rethink": {
    "props": {
      "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/utensilios-cozinha-min.png",
      "isFullModeStyle": true,
      "headline": "Time to rethink your kitchen",
      "callToActionText": "Discover",
      "textPosition": "center"
    }
  },
  
  "rich-text#delete": {
    "props": {
      "text": "I'll be deleted soon"
    }
  }
```

## Activity

1. Declare the `flex-layout.row` in the `store.home`'s template `blocks` and then declare the blocks mentioned above in your `home.jsonc` file:

    ```diff
      "store.home": {
        "blocks": [
          "rich-text",
          "info-card#button-right",
          "info-card#button-left",
    +      "flex-layout.row"
        ]
      },
    ```

2. Edit the `flex-layout.row` *children*, substituting the `rich-text` block with a `flex-layout.col` column:

    ```diff
      "flex-layout.row":{
        "children": [
          "info-card#rethink",
    -      "rich-text#delete"
    +      "flex-layout.col"
        ]
    ```

3. Delete the above-mentioned `rich-text` block from your theme. 
4. Declare the `flex-layout.col` block in your `home.jsonc` file with two image components as children: `image#electronics` and `image#major-appliance`, *in this order*:

    ```json 
      "flex-layout.col": {
        "children": [
          "image#electronics",
          "image#major-appliance"
        ]
      },
    ```

5. Define the `image` blocks with the following props:

    ```json
    ...
    "image#electronics": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/electronics_banner___25d69b49f8224b369375e68513b4d593.png",
        "maxWidth": "100%"
      }
    },
    "image#major-appliance": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/major_appliance_banner___bb10093866a127345ddfbcca3efa5022.png",
        "maxWidth": "100%"
      }
    }
    ```

The result should be similar to this:

![image](https://user-images.githubusercontent.com/12139385/70185681-0c5ed300-16c9-11ea-9260-b88179b508f2.png)

:information_source: Remember to access the Flex Layout [documentation](https://vtex.io/docs/components/layout/vtex.flex-layout) in case you have any questions during the activity.