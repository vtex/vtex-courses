```store/blocks/header.jsonc
"header-layout.desktop": {
      "children": [
        "header-row#notification",
        "header-row#main"
        "header-row#main",
        "header-row#menu"
      ]
    },

    "header-row#menu": {
      "children": [
        "header-spacer",
        "vtex.menu@2.x:menu#categories",
        "header-spacer"
      ]
    },

    "header-row#menu-mobile": {
      "children": [
        "header-spacer",
        "vtex.menu@2.x:menu#categories",
        "header-spacer"
      ]
    },
    ...
    "header-row#main": {
        "children": [
          "drawer",
          "logo",
          "header-spacer",
          "search-bar",
          ...

    "header-row#main-mobile": {
        "children": [
          "drawer",
          "logo",
          "header-spacer",
          "minicart",
          ...
```

```store/blocks/menu-items.jsonc
{
  "menu-item#major-appliances": {
    "blocks": [
      "vtex.menu@2.x:submenu#major"
    ],
      "props": {
      "type": "custom",
      "highlight": true,
      ...
    }
  },
  "menu-item#small-appliances": {
    "blocks": [
      "vtex.menu@2.x:submenu#small"
    ],
    ...
  },
  "menu-item#electronics": {
    "blocks": [
      "vtex.menu@2.x:submenu#electronics"
    ],
    ...
```

```store/blocks/menu.jsonc
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

    "vtex.menu@2.x:submenu#major":{
        "children":[
          "vtex.menu@2.x:menu#major"
        ]
    },

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

     "vtex.menu@2.x:submenu#small":{
        "children":[
          "vtex.menu@2.x:menu#small"
        ]
     },

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
}
```

````store/blocks/search-landing.jsonc
...
    "search-result-layout.customQuery": {
        "blocks": [
            "search-result-layout.desktop"
        ],
        "props": {
        ...
```