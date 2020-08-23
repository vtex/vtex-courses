# Exploring the power behind rich text

## Introduction

Markdown is a user friendly language that can be easily converted to HTML. In this lesson, we'll see how it's possible to use this language in our [**Rich Text**](https://developers.vtex.com/docs/vtex-rich-text) block to customize them and create interesting texts.

## Rich Text with Markdown

To include texts in the `rich-text` block, you need to use the `text` prop:

```json
  "rich-text#home1": {
    "props": {
      "text": "My text",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
  }
```

The `text` prop accepts markdown format. However, if you want to write your text using this language, your code must be similar to the following: 

```json
  "rich-text#home1": {
    "props": {
      "text": "# My title h1 \n Insert a paragraph here \n ## My title h2 \n Insert the second paragraph here \n Include a list here \n - Item 1 \n - Item 2 \n - Item3",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
  }
```

> **Tip**: Always use the `\n` command to skip lines when using markdown in the `text` prop.

Other properties of the `rich-text` component can be found in the [Store Framework official documentation](https://developers.vtex.com/docs/vtex-rich-text).

## Changing the rich text style and content through Markdown

1. In `about-us.jsonc`, change the text in `rich-text#about-content` so that `This is VTEX Minimum Theme` become a small header (`h3`). Make sure that you break the line after it with `\n`;

2. Put `VTEX Minimum Theme`in italic.

Expected result:

![image](https://user-images.githubusercontent.com/19495917/90180384-410d4900-dd85-11ea-88b9-3af68e8f3a08.png)

:information_source: Remember to access the Rich Text [documentation](https://developers.vtex.com/docs/vtex-rich-text) if you have any questions during the activity.

