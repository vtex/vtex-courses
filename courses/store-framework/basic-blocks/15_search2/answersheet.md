```store/blocks/default.jsonc
...
      "product-summary-space",
      "product-summary-price",
      "product-identifier.summary",
      "product-summary-sku-selector",
      "product-summary-buy-button"
    ]
  }
```

```store/blocks/search.jsonc
...
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
      "pagination": "show-more"
    }
  },

  "flex-layout.row#results": {
    "children": [
      "flex-layout.col#filter",
      "flex-layout.col#search"
    ]
  },

  "flex-layout.row#top": {
    "children": [
      "total-products.v2",
      "order-by.v2"
    ]
  },

  "flex-layout.col#filter": {
    "props": {
      "width": "20%"
    },
    "children": [
      "filter-navigator.v3"
    ]
  },

  "flex-layout.col#search": {
    "children": [
      "search-content"
    ]
  },

  "search-content": {
    "blocks": ["gallery", "not-found"]
  },

  "gallery": {
    "blocks": ["product-summary.shelf"]
  }

}
```