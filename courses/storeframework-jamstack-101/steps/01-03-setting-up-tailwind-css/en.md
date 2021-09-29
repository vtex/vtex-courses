In Store Framework Jamstack, you are free to use the CSS framework that best suits your needs. Popular options include [Tailwind CSS](https://tailwindcss.com/) and [Emotion](https://emotion.sh/). In this step, we will show you how to set up Tailwind CSS and use it to style your store components.

# Clone your group repository from Github

You should have access to a Github repository in [vtex-sites](https://github.com/vtex-sites), which has been previously created for your group from the minimum boilerplate template [base.store](https://github.com/vtex-sites/base.store). Let's start by cloning it to your local machine, installing all dependencies and starting a developer server:

```
git clone https://github.com/vtex-sites/sfj101-20210928-groupX.git
yarn
yarn develop
```

After the development build is done, visit [localhost:8000](http://localhost:8000) and you should see a very simple home page like the image below:

![Home page for base.store](https://files.readme.io/3c29d8f-Screen_Shot_2021-09-29_at_01.04.08.png)

# Install Tailwind CSS

Run the commands below to [install Tailwind CSS in Gatsby](https://tailwindcss.com/docs/guides/gatsby):

```
yarn add gatsby-plugin-postcss tailwindcss@latest postcss@latest autoprefixer@latest
yarn tailwindcss init -p
```

After `yarn` has finished running, you should enable [gatsby-plugin-postcss](https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/) by [configuring it in your gatsby-config.js file](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-plugin-in-your-site/#step-2-configure-the-plugin-in-your-gatsby-configjs-file):

```diff
// gatsby-config.js (lines 173-181)
    {
      resolve: 'gatsby-plugin-netlify',
-   }
+   },
+   'gatsby-plugin-postcss'
  ],
}
```

You're almost done! All you need to do now is include Tailwind CSS in `src/styles/global.css`:

```diff
// src/styles/global.css
-* {
-  padding: 0px;
-  margin: 0px;
-  box-sizing: border-box;
-}
+@tailwind base;
+@tailwind components;
+@tailwind utilities;
```

If you are still running your development server, you should already see different font styles on your store:

![Successful Tailwind CSS setup in base.store](https://files.readme.io/d930a34-Screen_Shot_2021-09-29_at_01.17.03.png)

# Add a Store UI component and style it

To test out Tailwind CSS, we will use it to style the [Spinner](https://storeui.netlify.app/?path=/docs/atoms-spinner--spinner) component. First we'll add it to our home page:

```diff
// src/views/home/index.tsx
import React from 'react'
import type { Props as PageProps } from 'src/pages/index'

+import { Spinner } from '@vtex/store-ui'

import Seo from './Seo'

export type Props = PageProps

function View(props: Props) {
  // Send event to analytics
  // usePixelSendEvent(() => {
  //   const event: PageViewData = {
  //     pageType: 'home',
  //     pageUrl: window.location.href,
  //     pageTitle: document.title,
  //     referrer: '',
  //     accountName: process.env.GATSBY_STORE_ID!,
  //   }

  //   return { type: 'vtex:pageView', data: event }
  // })

  return (
    <>
      {/* Seo Components */}
      <Seo {...props} />

      {/* Visual Sections */}
      <div>TODO</div>
+     <Spinner />
    </>
  )
}

export default View
```

And then add styles to this component through its CSS Selectors:

```diff
// src/styles/global.css
@tailwind base;
@tailwind components;
@tailwind utilities;

+[data-store-spinner] {
+  @apply block animate-spin text-xs relative;
+
+  border-top: 0.2em solid rgba(0, 0, 0, 0.2);
+  border-right: 0.2em solid rgba(0, 0, 0, 0.2);
+  border-bottom: 0.2em solid rgba(0, 0, 0, 0.2);
+  border-left: 0.2em solid #000000;
+}
+
+[data-store-spinner], [data-store-spinner]:after {
+  @apply h-4 w-4;
+  border-radius: 50%;
+}
```

![Styling spinner component with Tailwind CSS](https://files.readme.io/dd16a6c-Screen_Shot_2021-09-29_at_01.28.17.png)