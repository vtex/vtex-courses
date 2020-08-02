```store/blocks/home.jsonc
{
  "store.home": {
    "blocks": [
      "rich-text",
      "info-card#button-right",
      "info-card#button-left",
      "flex-layout.row",
      "shelf"
    ]
  },
 ...
```

```store/blocks/shelf.jsonc
{
    "shelf": {
      "blocks": ["product-summary.shelf"],
      "props": {
        "category": 1,
        "orderBy": "OrderByTopSaleDESC",
        "paginationDotsVisibility": "desktopOnly",
        "productList": {
          "maxItems": 8,
          "itemsPerPage": 4,
          "minItemsPerPage": 1,
          "scroll": "BY_PAGE",
          "arrows": true,
          "titleText": "Top sellers"
        }
      }
    },
    "product-summary.shelf": {
      "children": [
        "product-summary-image",
        "product-summary-add-to-list-button",
        "product-summary-name",
        "product-rating-inline",
        "product-summary-space",
        "product-summary-price",
        "product-identifier.summary",
        "product-summary-buy-button"
      ]
  }
}
```
