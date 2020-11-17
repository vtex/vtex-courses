# Building a custom search landing page

## Introduction

In the previous step, we looked at creating a custom template. In scenarios involving promotions and commemorative dates, it's quite common to create special _landing pages_.

## Custom searches

We saw that the search deduces what is needed from the given context. On a custom page however, the context doesn't exist and you need to state which _query_ should be performed to get the results. All this is made possible by the `search-result-layout.customQuery`.

## Query schema

The query schema is one of the [custom query search result props](https://developers.vtex.com/docs/vtex-search-result) that allows you to control the search that the _landing page_ should run. To know more the query schema's possibilities, read through its [documentation](https://developers.vtex.com/docs/vtex-search-result#step-3---defining-how-the-search-query-data-should-be-fetched).

## Creating a new landing page

1. Define a new path (`store.custom#landing`) in `routes.json`;

   ```json
   // store/routes.json
   "store.custom#landing": {
       "path": "/landing"
   }
   ```

2. Create a new file called `search-landing.jsonc` in the blocks folder;
3. Create a new custom template entitled `store.custom#landing`;
4. Define the [`image`](https://developers.vtex.com/docs/vtex-store-components-image) block as one of this template's blocks. This block must have `minWidth` props of 100% and an image of your choosing:

   ```json
       "store.custom#landing": {
           "blocks": [
               "image#landingbanner"
           ]
       },
       "image#landingbanner": {
           "props": {
               "src": "https://storecomponents.vteximg.com.br/arquivos/box.png",
               "minWidth": "100%"
           }
       },
   ```

5. Add the `search-result-layout.customQuery` block:

   ```diff
   // store/blocks/search-landing.jsonc
   {
     "store.custom#landing": {
       "blocks": [
         "image#landingbanner",
   +     "search-result-layout.customQuery"
       ]
     }
   }
   ```

6. Define the `search-result-layout.customQuery` block as the [_querySchema_ prop](https://developers.vtex.com/docs/vtex-search-result#step-3---defining-how-the-search-query-data-should-be-fetched) that:

- Sorts by latest release date;
- Hides unavailable items;
- Displays a max of 8 items per page;
- Uses "Camera" as _query_.

  ```json
      "search-result-layout.customQuery": {
          "props": {
              "querySchema": {
                  "orderByField": "OrderByReleaseDateDESC",
                  "hideUnavailableItems": true,
                  "maxItemsPerPage": 8,
                  "queryField": "Blue Top Retro Camera",
                  "mapField": "ft"
              }
          }
      }
  ```

7. At this point, you're probably not seeing the block on the landing page. This is due to the facr that we have not add a block to the `search-result-layout.customQuery` yet. Here are two possibilities:

   - In case of having already done the previous courses, you probably have already changed the `search.jsonc` file in this template that we're using, in order to use the flex layout concept. Having it already done, it's only necessary to add the following code lines to the `search-landing.jsonc` file:

     ```diff
     // store/blocks/search-landing.jsonc
     {
     ...
     "search-result-layout.customQuery": {
         "props": {
             "querySchema": {
                 "orderByField": "OrderByReleaseDateDESC",
                 "hideUnavailableItems": true,
                 "maxItemsPerPage": 8,
                 "queryField": "Camera",
                 "mapField": "ft",
                 "skusFilter": "ALL_AVAILABLE"
             }
         },
     +     "blocks": [
     +       "search-result-layout.desktop"
     +     ]
     }
     }
     ```

   - In case of not having enrolled for the previous courses and the `search.jsonc` is empty, it's necessary to add blocks to it. To do that, you can use the code block below. After doing that, you'll only need to add the `search-result-layout.desktop` block to the blocks array of `search-result-layout.customQuery`, just as mentioned before.

     ```json
     // store/blocks/search.jsonc
     {
       "store.search": {
         "blocks": ["search-result-layout"]
       },
       "search-result-layout": {
         "blocks": [
           "search-result-layout.desktop",
           "search-result-layout.mobile",
           "search-not-found-layout"
         ]
       },
       "search-result-layout.desktop": {
         "children": [
           "breadcrumb.search",
           "search-title.v2",
           "flex-layout.row#top",
           "search-fetch-previous",
           "flex-layout.row#results",
           "search-fetch-more"
         ],
         "props": {
           "pagination": "showMore"
         }
       },
       "flex-layout.row#top": {
         "children": ["total-products.v2", "order-by.v2"]
       },
       "flex-layout.row#results": {
         "children": ["flex-layout.col#filter", "flex-layout.col#search"]
       },
       "flex-layout.col#filter": {
         "props": {
           "width": "20%"
         },
         "children": ["filter-navigator.v3"]
       },
       "flex-layout.col#search": {
         "children": ["search-content"]
       }
     }
     ```

     > Neste caso, aproveite para observar com calma o código adicionado, de forma que você se assegure de que entendeu as relações entre os blocos e a função de cada um.

The expected result is:

![image](https://user-images.githubusercontent.com/19495917/90278827-7033c100-de3e-11ea-9083-4d7279312d7f.png)
