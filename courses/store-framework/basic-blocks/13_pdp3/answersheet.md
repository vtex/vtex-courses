```store/blocks/product.jsonc
  "store.product": {
      "children": [
        "breadcrumb",
        "flex-layout.row#main",
        "shelf.relatedProducts"
      ]
    },
  ...
  "flex-layout.col#left": {
    "children": [
      "stack-layout#brand"
    ]
  },
  "stack-layout#brand": {
    "children": [
      "product-images",
      "product-brand"
    ]
  },
  "product-brand": {
    "props": {
      "display-mode": "logo",
      "height": 30
    }
  },
  ...
  "sku-selector": {
    "props": {
      "initialSelection": "empty",
      "showValueNameForImageVariation": true,
      "showVariationsErrorMessage": true
    }
  }
}
```