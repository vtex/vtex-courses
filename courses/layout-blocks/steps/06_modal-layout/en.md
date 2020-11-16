# Modal layout

## Introduction

It is also possible, with the Store Framework, to create a modals experience in the store. Whether to subscribe to a _newsletter_ or create a _quick view_, Modal Layout works like all other _layout_ blocks, in which any block can be used as its content.
 
In this step, we will then build a simpler modal, and then build a functional _Quick View_.

### A little more about how Modal Layout works

The Modal Layout block divides its logic into two sub-blocks: `modal-trigger` and` modal-layout`.

The modal-trigger is used to choose which block should be responsible for triggering the modal behavior, you could use an image, text, _link_ or the block you prefer.

The modal-layout defines which child blocks will be used within the modal. It is, therefore, in this block that the content of the modal itself must be placed.

## Activity

1. At your home, add a `modal-trigger # first` to the blocks:

```
{
  "store.home": {
    "blocks": [
      ...
      "modal-trigger#first"
    ]
  }
}
```

2. Then define the `modal-trigger#first` with a text from _Click Me_:

```
{ 
  ...
  "modal-trigger#first": {
    "children": [
      "rich-text#trigger"
    ]
  },
  "rich-text#trigger": { 
    "props": {
      "text": "CLICK ME"
    }
  }
}
```

3. Put the `modal-layout#first` as children of the `modal-trigger#first`:

```diff
{ 
  ...
  "modal-trigger#first": {
    "children": [
      "rich-text#trigger",
+     "modal-layout#first"
    ]
  },
  ...
+ "modal-layout#first": {
+   "children": [
+     "rich-text#hello"
+   ]
+ },
+ "rich-text#hello": { 
+   "props": {
+     "text": "Hello"
+   }
+ }
  ...
}
```

The result, then, should be:

![modal gif](https://user-images.githubusercontent.com/18701182/90183287-9f3c2b00-dd89-11ea-924d-6195465ffd25.gif)