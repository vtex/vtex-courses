# Block's Carousel

## Introduction

Slider Layout, like Flex Layout, is a flexible way to create a new block from other blocks using `children`. It allows _sliders_ to be created from other blocks, such as `info-card`s and even `flex-layout` for example.

With the Slider Layout, it is possible to create a carousel not only with images but with any content you want. For this example, we will use the Slider Layout to turn a set of info-cards into a slider.

## Slider Layout

Looking at the [documentation](https://developers.vtex.com/docs/vtex-slider-layout), we see that you can use an array of blocks like `children`, just like in Flex Layout.

Below is an example of implementing a slider-layout with two `info-cards`:

```json

  "slider-layout#home": {
    "children": ["info-card#1", "info-card#2"],
    "props": {
      "autoplay": {
        "timeout": 5000,
        "stopOnHover": false
      }
    }
  },

  "info-card#1": {
    "props": {
      "imageUrl": "https://images.unsplash.com/photo-1524185962737-ea7c028a12cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "isFullModeStyle": true,
      "headline": "Black Friday",
      "callToActionText": "Subscribe",
      "textPosition": "center"
    }
  },

  "info-card#2": {
    "props": {
      "imageUrl": "https://images.unsplash.com/photo-1524185962737-ea7c028a12cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "isFullModeStyle": true,
      "headline": "Black Friday",
      "callToActionText": "Subscribe",
      "textPosition": "center"
    }
  }

```

## Activity

In this activity, we will create a brand _slider_ for our website:

![](https://appliancetheme.vteximg.com.br/arquivos/brand-slider.png)

1. In the `home.jsonc` file, declare the `slider-layout#home` block to the `store.home` template.

2. Create a file called `slider-layout.jsonc` inside the`/store/blocks` folder;

3. In this file, based on the code above, replace the `info-card` declared as children of `slider-layout#home` and add 6 [image components](https://developers.vtex.com/vtex-developer-docs/docs/vtex-store-components-image) `image` as children. Use the format `image# brand1`, `image#brand2` (...) `image#brand6` to declare the components;

4. State a specific `src` prop for each defined `image#brand`. Use the URLs below for each one:

   1. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square1.png`
   2. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square2.png`
   3. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square3.png`
   4. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square4.png`
   5. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square5.png`
   6. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square6.png`

5. Finally, you must use the `autoplay` property in the `slider-layout# home` block. Make _slide_ happen automatically every **7 seconds and stop when the user hovers over _slide _**.

> Note: Remember to access the [Slider Layout](https://developers.vtex.com/docs/vtex-slider-layout) and [Image](https://developers.vtex.com/docs/vtex-store-components-image) documentations if you have any questions during the activity.
