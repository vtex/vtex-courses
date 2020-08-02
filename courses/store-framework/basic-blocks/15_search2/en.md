# Adjusting the search page's layout  

## :sparkles: *Branch:* search2 

## Introduction 

In the last step, we've looked at the search page and its main components. We also learned that the search layout works like any other block, with the added benefit of having all the flexibility it can muster. In this step, we'll create some lines and columns to improve the appearance of the created search. 

## Activity

![image](https://user-images.githubusercontent.com/18701182/69843559-db088200-1246-11ea-8873-8651dd973be9.png) 

1. In the `search.jsonc` file, remove `total-products.v2` and `order-by.v2` from `search-result-layout.desktop`. 
2. Replace both with a line that includes the removed blocks: 

    ```json
    ...
    "flex-layout.row#top": {
      "children": [
        "total-products.v2",
        "order-by.v2"
      ]
    }
    ...
    ```

3. Remove `search-content` and `filter-navigator.v3` from `search-result-layout.desktop` and create a results line:

    ```diff
      "search-result-layout.desktop": {
        "children": [
          "breadcrumb.search",
          "search-title.v2",
          "flex-layout.row#top",
          "search-fetch-previous",
    +      "flex-layout.row#results",
          "search-fetch-more"
        ],
        "props": {
          "pagination": "show-more"
        }
      },
    ```

4. Place two columns in the results line:

    ```json
    {
      ...
      "search-result-layout.desktop": {
        "children": [
          "breadcrumb.search",
          "search-title.v2",
          "flex-layout.row#top",
          "search-fetch-previous",
          "flex-layout.row#results",
          "search-fetch-more"
        ]
      },
      "flex-layout.row#results": {
        "children": [
          "flex-layout.col#filter",
          "flex-layout.col#search"
        ]
      },
      ...
    }
    ```
5. Set the `filter` column's `width` prop to `20%`:

    ```json
      "flex-layout.col#filter": {
        "props": {
          "width": "20%"
        }
      },
    ```

6. In the left column, include `filter-navigator.v3` again and, in the right, include `search-content`. 

    ```diff
      "flex-layout.col#filter": {
        "props": {
          "width": "20%"
        },
    +    "children": [
    +      "filter-navigator.v3"
    +    ]
      },

      "flex-layout.col#search": {
    +    "children": [
    +      "search-content"
    +    ]
      },
    ``` 

To finish, we'll use the same *product summary* (`product-summary`) that we used to display search results on the shelf. 

7. Define your `search-content` with the `gallery` and `not-found` blocks:
    ```json
    {
      ...
      "search-content": {
        "blocks": ["gallery", "not-found"]
      }
      ...
    }
    ```
8. Use `product-summary.shelf` in the Gallery's props:
    ```json
    {
      ...
      "search-content": {
        "blocks": ["gallery", "not-found"]
      },
      "gallery": {
        "blocks": ["product-summary.shelf"]
      }
      ...
    }
    ```
9. In the `product-summary.shelf` block, found in `default.jsonc`, include `product-summary-sku-selector` above `product-summary-buy-button`:

    ```diff
    ...
          "product-summary-space",
          "product-summary-price",
          "product-identifier.summary",
    +      "product-summary-sku-selector",
    +      "product-summary-buy-button"
        ]
      }
    ```


:information_source: Remember to access the Flex Layout [documentation](https://vtex.io/docs/components/layout/vtex.flex-layout) if you have any questions during the activity. 
