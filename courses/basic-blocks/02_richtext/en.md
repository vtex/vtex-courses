# Getting Started With Rich Text

## Rich Text

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

Read through the Rich Text [documentation](https://developers.vtex.com/docs/vtex-rich-text#rich-text) one more time and let's define the props we'll use to customize the block.

We want to achieve a simple "Hello, World!", and looking at the props we notice one called: `text` [(Text written in markdown language to be displayed)](https://developers.vtex.com/docs/vtex-rich-text#rich-text). This is the prop that determines which text will be displayed.

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

Define a [Rich Text](https://developers.vtex.com/docs/vtex-rich-text#rich-text) on your home page and create a **bold** "Hello, World!" that's **right-aligned**. Do so by adding a code block like this in the `store/blocks/home.jsonc` file:

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
