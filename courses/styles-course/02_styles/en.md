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

![](https://user-images.githubusercontent.com/18701182/69848770-b36ee500-1259-11ea-882a-b2ac5ebdde4d.png) 

Looking at the side bar that opened in Chrome, we notice a couple of definitions, one of them being the button background color (#0f3e99): 

![](https://user-images.githubusercontent.com/18701182/69849050-77884f80-125a-11ea-87d2-7a148fd56787.png) 

In addition, if you inspect while hovering, you'll notice the *hover* color (#072c75): ![image](https://user-images.githubusercontent.com/18701182/69849774-5f193480-125c-11ea-82e2-f118c8014287.png) 

If we search the occurrences of both colors in `style.json`, we uncover that the colors we inspected are actually used as `action-primary` for the `hover-background` and `background`, for example. This gives us a better idea of where this definition may appear again. 

### Typography 

The process to discovering text semantics with editable fields is the same as the above, we can search for attributes such as font size, weight and family. When inspecting a level 1 heading for example, we notice that its size is 3 rem.

![image](https://user-images.githubusercontent.com/18701182/69850262-ab18a900-125d-11ea-8ba8-e6a64874ca04.png) ![image](https://user-images.githubusercontent.com/18701182/69850281-b1a72080-125d-11ea-8c46-302b6a4f9749.png) 

## Globally changing color and typography
 

1. In `style.json`, replace every color occurrence that you find, substituting: 
- **#072c75** with **#45a6a3** 
- **#0F3E99** with **#52BAB7** 

2. Change the font size for a level 1 heading so that its height is now 2.5 rem:

    ```diff
        "heading-1": {
            "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
            "fontWeight": "700",
    +        "fontSize": "2.5rem",
            "textTransform": "initial",
            "letterSpacing": "0"
        },
    ```

The expected result is as it follows:

<img src="https://user-images.githubusercontent.com/18701182/69850673-8b35b500-125e-11ea-824b-3f3f3235e575.png" width="400" />

