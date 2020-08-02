# Tab layout

## :sparkles: **Branch:** tab-layout

## Introduction

[Tab Layout](https://vtex.io/docs/components/layout/vtex.tab-layout) is layout structuring paradigm created in Store Framework to allow the creation of layouts with tabs. 

We have the following two containers in this paradigm: `tab-list` and `tab-content`. Each of these containers contains the items that it's comprised of. In `tab-list`, we have `tab-list.item`, whereas in `tab-content`, we have `tab-content.item`, respectively.

We'll look at a tab layout implementation example below.

First, you need to declare the `tab-layout` block in the desired template:

```json
{
  "store.custom#about-us": {
    "blocks": [
      ...
      "tab-layout"
    ]
  }
}

```

Then, you need to declare a `tab-list` and a `tab-content` as `tab-layout`'s children:

```json
...
"tab-layout": {
  "children": [
    "tab-list",
    "tab-content"
  ]
}
```


Having done this, these two containers are components of our `tab-layout`. The next step is to declare `tab-list.item` and `tab-content.item` as `tab-list`'s and `tab-content`'s children:

```json
...
"tab-list": {
  "children": [
    "tab-list.item#1",
    "tab-list.item#2"
    ]
}
```

```json
...
"tab-content": {
  "children": [
    "tab-content.item#1",
    "tab-content.item#2"
    ]
}
```

In the next step, we'll declare the `tab-list.item` properties. The code below creates a tab interface similar to the image below:

![](https://appliancetheme.vteximg.com.br/arquivos/tab-list-items.png)

The `tabId` property is very important as it's the key that connect a `tab-list.item` button with a `tab-content.item`.

```json
...
"tab-list.item#1": {
  "props": {
    "tabId": "majorAppliances",
    "label": "Major Appliances",
    "defaultActiveTab": true
  }
},
"tab-list.item#2": {
  "props": {
    "tabId": "electronics",
    "label": "Electronics"
  }
}
```

Now, let's declare the children and props pertaining to `tab-content.item`.

In the child array, you can include several blocks such as `rich-text`, `info-card`, `image`, `flex-layout` and etc.

In the `tabId` prop, you need to include the same ids that were declared in `tab-list.item` for the link between the tab and content to function properly.

```json
...
"tab-content.item#1": {
  "children": [
    "rich-text#1"
  ],
  "props": {
    "tabId": "majorAppliances"
  }
},
"tab-content.item#2": {
  "children": [
    "rich-text#2"
  ],
  "props": {
    "tabId": "electronics"
  }
}
```

Lastly, you must declare your content's proprieties. In our example, we just placed a `rich-text` in each `tab-content.item`:

```json
"rich-text#1": {
  "props": {
    "text": "Texto para Major Appliances",
    "textPosition": "CENTER",
    "font": "t-heading-3"
  }
},
"rich-text#2": {
  "props": {
    "text": "Texto para Electronics",
    "textPosition": "CENTER",
    "font": "t-heading-3"
  }
}
```

## Activity

In this activity, we will create the simple structure of a tab layout, as shown below. Thereafter, we will add some content to give our page a custom style.

![](https://appliancetheme.vteximg.com.br/arquivos/tarefa-tab-layout.png)

1. In the previously created `about-us.jsonc`, add a `tab-layout#home` to the `store.custom#about-us` template:

    ```json
        "store.custom#about-us": {
            "blocks": [
                "flex-layout.row#about-us",
                "tab-layout#home"
            ]
        },
    ```

2. Declare the `tab-layout#home` block and add `tab-list#home` and `tab-content#home` as its children:

    ```json
        "tab-layout#home": {
            "children": [
                "tab-list#home",
                "tab-content#home"
            ]
        },
    ```

3. Declare `tab-list#home` and add `tab-list.item#home1` and `tab-list.item#home2` as its children:

    ```json
        "tab-list#home": {
            "children": [
                "tab-list.item#home1",
                "tab-list.item#home2"
            ]
        },
    ```

4. Declare the props pertaining to `tab-list.item#home1` so that the interface displays "Major Appliances". (Tip: Do not forget to include `tabId` = `"majorAppliances"` as well as the property `defaultActiveTab` = `true` to the props):

    ```json
        "tab-list.item#home1": {
            "props": {
                "tabId": "majorAppliances",
                "label": "Major Appliances",
                "defaultActiveTab": true
            }
        },
    ```

5. Declare `tab-list.item#home2`'s props so that the interface displays "Electronics". (Tip: Don't forget to include `tabId` = `"electronics"` to the props):

    ```json
        "tab-list.item#home2": {
            "props": {
                "label": "Electronics",
                "tabID": "electronics"
            }
        },
    ```

6. Now, let's move on to the content. Declare `tab-content#home` in your theme and add `tab-content.item#home1` and `tab-content.item#home2` as children:

    ```json
        "tab-content#home": {
            "children": [
                "tab-content.item#home1",
                "tab-content.item#home2"
            ]
        },
    ```

7. For each `tab-content.item`, declare just one `rich-text` as child (for example, `rich-text#home1` and `rich-text#home2`):

    ```json
        "tab-content.item#home1": {
            "children": [
                "rich-text#home1"
            ],
        },
        "tab-content.item#home2": {
            "children": [
                "rich-text#home2"
            ],
        },
    ```

8. Thereafter, include a `tabId` prop for each `tab-content.item` to create a link between the previously created `tab-list` and `tab-content`:

    ```json
        "tab-content.item#home1": {
          ...
            "props": {
              "tabId": "majorAppliances"
            }
        },
        "tab-content.item#home2": {
          ...
            "props": {
                "tabId": "electronics"
            }
        },
    ```

9. Lastly, add the `rich-text` and declare its props according to the code below:
  
    ```json
    "rich-text#home1": {
      "props": {
        "text": "Área do conteúdo da tab-list.item com  tabId = majorAppliances",
        "textPosition": "CENTER",
        "font": "t-heading-3"
      }
    },
    "rich-text#home2": {
      "props": {
        "text": "Área do conteúdo da tab-list.item com  tabId = electronics",
        "textPosition": "CENTER",
        "font": "t-heading-3"
      }
    }
    ```
  
  :information_source: Remember to access the [Tab Layout](https://vtex.io/docs/components/layout/vtex.tab-layout) and [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/) documentation for any questions during the activity. 


