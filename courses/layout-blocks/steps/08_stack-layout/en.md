# Stack Layout

## Introduction

Stack Layout is yet another possible type of building complex _layouts_ by leveraging native blocks, with which you can easily stack blocks. For this step, we are going to create a _call-to-action_ (CTA) on the main page with a _banner_ and a redirect button.

## Activity

Thinking better about the problem we want to solve, we managed to divide it into two parts:

- A background image (`image` block):

![image](https://appliancetheme.vtexassets.com/assets/app/src/appliancecat___1b7592b49667c6a89203a0997e06bc87.jpg)

- A CTA button: 

![image](https://user-images.githubusercontent.com/18701182/90291114-8a2cce00-de55-11ea-982c-3fef741535fb.png)

So let's build _info card_ using both elements:

1. Declare the stack-layout on your page:

```diff
{
  "store.home": {
    "blocks": [
+     "stack-layout#cta"
    ]
  }
}
```

2. Add an image and _link_ to the `stack-layout`:

```diff
{
  "store.home": {
    "blocks": [
     "stack-layout#cta"
    ]
  },
+ "stack-layout#cta": { 
+   "children": [
+     "image#cta",
+     "link#cta"
+   ]
+ }
}
```

3. Declare the image and _link_ that we will use:

```diff
{
  ...
+ "image#cta": {
+   "props": { 
+     "blockClass": "cover",
+     "width": "100%",
+     "height": 400,
+     "src": "https://appliancetheme.vtexassets.com/assets/app/src/appliancecat___1b7592b49667c6a89203a0997e06bc87.jpg"
+   }
+ },
+ "link#cta": { 
+   "props": {
+     "displayMode": "button",
+     "buttonProps": {
+       "variant": "primary",
+       "size": "large" 
+     },
+     "href": "/washer",
+     "label": "Check these awesome discounts"
+   }
+ }
}
```

4. The result should then be:

![infocard](https://appliancetheme.vtexassets.com/assets/app/src/appliancecat___0a2e8bde5418359bdaf0a06d9a4d09f5.jpg)

**OPTIONAL:** If you want to improve the look of the _info card_ created a little, follow the steps below:

5. Create a `vtex.stack-layout.css` file in the `/styles/css` folder and add the following styles:

```
.stackItem {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

6. In the `vtex.store-components.css` file in the `/styles/css` folder add:

```
.imageElement--cover {
  object-fit: cover;
}
```

The result should then be:

![image](https://user-images.githubusercontent.com/18701182/90292857-22788200-de59-11ea-9a9c-8668b01ffb1c.png)

## Grades

- Don't worry if you don't really understand how the styling done in the optional steps worked, we have an exclusive styling course that will be seen later on.

- If you clicked the button and you are not seeing a search result page, make sure you have a defined search layout (we saw this in the basic blocks' course) following the [Search Result](https://developers.vtex.com/docs/vtex-search-result#search-result) documentation.
