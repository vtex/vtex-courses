# Global Styles  

## Introduction 

In addition to css, which we looked at previously, Store Framework offers another type of design customization, based on `style.json`. 

## Semantic styling

Every Store Framework block benefit from the same semantic styles definitions, based on [Tachyons](https://tachyons.io/). 
In practice, it means that instead of having to change all button backgrounds to use color that you want, you just need to redefine the color of an `action-primary` `background`. Customizations using `style.json` tend a very big impact through css, since the store's visual identity across every page is usually maintained that way, without requiring a lot of changes. Therefore, use this tool whenever possible, thus avoiding unnecessary css overhead. 

## Investigating `style.json` 

### Colors

![](https://user-images.githubusercontent.com/18701182/69848546-24fa6380-1259-11ea-9978-9020222ed77e.png)

`styles/configs/style.json` can be confusing at first, because it contains all the style definitions that every Store Framework visual block uses. However, inspecting browser elements is usually a good way to identify which styles to change. For example, *right mouse click on any store button and select inspect*. 

![image](https://user-images.githubusercontent.com/19495917/90169302-cb997c80-dd74-11ea-983e-6af755b1aa5d.png)

Looking at the side bar that opened in Chrome, we notice a couple of definitions, one of them being the text color (#3f3f40): 

![image](https://user-images.githubusercontent.com/19495917/90169845-875aac00-dd75-11ea-968b-db03f14435e7.png)

If we search the occurrences of this color in `style.json`, we uncover that the color we inspected are actually used as `base`, for example. This gives us a better idea of where this definition may appear again. 

### Typography 

The process to discovering text semantics with editable fields is the same as the above, we can search for attributes such as font size, weight and family. When inspecting a level 1 heading for example, we notice that its size is 3 rem.

![image](https://user-images.githubusercontent.com/19495917/90170621-b0c80780-dd76-11ea-9d41-c96639944e58.png)

![image](https://user-images.githubusercontent.com/19495917/90170541-9b52dd80-dd76-11ea-8390-f243e267e145.png)

## Globally changing color and typography
 

1. In `style.json`, replace every color occurrence that you find, substituting: 
- **#3f3f40** with **#e68e94**

2. Change the font size for a level 1 heading so that its height is now 2.5 rem:

    ```diff
        "heading-1": {
            "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
            "fontWeight": "700",
    +       "fontSize": "2.5rem",
            "textTransform": "initial",
            "letterSpacing": "0"
        },
    ```

The expected result is as it follows:

![image](https://user-images.githubusercontent.com/19495917/90172958-17025980-dd7a-11ea-80d1-31b6e3f3ac1f.png)


