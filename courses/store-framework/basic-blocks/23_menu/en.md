# Menu

## :sparkles: **Branch:** menu

## Introduction

Having already configured and implemented the header, let's now add it to the  [**Menu**](https://vtex.io/docs/components/all/vtex.menu/). Configuring the Menu is an important step in building your theme, since it's the block that's responsible for the user's *navigation* in your store. Because of its function and relevance, the Menu possesses a complex hierarchical structure, which involves *menu items*, *submenus* and, based on the latter, any Store Framework block (such as other Menus e Menu Items). Below we can see an image highlighting the Menu block's structure in practice:

![menu](https://user-images.githubusercontent.com/52087100/70004800-5cf9f300-1546-11ea-81fc-369e4bb58ed5.png)

## Configuring the Menu

When compared to some of the other blocks, the Menu's configuration may seem more difficult due to its structure of menus, menu items and submenus. However the Menu does not necessarily need to be configured according to the most complex scenario. Below, we can check a basic implementation example for the block, containing just the following 3 Menu Items:

```json
{
  "vtex.menu@2.x:menu#categories": {
    "children": [
      "menu-item#major-appliances",
      "menu-item#small-appliances",
      "menu-item#electronics"
    ],

    "props":{
      "orientation": "horizontal"
    }
  }
},
```

## Activity

This activity will help us understand more about configuring the [Menu](https://vtex.io/docs/components/all/vtex.menu/), in addition to its existing hierarchy based on building *Menu Items* and Submenus.

1. In `header.jsonc`, add `header-row#menu` as the last item on the `header-layout.desktop` block's child list (configured during the previous activity), so that the Menu can be rendered by the store's Header:

    ```diff
    "header-layout.desktop": {
          "children": [
            "header-row#notification",
            "header-row#main"
            "header-row#main",
    +        "header-row#menu"
          ]
        },
    ```

2. Copy and paste the code below to declare the `header-row#menu` block:

    ```json
    "header-row#menu": {
      "children": [
        "header-spacer",
        "vtex.menu@2.x:menu#categories",
        "header-spacer"
      ]
    },
    ```

3. We also need to deal with the layout Menu for other devices, such as mobile. Therefore, add the [`drawer`](https://vtex.io/docs/components/all/vtex.store-drawer/) as the `header-row#main-mobile` block's first child:

    ```diff
        "header-row#main-mobile": {
            "children": [
    +          "drawer",
              "logo",
              "header-spacer",
              "minicart",
              ...
    ```

4. Copy the code in the `menu.jsonc` code to horizontally render the 3 main Menu items:

    ```json
    {
      "vtex.menu@2.x:menu#categories": {
        "children": [
          "menu-item#major-appliances",
          "menu-item#small-appliances",
          "menu-item#electronics"
        ],

        "props":{
          "orientation": "horizontal"
        }
    },
    ```

5. As we've seen in the introduction, a *Menu Item* can allow the configuration of a Submenu which in turn can have another Menu with its own *Menu Items*. Therefore, create a Submenu for *Major Appliances*, still in `menu.jsonc`, according to the example below:

    ```json
    "vtex.menu@2.x:submenu#major":{
      "children":[
        "vtex.menu@2.x:menu#major"
      ]
    },
    ```

6. Following the format established by the `vtex.menu@2.x:menu#categories\` block, build a secondary *Major Appliances* Menu, declared in the last step in `menu.jsonc`. You must set the `orientation` prop value to `vertical` and configure the following *Menu Items* in the block's children list: `menu-item#refrigerators`, `menu-item#ovens` and `menu-item#washers`:

    ```json
        "vtex.menu@2.x:menu#major": {
            "children": [
              "menu-item#refrigerators",
              "menu-item#ovens",
              "menu-item#washers"
            ],
            "props":{
              "orientation": "vertical"
            }
        },
    ```

7. In addition, create a *Small Appliances* submenu:

    ```json
    "vtex.menu@2.x:submenu#small":{
      "children":[
        "vtex.menu@2.x:menu#small"
      ]
    },
    ```

8. Now build the *Small Appliances* secondary menu in `menu.jsonc`. As with the *Major Appliances*, you must set the `orientation` prop value to `vertical` and configure the following *Menu Items* in the block children list: `menu-item#mixers`, `menu-item#toasters` and `menu-item#coffee`:

    ```json
        "vtex.menu@2.x:menu#small": {
            "children": [
              "menu-item#mixers",
              "menu-item#toasters",
              "menu-item#coffee"
            ],
            "props":{
              "orientation": "vertical"
            }
        },
    ```

9. Based on the previous steps, do the same with *Electronics*: create your Submenu (`vtex.menu@2.x:submenu#electronics`) and secondary Menu. Thereafter, build the latter with the same prop value (`vertical`) and configure the following *Menu Items* in the block's children list: `menu-item#cameras`, `menu-item#laptops` and `menu-item#tvs`:

    ```json
        "vtex.menu@2.x:submenu#electronics":{
            "children":[
              "vtex.menu@2.x:menu#electronics"
            ]
        },

        "vtex.menu@2.x:menu#electronics": {
            "children": [
              "menu-item#cameras",
              "menu-item#laptops",
              "menu-item#tvs"
            ],

            "props":{
              "orientation": "vertical"
            }
        }
    ```

Expected result:

<img src="https://appliancetheme.vteximg.com.br/arquivos/imagem-menu.png" width="400" />

:information_source: Remember to access the Menu's [documentation](https://vtex.io/docs/components/all/vtex.menu/) if your have any questions during the activity.
