# Making your content responsive

## :sparkles: **Branch:** responsive

## Introduction

An e-commerce's homepage is always the client's first contact with the brand. Therefore, it's common for retailers to want to establish **direct communication** with their users at this strategic point in time during navigation.

Several components in Store Framework serve this scenario, such as the [Info Card](https://vtex.io/docs/components/all/vtex.store-components/info-card), which we looked at previously, and the [**Rich Text**](https://vtex.io/docs/components/all/vtex.rich-text/).

As we have seen during [step three](https://github.com/{{ user.username }}/store-framework/issues/3), the Rich Text is responsible for transforming texts into HTML elements, having the big advantage of reading [**Markdown**](https://www.markdownguide.org/). This give the component the flexibility to accept various text structures, allowing retailers to build their communication in more direct and clear way. 

## Configuring the Rich Text

Just as with its functionality, the Rich Text configuration is also simple.

The same way that "**Hello, world!**" was created, we can create a block implementation example using written text in markdown format. For example:

```json
"rich-text": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},
```

As previously stated, using Markdown allows for more component flexibility. However, it may also lead to your alteration in your rendering, according to the device used by the user.

For example: the above sentence ( `# Your Coffee, Your Way \n ### New Coffee Makers Collection` ) can be use a markdown that's suitable for desktop, but not necessarily for mobile as well (whose screen size is smaller). 

To resolve this scenario and make the behavior more adaptable to other devices, we should use the [**Responsive Layout**](https://vtex.io/docs/components/layout/vtex.responsive-layout).

First, we must declare the blocks in the `store.home` template:

`"responsive-layout.desktop#desktop",
 "responsive-layout.mobile#mobile"`

Then, we must declare these blocks as follows: 

```json

...

"responsive-layout.desktop#desktop": {
  "children": ["rich-text#desktop"]
},

"responsive-layout.mobile#mobile": {
  "children": ["rich-text#mobile"]
},

"rich-text#desktop": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},

"rich-text#mobile": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
}
```

As we interpret the code above, we can notice two Rich Text configurations, built based on `responsive-layout.desktop#desktop` and `responsive-layout.mobile#mobile`. 

## Activity

During this activity, we will play around a little with the [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/) markdown and learn how to use it with the [Image](https://vtex.io/docs/components/all/vtex.store-components/image) component. All the while using Responsive Layout, of course!

### Desktop:

![image](https://user-images.githubusercontent.com/12139385/70152049-414c3500-168b-11ea-8da3-4f4ce0f5fee6.png)

### Mobile:

![image](https://user-images.githubusercontent.com/12139385/70152883-bf5d0b80-168c-11ea-81e0-25be5ed3d5ce.png)

1. Add the code given above to `home.jsonc` and declare the `responsive-layout` block in the `store.home` template:

    ```json
    {
      "store.home": {
        "blocks": [
          "responsive-layout.desktop#desktop",
          "responsive-layout.mobile#mobile"
        ]
      },
    ```

2. In `rich-text#mobile`, alter the markdown of the first sentence to `h3` and of the second to `h4`:

    ```json
      "rich-text#mobile": {
        "props": {
          "text": "### Your Coffee, Your Way \n #### New Coffee Makers Collection",
          "textPosition": "CENTER",
          "textAlignment": "CENTER"
        }
      },
    ```

> Note: check the Markdown syntax in the [**Markdown Documentation**](https://www.markdownguide.org/).

3. Add `image#desktop` as a child of `responsive-layout.desktop#desktop`. Repeat the process with `image#mobile` and `responsive-layout.mobile#mobile`:

    ```diff
      "responsive-layout.desktop#desktop": {
        "children": [
          "rich-text#desktop",
    +      "image#desktop"
        ]
      },

      "responsive-layout.mobile#mobile": {
        "children": [
          "rich-text#mobile",
    +      "image#mobile"
        ]
      },
    ```

4. Declare the following Image blocks:

    ```json
    "image#desktop": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Desktop.jpg?q=1",
        "link": {
          "url": "/small-appliances/coffee-makers"
        } ,
        "alt": "Coffee Makers Collection"
      }
    },

    "image#mobile": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Mobile.jpg?q=1",
        "link": {
          "url": "/small-appliances/coffee-makers"
        } ,
        "alt": "Coffee Makers Collection"
      }
    },
    ```

5. When analyzing the [Image component](https://vtex.io/docs/components/general/vtex.store-components/image) props, set the two images' max width to `100%`:

    ```diff
      "image#desktop": {
        "props": {
          "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Desktop.jpg?q=1",
    +      "maxWidth": "100%",
          ...
        }
      },

      "image#mobile": {
        "props": {
          "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Mobile.jpg?q=1",
    +      "maxWidth": "100%",
          ...
        }
      },
    ```


:information_source: Remember to access the Responsive Layout [documentation]((https://vtex.io/docs/components/layout/vtex.responsive-layout)) if you have any question during your activity.
