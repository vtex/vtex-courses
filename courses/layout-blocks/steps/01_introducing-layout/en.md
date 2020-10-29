# Presenting layout blocks

## Introduction

In previous courses, we saw how to use basic blocks of the Store Framework that bring functionality, but in general, are very simple to be used in a real store layout.

The least we need when building a _template_ is to define a _grid_, that is, to be able to arrange blocks next to each other, but there are still many other more complex _layouts_ that in general need to be achieved: tabs, modes, stacked, etc.

In this course, we will learn how it is possible to use some of the _layout_ blocks and better understand each of the peculiarities.

## Pattern between _layouts_

Although each _layout_ block has its functionality, the idea behind them is very similar. They all depend heavily on the concept of `children`, that is, to receive child blocks and define the rendering rule. It is also common for _layout_ blocks to present some formatting rules but that always culminates in using any child block, thus ensuring flexibility in reaching the desired template.

```json
{
  "layout-block": {
    "children": [
      "anything"
    ]
  }
}
```
*Example of the idea of ​​all layout blocks*

## Activity

For the course to work well, we need to add the _apps_ dependencies of _layout_ that we will need.

1. Go to your theme's `manifest.json` and check the following dependencies:

```diff
{
  ...
  "dependencies": {
    ...
+   "vtex.condition-layout": "1.x",
+   "vtex.store-link": "0.x",
+   "vtex.modal-layout": "0.x",
+   "vtex.product-price": "1.x",
+   "vtex.stack-layout": "0.x",
+   "vtex.tab-layout": "0.x",
+   "vtex.responsive-layout": "0.x",
+   "vtex.slider-layout": "0.x",
  }
}
```
