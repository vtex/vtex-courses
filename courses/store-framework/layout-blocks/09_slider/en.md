# Blocks Carousel

## :sparkles: **Branch:** slider

## Introduction

The Slider Layout, just as the Flex Layout, is a flexible way of creating a new block based on other blocks, using `children`. It allows slider from other blocks to be created, such as `info-card` and even `flex-layout`, for example.

Let's use the Slider Layout to transform a couple of info-cards into a slide.

## Slider Layout

Looking at the [documentation](https://vtex.io/docs/components/layout/vtex.slider-layout), we notice that we can use any block _array_ as `children`, just as with Flex Layout.

Below, you have an implementation example of a slider-layout with two `info-card`:

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

In this activity, we will create a brand slider for our site: 

![](https://appliancetheme.vteximg.com.br/arquivos/brand-slider.png)

1. In `home.jsonc`, declare the `slider-layout#home` block to the `store.home` template:

    ```diff
    {
      "store.home": {
        "blocks": [
            ...
    +        "slider-layout#home"
        ]
      },
    ```

2. Create a file called `slider-layout.jsonc` in the `/store/blocks` folder;
3. In this file, based on the above-mentioned code, replace the declared `info-card` as `slider-layout#home`'s children and add 6 `image` [image components](https://vtex.io/docs/components/general/vtex.store-components/image) as children. As format, use `image#brand1`, `image#brand2` (...) `image#brand6` to declare the components:

    ```diff
    {
        "slider-layout#home": {
            "children": [
    +            "image#brand1",
    +            "image#brand2",
    +            "image#brand3",
    +            "image#brand4",
    +            "image#brand5",
    +            "image#brand6"
            ],
            "props": {
              ...
            }
        },
    ```

4. Declare a specific `src` prop for each defined `image#brand`. Use the URLs below for each:
   1.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square1.png`
   2.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square2.png`
   3.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square3.png`
   4.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square4.png`
   5.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square5.png`
   6.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square6.png`

    ```json
        "image#brand1": {
            "props": {
                "src": "https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square1.png"
            }
        },
        "image#brand2": {
            "props": {
                "src": "https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square2.png"
            }
        },
        "image#brand3": {
            "props": {
                "src": "https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square3.png"
            }
        },
        "image#brand4": {
            "props": {
                "src": "https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square4.png"
            }
        },
        "image#brand5": {
            "props": {
                "src": "https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square5.png"
            }
        },
        "image#brand6": {
            "props": {
                "src": "https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square6.png"
            }
        }
    ```

5. Lastly, you have to use the `autoplay` property in the `slider-layout#home` block. Make the slider occur automatically every **7 seconds and also make it stop when the user hovers over the slide**:

```json
      ...
        "props": {
            "autoplay": {
                "timeout": 7000,
                "stopOnHover": true
            }
        }
      ...
```

:information_source: Remember to go through the [Slider Layout](https://vtex.io/docs/components/layout/vtex.slider-layout) and [Image](https://vtex.io/docs/components/general/vtex.store-components/image) documentation if you have any questions during the activity.

