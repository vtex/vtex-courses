# Hello, World!

## Introduction

We begin our journey with the classic **"Hello, World!"**. In order to create something similar, we need to understand the Store Framework blocks and use one that allows us to create texts. This block is aptly called [**Rich Text**](https://vtex.io/docs/components/all/vtex.rich-text/).

## Rich Text

<img src="https://user-images.githubusercontent.com/18701182/68885337-be6f3480-06f3-11ea-99dd-7d33ad3777cb.png" width="150" />

The Rich Text is only one of the dozens of blocks available in Store Framework. It's a block that seems simple, but that allows a series of customizations meant to create texts. To start, any text written in Rich Text supports [Markdown](https://www.markdownguide.org/cheat-sheet/), making text styling much easier. 

Looking at the block's [documentation](https://vtex.io/docs/app/vtex.rich-text#blocks-api), we can find a technical specification. One of the sessions present is that of the **Blocks API**, in which we can see the list of all Rich Text **properties (props)**. These properties are the main **customization points** of a block, which give a block its distinct visual and behavior, depending on how its been configured. 

## Starting out

We'll start by customizing the *home page*. In your theme's `/store/blocks` folder, you'll find a file called `home.jsonc`. This file determines how the blocks you intend to use are organized. The language used in the layout composition is simple and based on [JSON](http://www.json.org/json-en.html).

In `home.jsonc`, you'll notice a block which is default in all themes, namely `store.home`. This block determines which child blocks will be displayed on the home page. 

```json
{
  "store.home": {
    "blocks": []
  }
  ...
}
```

Let's use Rich Text in its body:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  }
  ...
}
```

Thus, `store.home` now knows that it needs to render a Rich Text. However, we're haven't yet specified which visual this Rich Text should adopt. For that, we'll need to **define the block**.

## Defining blocks

Defining a block must always be performed apart from any other block, at thee source level of the JSON file. 

```json
{
  "store.home": {
    "blocks": [
      "rich-text" <----- Here the block is used within another
    ]
  },
  "rich-text": { <----- Here it's at source level
  }
}
```

In the block's definition, you can set its behavior and visual. **Customization points** have to be used to achieve this, so we'll start off using the Rich Text `props`: 

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {

    }
  }
}
```

Read through the Rich Text [documentation](https://vtex.io/docs/app/vtex.rich-text#blocks-api) one more time and let's define the props we'll use to customize the block.

We want to achieve a simple "Hello, World!", and looking at the props we notice one called: `text` [(Text written in markdown language to be displayed)](https://vtex.io/docs/app/vtex.rich-text#blocks-api). This is the prop that determines which text will be displayed.

Including this prop, we now have the following:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "Hello, World!"
    }
  }
}
```

Reading through the [Markdown documentation](https://www.markdownguide.org/cheat-sheet/), we learn that in order for a text to appear in *italic*, we just need to place that text between `*`: 

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "*Hello, World!*"
    }
  }
}
```

To center align the text, we can add the `textPosition`  prop and give it the `CENTER` value:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "*Hello, World!*",
      "textPosition": "CENTER"
    }
  }
}
```

## Activity

Define a [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/) on your home page and create a **bold** "Hello, World!" that's **right aligned**. Do so by adding a code like this in the `store/blocks/home.jsonc` file:

    ```diff
    {
      "store.home": { 
        "blocks": [
    +      "rich-text"
        ]
      },
    +  "rich-text": {
    +    "props": {
    +      "text": "**Hello, World!**",
    +      "textPosition": "RIGHT"
    +    }
    +  }
    }
    ```

After running `vtex link`, your `rich-text` should look like this:

<img src="https://user-images.githubusercontent.com/12139385/70143376-2e7d3480-167a-11ea-8727-2bc6a9422f21.png" width="150" />

:information_source: Remember to access the Rich Text [documentation](https://vtex.io/docs/components/all/vtex.rich-text/) if you have any questions during the activity.

