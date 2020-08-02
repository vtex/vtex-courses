```store/blocks/menu-flex.jsonc
{
    "vtex.menu@2.x:submenu#major":{
        "children":[
          "flex-layout.row#major"
        ]
    },

    "flex-layout.row#major": {
        "children": [
          "flex-layout.col#menu",
          "flex-layout.col#img"
        ]
    },

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

    "image#menu": {
        "props": {
          "src": "https://appliancetheme.vteximg.com.br/arquivos/menu-washer.jpg",
          "link": {
            "url": "/small-appliances/coffee-makers"
          },
          "alt": "Coffee Makers Collection",
          "maxWidth": "200px"
        }
    },

    "flex-layout.col#menu": {
        "children": [
            "vtex.menu@2.x:menu#major"
        ] 
    }
}
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
    "vtex.menu@2.x:menu#major": {
        "children": [
          "menu-item#refrigerators",
...
```

