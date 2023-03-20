# Tab layout

## Introduction

The [Tab Layout](https://developers.vtex.com/docs/guides/tab-layout) is a _layouts_ structuring paradigm created in the Store Framework to allow the construction of _layouts_ with tabs or guides.

In this paradigm, we have two containers: the `tab-list` and the `tab-content`. In each of these containers, we have the items that compose them. Within the tab-list, we have the tab-list.item. In the `tab-content`, we have the`tab-content.item`.

Below, we will see an example of implementing a _tab layout_.

First, it is necessary to declare the `tab-layout` block in the desired _template_:

```json
{
  "store.home": {
    "blocks": [..."tab-layout"]
  }
}
```

Then, it is necessary to declare a `tab-list` and a`tab-content` as children of the `tab-layout`:

```json
...
"tab-layout": {
  "children": [
    "tab-list",
    "tab-content"
  ]
}
```

With that, we have these two containers as components of our `tab-layout`. The next step is to declare `tab-list.item` and `tab-content.item` as children of `tab-list` and `tab-content`, respectively:

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

In the next step, we have to declare the properties of the `tab-list.item`. The code below generates a tab interface like the one in this image:

![image](https://user-images.githubusercontent.com/18701182/90059099-076f0c00-dcb9-11ea-918d-664761c34f3a.png)

The `tabId` property is very important, as it is the key that connects the button of a `tab-list.item` with a `tab-content.item`.

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

Next, we will declare the _children_ and _props_ of `tab-content.item`.

In _children_'s _array_, it is possible to include several blocks such as `rich-text`, `info-card`, `image`, `flex-layout`, and so.

In the `tabId` prop, it is necessary to include the same identifiers (_ids_) declared in the `tab-list.item` for the _link_ between the tab and the content to work.

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

Finally, you must declare the properties of your content. In our example, we put only one `rich-text` in each `tab-content.item`:

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

In this activity, we will create the simple structure of a _tab layout_, as shown in the image below. Later, we will include some content to style our customized page.

![](https://appliancetheme.vteximg.com.br/arquivos/tarefa-tab-layout.png)

1. In the `home.jsonc` file created earlier, add a `tab-layout#home`;
2. Declare the `tab-layout#home` block and add a`tab-list#home` and a `tab-content#home` as your children;
3. Declare a `tab-list#home` and add a `tab-list.item#home1` and a `tab-list.item#home2` as your children;
4. Declare the `tab-list.item#home1` props so that the interface displays the text "Major Appliances". (Hint: don't forget to include a `tabId = "majorAppliances"` in the props and the `defaultActiveTab = true` property);
5. Declare the _props_ of the `tab-list.item#home2` so that the interface displays the text "Electronics". (Hint: don't forget to include a `tabId = "electronics"` in the props);
6. Now, let's move on to the content part. Declare a `tab-content#home` in your theme and add the children `tab-content.item#home1` and `tab-content.item#home2`;
7. In each `tab-content.item`, declare only one `rich-text` as a child (for example, `rich-text#home1` and `rich-text#home2`);
8. Then, include a _prop_ `tabId` in each`tab-content.item` so that the _link_ happens between the `tab-list` created previously and `tab-content`;
9. Finally, add the `rich-text` and declare your _props_ according to the code below:

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

> Note: Remember to access the [Tab Layout](https://developers.vtex.com/docs/guides/tab-layout) and [Rich Text](https://developers.vtex.com/docs/guides/vtex-rich-text) documentations if you have any questions during the activity.
