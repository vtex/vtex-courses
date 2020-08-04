# Exploring the power behind rich text

## Introduction

Markdown is a user friendly language that can be easily converted to HTML. In this lesson, we'll see how it's possible to use this language in our [**Rich Text**](https://vtex.io/docs/components/all/vtex.rich-text/) block to customize them and create interesting texts. 

## Rich Text with Markdown

To include texts in the `rich-text` block, you need to use the `text` prop:

```json
  "rich-text#home1": {
    "props": {
      "text": "My text",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
```

The `text` prop accepts markdown format. However, if you want to write your text using this language, your code must be similar to the following: 

```json
```json
  "rich-text#home1": {
    "props": {
      "text": "# My title h1 \n Insert a paragraph here \n ## My title h2 \n Insert the second paragraph here \n Include a list here \n - Item 1 \n - Item 2 \n - Item3",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
```

**TIP**: Always use the `\n` command to skip lines when using markdown in the `text` prop

Other properties of the `rich-text` component can be found in the [Store Framework official documentation](https://vtex.io/docs/components/all/vtex.rich-text/)

## Changing the rich text style and content through Markdown

1. In `about-us.jsonc`, change the text in `tab-list.item#home1` so that an "About" appears in the first tab:

    ```json
        "tab-list.item#home1": {
            "props": {
                "tabId": "majorAppliances",
                "label": "About",
                "defaultActiveTab": true
            }
        },
    ```

2. In the `rich-text` content linked to this tab, use the text below:

    ```
    # Our history \n ### We were born from an internal VTEX hackathon! \n That's right. VTEX's first Hackatheme (store theme hackathon) had 3 finalists. One of them was FlatFlat, the store that you're accessing now. FlatFlat was created by the engineers Afonso Praça and Sávio Muniz, together with designers Lucas Falcão and Augusto Barbosa, and new business director Maurício Baum. As the store was created by profissionals having the most diverse backgrounds, the result was an obvious one: they became the finalists with coolest layout among participants.
    ```

3. Insert the title and subtitle in bold:

    ```json
        "rich-text#home1": {
            "props": {
              "text": "# **Our history** \n ### **We were born from an internal VTEX hackathon!** \n That's right. VTEX's first Hackatheme (store theme hackathon) had 3 finalists. One of them was FlatFlat, the store that you're accessing now. FlatFlat was created by the engineers Afonso Praça and Sávio Muniz, together with designers Lucas Falcão and Augusto Barbosa, and new business director Maurício Baum. As the store was created by profissionals having the most diverse backgrounds, the result was an obvious one: they became the finalists with coolest layout among participants.",
              "textPosition": "CENTER",
              "font": "t-heading-3"
            }
            ...
    ```

Expected result:
![](https://user-images.githubusercontent.com/18701182/73487350-918efd00-4385-11ea-8d9d-ccc1c3952717.png)

:information_source: Remember to access the Rich Text [documentation](https://vtex.io/docs/components/all/vtex.rich-text/) if you have any questions during the activity.

