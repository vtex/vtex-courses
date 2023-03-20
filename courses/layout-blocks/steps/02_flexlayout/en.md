# Flex Layout: create _layouts_ using the power of Flexbox

## Introduction

[Flex Layout](https://developers.vtex.com/docs/guides/vtex-flex-layout) is a _layout_ structuring paradigm created in the Store Framework to allow the construction of complex _layouts_. This paradigm uses the concept of ** rows ** and ** columns ** to define the desired structure and positioning of the blocks on a given page.

There are two basic building blocks of each Flex Layout:

- `flex-layout.row`
- `flex-layout.col`

If you are already familiar with Flexbox used in CSS, Flex Layout should be simple to understand, since Flexbox is being used "behind the scenes" by `flex-layout.row` and `flex-layout.col`.

## Flex Layout

With Flex Layout, it is possible to create custom _layouts_, using the Flexbox line and column structure.

Looking at the block's documentation, we see that you can use an array of blocks like Flex Layout's `children`. In addition, you should always use `flex-layout.row` and`flex-layout.col`, **NEVER** `flex-layout` in isolation.

Below is an example of a flex layout composed of a `flex-layout.row` with two children: an `info-card` and a `rich-text`:

```json
  "flex-layout.row":{
    "children": [
      "info-card#rethink",
      "rich-text#deletar"
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

  "rich-text#deletar": {
    "props": {
      "text": "I'll be deleted soon"
    }
  }
```

## Activity

1. Declare `flex-layout.row` within the`blocks` of the `store.home` template and declare the blocks proposed above in your`home.jsonc` file
2. Change the children of `flex-layout.row`, replacing the `rich-text` block with a `flex-layout.col` column.
3. Delete the rich-text block proposed above from your theme.
4. Declare the `flex-layout.col` block in your `home.jsonc` file with two image components like children: `image#electronics` and `image#major-appliance`, _in that order_.
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

The result should look like this:

![image](https://user-images.githubusercontent.com/12139385/70185681-0c5ed300-16c9-11ea-9260-b88179b508f2.png)

> Note: Remember to access the Flex Layout [documentation](https://developers.vtex.com/docs/guides/vtex-flex-layout) if you have any questions during the activity.
