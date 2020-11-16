# Search improvements

One of the heaviest and least performing operations in a store's navigation is its search. To improve the experience, we can also optimize the search for data and make it more efficient, in this sense two points must be observed: the SKUs and the price

## Activity

1. To optimize the search context, add the `context` property to the search _template_ in the `store/blocks/search.jsonc` file:

    ``` diff
    // store / blocks / search.jsonc
    {
      "store.search": {
    + "props": {
    + "context": {}
    +},
        "blocks": ["search-result-layout # search"]
      },
      ...
    }
    ```

2. To guarantee reduction of loaded results and, therefore, reduce the volume of results. It is possible to control that only the first available SKU is returned, for this, add `skusFilter` to `context` as `FIRST_AVAILABLE`:

    ``` diff
    {
      "store.search": {
        "props": {
          "context": {
    + "skusFilter": "FIRST_AVAILABLE"
          }
        },
        "blocks": ["search-result-layout # search"]
      },
    }
    ```

3. To make prices more _cacheable_ and avoid simulating them for each search result obtained, we can also choose `skip` as` simulationBehavior`:

    ``` diff
    {
      "store.search": {
        "props": {
          "context": {
            "skusFilter": "FIRST_AVAILABLE"
    + "simulationBehavior": "skip"
          }
        },
        "blocks": ["search-result-layout # search"]
      },
    }
    ```