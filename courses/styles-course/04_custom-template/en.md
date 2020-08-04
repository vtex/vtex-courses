# Creating custom templates

## Introduction

Until now, you've learned how to use CSS, Tachyons, and Markdown in order to customize your blocks on Store Framework. However, it's also important to learn how to create custom templates, so your store can have custom landing pages, for example, with a well-defined URL and specific content to display.

Stores are made up of several different pages, each with a specific content and layout. When creating a store from scratch in VTEX IO, some default pages with preset URLs are already available. Below, we have a list of some of these default pages:

- `store.home` (Home page)
- `store.product` (Product page)
- `store.search` (Search Results page)
- `store.account` (Client Account page)
- `store.login` (Login page)
- `store.orderplaced` (Order Placed page)

In this step, you'll learn how to create a custom template from scratch.

## Creating a Landing Page

Just a few steps are needed to create a custom landing page:

1. Create a new template in your store's theme
2. Create a new path to access this template

### Template

A template defines the page layout. However, if you want to create a custom page, you will also need to create a new template in your theme.

Let's imagine that you want to create a simple page containing information about your store. Inside the `blocks` folder, you can create a file that would contain the following code, declaring a new template for a custom page,

```json
{
 "store.custom#{templatename}": {
     "blocks": [
     ]
  }
}
```

where `{templateName}` must be replaced with the template's identifying name. 

Then, you should fill in the code with the components needed to create the layout. Below we have an example of such implementation:

```json
{
 "store.custom#{templatename}": {
   "blocks": [
     "flex-layout.row#about-us"
   ]
 },
 "flex-layout.row#about-us": {
   "children": [
     "image#about-us",
     "flex-layout.col#text-about-us"
   ]
 },
 "flex-layout.col#text-about-us": {
   "children": [
     "rich-text#about-title",
     "rich-text#about-content"
   ],
       "props": {
     "preventVerticalStretch": true
   }
 },
"rich-text#about-title": {
   "props": {
     "text":
     "# About FlatFlat"
   }
 },
 "rich-text#about-content": {
   "props": {
     "text":
     " FlatFlat is an electronics store with a long standing tradition for creating modern and vintage items. Out objective is to create home appliances that make your house stand out, no matter your style. Merely 2 months old, we're already the store with the most beautiful products among all VTEX stores. We are currently building our site with the aim of giving our customers an unforgetable experience with our brand!"
   }
 },
 "image#about-us": {
   "props": {
     "src": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-about-us.png",
     "maxHeight": "600px"
   }
 }
}
```

### Path

Now that a new template with the page layout has been defined in the store theme's code, the next step is to establish the page's page that would lead to this layout. 

We must create a `routes.json` file in your theme's `store` folder. Afterwards, insert the code below,

```json
{
  "store.custom#about-us": {
    "path": "/{URL}"
  }
}
```

where `{URL}` is the name of the desired path.

Let's create a page containing information about your store, as in the example below: 

![](https://appliancetheme.vteximg.com.br/arquivos/about-us-activity.png)

1. In the `blocks` folder, create a file called `about-us.jsonc`;
2. Declare a `store.custom#about-us` template in this file;
3. Include a "flex-layout.row#about-us" block in this template:

    ```json
    {
        "store.custom#about-us": {
          "blocks": [
            "flex-layout.row#about-us"
          ]
        }
    }
    ```

4. After declaring `flex-layout.row`, use the code in example given above to complete the page layout;
5. In the `store` folder, create a file called `routes.json`;
6. In this file, declare an `/about-us` path:

    ```json
    {
      "store.custom#about-us": {
        "path": "/about-us"
      }
    }
    ```

7. Once the code is linked, access `{workspace}--appliancetheme.myvtex.com/about-us` to see your new landing page.