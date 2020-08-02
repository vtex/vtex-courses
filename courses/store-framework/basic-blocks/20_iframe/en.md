# Inserting an Iframe on our about us page

## :sparkles: **Branch:** iframe

## Introduction

An *Iframe* is a HTML element that allows the incorporation of another HTML page to the current one. Therefore, using the [**Iframe**](https://vtex.io/docs/components/all/vtex.iframe/) block, you can embed content from other URLs and display them on your page. It's important to remember that URLs rendered by Iframe have their own context, with independent session history and DOMs. 

**WARNING**: Iframes are only allowed on custom page templates.

The `iframe` block has very simple properties:

- `src`: shows which URL should be rendered by the iframe
- `width`: pixel width of the iframe element
- `height`: height of the iframe element

Below, we can see an implementation example of the `iframe` block:

```json
"store.custom#about-us": {
   "blocks": [
     "flex-layout.row#about-us",
     "iframe"
   ]
 },

"iframe": {
  "props": {
    "src": "http://someURL.com/resource",
    "width": 100,
    "height": 200
  }
}
```

## Activity

Let's display an Instagram post on your store page:

1. Change the label of the "Electronics" tab to "Instagram":

    ```json
        "tab-list.item#home2": {
            "props": {
                "label": "Instagram",
                "tabID": "instagram"
            }
        },
    ```    

2. In the Instagram tab's content, delete the `rich-text` and include an `iframe` block;

    ```json
        "tab-content.item#home2": {
            "children": [
                "iframe"
            ],
            "props": {
                "tabId": "instagram"
            }
        },
    ```

3. In the `iframe` props, display the following link content in a 800px-wide by 1000px-high container: `https://www.instagram.com/p/B973Qp8BacC/embed`:

    ```json
        "iframe": {
            "props": {
                "src": "https://www.instagram.com/p/B973Qp8BacC/embed",
                "width": 800,
                "height": 1000
            }
        },
    ```

:information_source: Remember to access the [Iframe documentation](https://vtex.io/docs/components/all/vtex.iframe/) if you have any questions during this activity.

The result should be like this:
![](https://user-images.githubusercontent.com/18701182/73484453-1a0a9f00-4380-11ea-89d2-37e83c692210.png)
