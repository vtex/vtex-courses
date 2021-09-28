In Store Framework Jamstack, you are free to use the component framework that best suits your needs. Popular options include [Material UI](https://mui.com/) and [Theme UI](https://theme-ui.com/). If you are looking for a lightweight, performant and ecommerce-ready component library, you might want to consider using [Store UI](https://github.com/vtex/faststore/tree/master/packages/store-ui).

**Store UI** is the component library that is native to the [FastStore](https://github.com/vtex/faststore) open ecommerce framework, crafted with these core principles in mind:

- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) patterns
- Built for ecommerce
- CSS framework agnostic
- Open source and extensible
- Performant and lightweight

Let's take a look at the [documentation](https://storeui.netlify.app/) to see what is currently available for use in our stores.

> 📘
> 
> Other components that are currently under development can be found on the [Store UI source code available on Github](https://github.com/vtex/faststore/tree/d30c59807b7f6e67b182ceeaacf9f3b777d77d4a/packages/store-ui/src), but should be considered experimental until they are documented.

# Atoms: basic building blocks

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.

Currently, these are the Atoms available in the Store UI documentation:

- [Badge](https://storeui.netlify.app/?path=/docs/atoms-badge--badge)
- [Button](https://storeui.netlify.app/?path=/docs/atoms-button--button)
- [Checkbox](https://storeui.netlify.app/?path=/docs/atoms-checkbox--checkbox)
- [Icon](https://storeui.netlify.app/?path=/docs/atoms-icon--icon)
- [Input](https://storeui.netlify.app/?path=/docs/atoms-input--input)
- [List](https://storeui.netlify.app/?path=/docs/atoms-list--unordered-list)
- [Overlay](https://storeui.netlify.app/?path=/docs/atoms-overlay--overlay)
- [Popover](https://storeui.netlify.app/?path=/docs/atoms-popover--popover)
- [Price](https://storeui.netlify.app/?path=/docs/atoms-price--default)
- [Radio](https://storeui.netlify.app/?path=/docs/atoms-radio--radio)
- [Select](https://storeui.netlify.app/?path=/docs/atoms-select--default-select)
- [Skeleton](https://storeui.netlify.app/?path=/docs/atoms-skeleton--skeleton)
- [Slider](https://storeui.netlify.app/?path=/docs/atoms-slider--slider)
- [Spinner](https://storeui.netlify.app/?path=/docs/atoms-spinner--spinner)
- [Textarea](https://storeui.netlify.app/?path=/docs/atoms-textarea--textarea)

Take a minute to browse through these components and see what they look like. 

# Molecules: smallest functional elements

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. 

For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

Currently, these are the Molecules available in the Store UI documentation:

- [Bullets](https://storeui.netlify.app/?path=/docs/molecules-bullets--bullets)
- [Carousel](https://storeui.netlify.app/?path=/docs/molecules-carousel--carousel)
- [IconButton](https://storeui.netlify.app/?path=/docs/molecules-iconbutton--default)
- [PriceRange](https://storeui.netlify.app/?path=/docs/molecules-pricerange--price-range)
- [SearchInput](https://storeui.netlify.app/?path=/docs/molecules-searchinput--default)

Take a minute to browse through these components and see what they look like.

# Testing components on your sandbox store

Let's get back to the sandbox store you set up in [SFJ Quickstart](/docs/course-storeframework-jamstack-101-step01-01-quickstart-lang-en). We will test out Store UI components in the About page, defined in `src/pages/about.tsx`. To start of with a clean slate, substitute the contents of that file for the code snippet below:

```
// src/pages/about.tsx
import React from 'react'
import type { FC } from 'react'

import Layout from 'src/components/common/Layout'

const Page: FC = () => (
  <Layout>
    <h1>My sandbox</h1>
    <img src="https://http.cat/204" />
  </Layout>
)

export default Page
```

Which should give you this result, when browsing to [https://localhost:8000/about](https://localhost:8000/about):

![Initial sandbox on about page](https://files.readme.io/4c57831-image7.png)

To add a Store UI component, you will need to add the appropriate import and the JSX tag for it. For example, if you want to substitute the [HTTP Cats](https://http.cat/) image for a [Spinner](https://storeui.netlify.app/?path=/docs/atoms-spinner--spinner) atom, you would edit your code like so:

```
// src/pages/about.tsx
import React from 'react'
import type { FC } from 'react'

+import { Spinner } from '@vtex/store-ui'

import Layout from 'src/components/common/Layout'

const Page: FC = () => (
  <Layout>
    <h1>My sandbox</h1>
-   <img src="https://http.cat/204" />
+   <Spinner />
  </Layout>
)

export default Page
```

![Sandbox with Spinner component](https://files.readme.io/c533ff0-image8.gif)

Go ahead and play around with Store UI components! Try adding a different one to your page, for example. Make sure to take a look at the documentation, there you will find sample code and be able to see if there are any required props.

![Spinner component documentation on Storybook](https://files.readme.io/d8a56bf-image9.png)

> 📘
> 
> Our demo boilerplate includes the [gatsby-plugin-theme-ui](https://www.gatsbyjs.com/plugins/gatsby-plugin-theme-ui/) plugin in its `package.json` and `gatsby-config.js` files, so you can also test some [Theme UI components](https://theme-ui.com/components) here.