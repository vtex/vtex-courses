# Making your content responsive

## Introduction

The homepage of e-commerce is always the customer's first contact with the brand. For this reason, it is common for the shopkeeper to want to establish **direct communication** with his users at this strategic moment of navigation.

In the Store Framework, there are some components that address this scenario, such as [Info Card](https://developers.vtex.com/docs/vtex-store-components-infocard) and [Rich Text](https://developers.vtex.com/docs/vtex-rich-text#rich-text).

## Configuring Rich Text

As well as its functionality, the configuration of Rich Text is also simple, we can put together an example of implementing the block using text written in markdown. For example:

```json
"rich-text": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},
```

As mentioned earlier, the use of Markdown allows flexibility to the component. But, on the other hand, it can also cause your rendering to change according to the device used by the user.

For example, the phrase above (`#Your Coffee, Your Way\n###New Coffee Makers Collection`) can use a _markdown_ suitable for _desktop_, but not necessarily for _mobile_ (whose screen size is smaller).

To solve this scenario and make the component more adaptable to other devices, we must use the [**Responsive Layout**](https://developers.vtex.com/docs/vtex-responsive-layout).

First, we must declare the blocks within the `store.home` template:

`"responsive-layout.desktop#desktop", "responsive-layout.mobile#mobile"`

Then we must declare these blocks as follows:

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
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection (I'm on desktop)",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},

"rich-text#mobile": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection (I'm on mobile)",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
}
```

When interpreting the code above, notice how two Rich Text configurations are built using `responsive-layout.desktop#desktop` and`responsive-layout.mobile#mobile`.

## Activity

In this activity, let's play around with the [Rich Text](https://developers.vtex.com/docs/vtex-rich-text#rich-text) markdown and learn how to use it with the [Image](https://developers.vtex.com/docs/vtex-store-components-image) component. All of this using Responsive Layout, of course!

### Desktop:

![image](https://user-images.githubusercontent.com/12139385/70152049-414c3500-168b-11ea-8da3-4f4ce0f5fee6.png)

### Mobile:

![image](https://user-images.githubusercontent.com/12139385/70152883-bf5d0b80-168c-11ea-81e0-25be5ed3d5ce.png)

1. Add the code proposed above in the `home.jsonc` file and declare the`responsive-layout` blocks in the `store.home` template;
2. In `rich-text#mobile`, change the markdown of the first sentence to `h3` and the second to `h4`;

   > If you don't remember the Markdown syntax, you can consult it at [**Markdown Documentation**](https://www.markdownguide.org/).

3. Add `image#desktop` as children of `responsive-layout.desktop#desktop`. Do the same with `image#mobile` in `responsive-layout.mobile#mobile`;
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

5. Analyzing the [Image component](https://developers.vtex.com/docs/vtex-store-components-image#configuration) props, set the maximum width of the two images to `100%`.

Note: Remember to access the Responsive Layout [documentation](https://developers.vtex.com/docs/vtex-responsive-layout) if you have any questions during the activity.
