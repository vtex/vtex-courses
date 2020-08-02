# Advanced menu with Flex Layout

## :sparkles: **Branch:** menuflex

## Introduction 

As we've seen in the last step, a Submenu accepts any Store Framework block as *child*.

With this in mind, we can improve the previous activity's [Menu](https://vtex.io/docs/components/all/vtex.menu/) configuration, adding to its content by using [**Flex Layout**](https://vtex.io/docs/components/layout/vtex.flex-layout). 

## Activity

According to what we did in the last activity and what was learned about Flex Layout, let's apply Flex Layout to the *Major Appliances* submenu. 

1. In the `menu.jsonc` file, **remove** the block of code in which you define `vtex.menu@2.x:submenu#major` and also its children. This code block will be declared in a new file:

    ```json
    "vtex.menu@2.x:submenu#major": {
          "children":[ "vtex.menu@2.x:menu#major" ]
      },
    "vtex.menu@2.x:menu#major": {
        "children": [
            "menu-item#refrigerators",
            "menu-item#ovens",
            "menu-item#washers"
        ],
        "props": {
            "orientation": "vertical"
        }
    },
    ```

2. Create the `menu-flex.jsonc` file, the code block that is declared above needs to be in this file; `flex-layout.row#major` will be in the *children* list pertaining to the `vtex.menu@2.x:submenu#major` block and it's defined as:

    ```json
    {
      ...
      "flex-layout.row#major": {
        "children": [
          "flex-layout.col#menu",
          "flex-layout.col#img"
        ]
      },
      ...
    }
    ```

3. Now, let's declare the blocks defined in `flex-layout.row#major`. To start, declare the `flex-layout.col#menu` block, having `vtex.menu@2.x:menu#major` as *child*:

    ```json
        "flex-layout.col#menu": {
            "children": [
                "vtex.menu@2.x:menu#major"
            ] 
        }
    ```

4. Do the same for the `flex-layout.col#img` block, declaring `image#menu` and `rich-text#header` as its children, in addition to the props `paddingRight` and `horizontalAlign` with values `4` and `right`:

    ```json
        "flex-layout.col#img": {
            "children": [
                "image#menu",
                "rich-text#header"
            ],

            "props":{
                "paddingRight": 4,
                "horizontalAlign": "right"
            }
        },
    ```

5. Lastly, let's declare the former `image#menu` as *child* in this last step, using the code below:

    ```json
    ...
    "image#menu": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/arquivos/menu-washer.jpg",
        "link": {
          "url": "/small-appliances/coffee-makers"
        },
        "alt": "Coffee Makers Collection",
        "maxWidth": "200px"
      }
    }
    ```

:information_source: Remember to access the documentation of both [Flex Layout](https://vtex.io/docs/components/layout/vtex.flex-layout) and [Menu](https://vtex.io/docs/components/all/vtex.menu/) if you have any questions during the activity.

Expected result:
![](https://user-images.githubusercontent.com/18701182/73485057-365b0b80-4381-11ea-9c0b-4fad693f829a.png)

