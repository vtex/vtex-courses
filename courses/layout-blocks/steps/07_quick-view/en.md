# Quick View

## Introduction

We will follow the concepts learned in the previous step and go a little deeper to learn how to build the behavior of _Quick View_ on a product shelf.

## Activity

1. Add a shelf to your home page:

```diff
{
  "store.home": {
    "blocks": [
      ...
+     "list-context.product-list"
    ]
  },
+ "list-context.product-list": {
+   "blocks": ["product-summary.shelf"],
+   "children": ["slider-layout"]
+ },
+ "product-summary.shelf": {
+   "children": [
+     "product-summary-name",
+     "product-selling-price"
+   ]
+ }
}
```

2. In the `product-summary` add a _trigger_ for the modal:

```diff
{
  ...
 "product-summary.shelf": {
   "children": [
+    "modal-trigger#quickview",
     "product-summary-name",
     "product-selling-price"
   ]
 }
}
```

3. So, let's make the _trigger_ for the modal the product image and define that we will use a _layout_:

```diff
{
  ...
  "product-summary.shelf": {
    "children": [
      "modal-trigger#quickview",
      "product-summary-name",
      "product-selling-price"
    ]
  },
+ "modal-trigger#quickview": {
+   "children": ["product-summary-image", "modal-layout#quickview"]
+ }
}
```

4. To close, let's define a simple modal with some product options:

```diff
{
  ...
+ "modal-layout#quickview": {
+   "children": [
+     "product-summary-name",
+     "product-images",
+     "product-summary-sku-selector",
+     "product-summary-quantity",
+     "add-to-cart-button"
+   ]
+ }
}
```

The result, then, should be:

![modallayout](https://user-images.githubusercontent.com/18701182/90278764-585c3d00-de3e-11ea-8fa9-491a1cfd6001.gif)
