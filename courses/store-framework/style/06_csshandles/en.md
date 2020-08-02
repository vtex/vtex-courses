-> Customização

# CSS Handles and the power of customizing blocks

## :sparkles: **Branch:** csshandles

## Introduction

Taking a quick look at your online store, you'll notice that components have similar styles, even without applying any customization. 

All of them, including the recently configured [Info Card](https://vtex.io/docs/components/all/vtex.store-components/info-card), share **pre-established values** for font, background color, main color, button format, etc.

This is due to the `style.json`, the file responsible for declaring generic customization values for every Store Framework store. 

![style](https://user-images.githubusercontent.com/52087100/69889933-60854400-12d2-11ea-8d11-97aef0f3bf83.png)

To create a unique identity for your store's components, you can overwrite these values using **CSS customizations**.

Analyzing the [recipe](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization) employed to customize stores using CSS, we can notice that several steps will be needed in order to apply your own style, such as:

1. Create a new file in the `CSS` folder, naming it `vtex.{AppName}.css`.
2. Use the CSS Handle of the component that will be customized in this file in the following format: 

    ```css
    .{CSSHandle} {
        {PropriedadeDeCSS}: {ValorDesejado};
        {PropriedadeDeCSS}: {ValorDesejado};
    }
    ```

3. Lacking CSS Handles, apply permitted CSS Selectors, such as `:global(vtex-{componentName})`.
4. To apply CSS to a specific block and not to every block of that type, use the blockClass resource, which appears next to the CSS Handles when inspecting your code. The blockClass must be declared as a prop in the block in question, and thus be referenced in the style file as shown below:

    ```css
    .{CSSHandle}--{blockClass} {
        {CSSProperty}: {desiredValue};
        {CSSProperty}: {desiredValue};
    }
    ```

## Customizing the Info Card

To uncover a component's CSS Handles, such as the Info Card, simply access your documentation's `Customization` section.

According to the description of CSS Handles and to the store customization recipe using CSS, we can implement a customized Info Card example, editing its title and call-to-action button configurations by adding the following code to the  `vtex.store-components.css` file, found in `/styles/css`:

```css
.infoCardHeadline {
    font-family: serif;
    font-size: 2.25rem;
    font-weight: normal;
    color: gray;
    border: 2px solid black;
    padding: 24px;
}

.infoCardCallActionContainer :global(.vtex-button) {
    color: white;
    background-color: gray;
    border: transparent;
}

.infoCardCallActionContainer :global(.vtex-button):hover {
    color: gray;
    background-color: blue;
    border: transparent;
}
```

You can check the effect of these changes by running the `vtex link` command.

![image](https://user-images.githubusercontent.com/12139385/70145123-2626f880-167e-11ea-97f4-65aaacba74c3.png)

Next, we'll add a specific style to the vintage info card. To begin, add the `blockClass`prop to `info-card#button-right`, as shown below:

```json
"info-card#button-right": {
  "props": {
    "isFullModeStyle": false,
    "textPosition": "right",
    "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
    "headline": "Vintage Pink",
    "subhead": "Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020.",
    "callToActionMode": "button",
    "callToActionText": "Explore",
    "callToActionUrl": "/sale/d",
    "textAlignment": "center",
    "blockClass": "vintage"     //  <------------
  }
}
```

Thereafter, declare a `background-color` for this specific info card in your CSS file:

```css
.infoCardContainer--vintage {
  background-color: #edcfd1
}
```

Check out the result by linking your app.

![image](https://user-images.githubusercontent.com/12139385/70145268-743bfc00-167e-11ea-9dca-070d444b16b5.png)

## Activity

1. In the `vtex.store-components.css` file, copy the above-mentioned code and use it in your theme's CSS file, according to the [recipe](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization) on store customizations using CSS; 
2. Based on the [**Info Card**](https://vtex.io/docs/components/all/vtex.store-components/info-card) Handles, define a maximum width (`max-width`) of `1260px` for all info cards, a margin of `0 auto` and a padding of `0`:

        ```css
        .infoCardContainer {
            max-width: 1260px;
            margin: 0 auto;
            padding: 0;
        }
        ```

3. Change the component's title color to `black`:

        ```css
        .infoCardHeadline {
            ...
            color: black;
            ...
        }
        ```

4. Put the title in `bold`;

        ```css
        .infoCardHeadline {
            ...
            font-weight: bold;
            color: black;
            ...
        }
        ```

5. Change the call-to-action buttons background color during hover to `white`:

        ```css
        .infoCardCallActionContainer :global(.vtex-button):hover {
            ...
            background-color: white;
            ...
        }
        ```

6. In parallel to the `vintage` blockClass, apply a new block class called `metal` to the info card `info-card#button-left` and apply the `#e1e1e1` background color to it:

        ```css
        .infoCardContainer--metal {
            background-color: #e1e1e1;
        }
        ```

![image](https://user-images.githubusercontent.com/12139385/70145478-ead8f980-167e-11ea-8951-5d4b98e6d5c0.png)
