# Header

## :sparkles: **Branch:** header

## Introduction

In this step, we'll learn how to configure the store's first component: the [**Header**](https://vtex.io/docs/components/all/vtex.store-header/).

The Header plays a very important role on the store's main page, being responsible for housing other blocks that are crucial to user browsing, such as the search bar and the menu.

Desktop Header:
![image](https://user-images.githubusercontent.com/12139385/70191371-420ab880-16d7-11ea-9d28-fa2f184870ce.png)

Mobile Header:
![image](https://user-images.githubusercontent.com/12139385/70191413-6797c200-16d7-11ea-9401-754942f5d9a9.png)

## Configuring the Header

The Header block is **responsivo**, meaning that it can be configured to adapt to different devices, be it desktop or mobile. 

Below, we can see an implementation example: 

```json
{
  "header": {
    "blocks": [
      "header-layout.desktop",
      "header-layout.mobile"
    ]
  },
  "header.full": {
    "blocks": [
      "header-layout.desktop",
      "header-layout.mobile"
    ]
  },

  "header-layout.desktop": {
    "children": [
      "header-row#notification",
      "header-row#main"
    ]
  },

  "header-layout.mobile": {
    "children": [
      "header-row#notification",
      "header-row#main-mobile",
      "header-row#search"
    ]
  },
}
```

## Activity

We will now configure a Header for your store's main page from scratch, with a notification and search bar, logo, cart and login. We will not configure the menu for now, since we'll look at it in depth during our next activity. 

To implement a Header containing all these blocks, we'll start out from the code mentioned above and thus be able to build a responsive header, adaptable to desktop and mobile users alike. 

1. Unlike the behavior found in other blocks, the [Header](https://vtex.io/docs/components/all/vtex.store-header/) doesn't need to be declared in one your theme's templates, since it will rendered on every store page anyway. In this exercise, we will declare the `header` block in the `header.jsonc` file, which must be created in the `store/blocks` folder.

2. Thereafter, declare the following block in the file you just created:

    ```json
    "header-row#notification": {
      "children": [
        "header-spacer",
        "rich-text#header",
        "header-spacer"
      ]
    },
    ```

3. Based on the block above, build the `header-row#main`, giving it the following *children*: `logo`, `header-spacer`, `search-bar`, `minicart` and `login`:

    ```json
        "header-row#main": {
            "children": [
                "logo",
                "header-spacer",
                "search-bar",
                "minicart",
                "login"
            ]
        }
    ```

4. Still in the `header-row#main` block, declare the `inverted`, `sticky` and `fullWidth` props with the following values: `true`, `true` and `false`, respectively:

```diff
    "header-row#main": {
        "children": [
        ...
        ],
+        "props": {
+            "inverted": true,
+            "sticky": true,
+            "fullWidth": false
+       }
    },
```
5. Copy and paste the code below to configure the header block for mobile, in the same way that we did for desktop before:

    ```json
    "header-row#main-mobile": {
      "children": [
        "logo",
        "header-spacer",
        "minicart",
        "login"
      ],

      "props": {
        "sticky": true,
        "inverted":true
      }
    },

    "header-row#search": {
      "children": [
        "search-bar"
      ],
      "props": {
        "sticky": true
      }
    },

    ```

6. Declare the block responsible for defining the store's login and logo, using the code displayed below, which will be used by the Header of the two devices;

    ```json
    "login":{
      "props": {
        "showIconProfile": true,
        "iconLabel": "Login"
      }
    },

    "logo":{
      "props": {
        "url": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/flatflat___6081e50402943bcb11bc45a8e613aa72.png"
      }
    },
    ```

7. Lastly, we need to declare the notification Header line's main component (`"header-row#notification"`): the Rich Text;

    ```json
    "rich-text#header": {
      "props": {
        "text": "**Free Shipping on orders over $50**",
        "textPosition": "CENTER"
      }
    }
    ```

8. Following the recipe on [**customizing store icons**](https://vtex.io/docs/recipes/style/customizing-your-stores-icons), replace the default icon used in the search bar and in the cart with the examples below.

- New search bar:

  ```html
  <path fill="currentColor" d="M4,13H1c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V13z"></path> <path fill="currentColor" d="M15,3H1C0.448,3,0,2.552,0,2v0c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v0C16,2.552,15.552,3,15,3z"></path> <path fill="currentColor" d="M4,8H1C0.448,8,0,7.552,0,7v0c0-0.552,0.448-1,1-1h3V8z"></path> <path fill="currentColor" d="M15.707,13.293l-2.274-2.274C13.785,10.424,14,9.74,14,9c0-2.206-1.794-4-4-4S6,6.794,6,9 s1.794,4,4,4c0.74,0,1.424-0.215,2.019-0.567l2.274,2.274L15.707,13.293z M10,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S11.103,11,10,11z"></path>
  ```

- New cart icon:

  ```html
  <path fill="currentColor" d="M15,6h-1.4l-2.7-5.4C10.6,0.1,10-0.1,9.6,0.1C9.1,0.4,8.9,1,9.1,1.4L11.4,6H4.6l2.3-4.6 c0.2-0.5,0-1.1-0.4-1.3C6-0.1,5.4,0.1,5.1,0.6L2.4,6H1c-1.1,0-1.1,1-0.9,1.4l3,8C3.2,15.7,3.6,16,4,16h8c0.4,0,0.8-0.3,0.9-0.6l3-8 C16.1,7,16,6,15,6z"></path>
  ```

After completing step 8, the new search bar and cart icon should be rendered on your store page as follows:

![new-store-icons](https://user-images.githubusercontent.com/52087100/69972450-652f3f80-1500-11ea-93b0-c9a652622840.png)

:information_source: Remember to access the header [documentation](https://vtex.io/docs/components/all/vtex.store-header/) if you have any questions during the activity.
