# Refactoring blocks

Some blocks over time are replaced by others not only to increase flexibility and ease of operation, but also to optimize their behavior and performance.

The Slider Layout (known in the Complex Layouts course) has been improved so that it uses _lazy load_ in the loaded content. This means that products and images are only loaded when the user, in fact, requests them. This type of behavior is not available at Shelf and Carousel, and to further optimize performance, let's see how we can replace them.

## Activity

1. In the `home.jsonc` file, declare two blocks of text to replace the titles:


    ```diff
    // store/blocks/home/home.jsonc
    {
      ...
    + "rich-text#new-arrivals": {
    +   "props": {
    +     "text": "New arrivals",
    +     "font": "t-heading-2",
    +     "textPosition": "CENTER",
    +     "textAlign": "CENTER"
    +   }
    + },
    + "rich-text#clearance": {
    +   "props": {
    +     "text": "Clearance",
    +     "font": "t-heading-2",
    +     "textPosition": "CENTER",
    +     "textAlign": "CENTER"
    +   }
    + },
    }
    ```

2. Change the name of the shelves to use` list-context.product-list`:

    ```diff
    {
      ...
    - "shelf#new-arrivals": {
    + "list-context.product-list#new-arrivals": {
      ...
    - "shelf#clearance": {
    + "list-context.product-list#clearance": {
      ...
    }
    ```

3. Remove the shelf properties that are no longer needed on **both shelves**:

    ```diff
    {
      "list-context.product-list#new-arrivals": {
        "blocks": ["product-summary.shelf"],
        "props": {
          "orderBy": "OrderByTopSaleDESC",
    -     "paginationDotsVisibility": "never",
          "collection": "139",
    -     "productList": {
    -       "maxItems": 9,
    -       "itemsPerPage": 3,
    -       "minItemsPerPage": 1.5,
    -       "scroll": "BY_PAGE",
    -       "arrows": true,
    -       "titleText": "New arrivals"
    -     }
        }
      },
      ...
    }
    ```

4. Add a `slider-layout#shelf` to both `product-lists`:

    ```diff
    {
      "list-context.product-list#new-arrivals": {
        "blocks": ["product-summary.shelf"],
    +   "children": ["slider-layout#shelf"],
        ...
      },
      "list-context.product-list#clearance": {
        "blocks": ["product-summary.shelf"],
    +   "children": ["slider-layout#shelf"],
        ...
      },
    }
    ```

5. Finally, define the `slider-layout#shelf` so that it has the same behavior as the shelf we removed:

    ```diff
    {
      ...
    + "slider-layout#shelf": {
    +   "props": {
    +     "itemsPerPage": {
    +       "desktop": 3
    +     }
    +   }
    + }
    }
    ```

6. Edit the blocks being used in _template_:

    ```diff
    {
    "store.home": {
        "blocks": [
    -     "shelf#new-arrivals",     
    -     "shelf#clearance",
    +     "rich-text#new-arrivals",
    +     "list-context.product-list#new-arrivals",
    +     "rich-text#clearance",
    +     "list-context.product-list#clearance",
        ]
    }
    }
        
    ```

The result should be:

![image](https://user-images.githubusercontent.com/18701182/93842015-c977e700-fc6b-11ea-8cf5-0678a5f890fa.png)

> **TIP:** Try the same view-source investigation as in step 3 and see that the products on the second page of each shelf are not loaded into HTML after refactoring.