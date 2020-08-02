```store/blocks/about-us.jsonc
{
    "store.custom#about-us": {
        "blocks": [
            "tab-layout#home"
        ]
    },
    ...
    },
    "tab-list.item#home2": {
        "props": {
            "label": "Instagram",
            "tabID": "instagram"
        }
    },
    ...
    },
    "tab-content.item#home2": {
        "children": [
            "iframe"
        ],
        "props": {
            "tabId": "instagram"
        }
    },
    "iframe": {
        "props": {
            "src": "https://www.instagram.com/p/B973Qp8BacC/embed",
            "width": 800,
            "height": 1000
        }
    },
    ...
```