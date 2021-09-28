Welcome to Store Framework Jamstack 101! This is a crash course to help you learn how to develop really fast stores using our latest technology. 

We expect your machine to be fully set up with basic tools for web development. If you're unsure, check out our [recommended development tools](https://learn.vtex.com/page/setting-up-your-environment) before you start.

Let's start exploring by getting a sandbox environment up and running to make simple changes.

# Set up your sandbox environment

To make a copy of our demo boilerplate, we recommend using [degit](https://github.com/Rich-Harris/degit):

```zsh
npx degit vtex-sites/storecomponents.store my-awesome-store
```

You should then install the dependencies with [yarn](https://yarnpkg.com/):

```zsh
cd my-awesome-store/
yarn
```

# Run a local development build

To build our demo boilerplate locally, run:

```zsh
yarn develop
```

When the build is done, you should be able to interact with your store at `localhost:8000`.

![sfj-day1-step01-storetheme](https://drive.google.com/uc?id=1BApMkQ1DcjxhifAE_xUd5zzXHIVjr4RG)

# Make a simple change in your sandbox store

Now that your store is up and running locally, let's see if we can change something.

Open the source code for the demo boilerplate:

```zsh
code .
```

The home page for our store is defined in `src/views/home`. We'll go through the folder structure later – for now let's just focus on the `BelowTheFold.tsx` file.

![sfj-day1-step01-code](https://drive.google.com/uc?id=1m-l0e38CR9g3YNw46dZfS-pQIlRJkzbr)

Let's try changing the text seen in the `<InfoCard>` component:

```diff
// src/views/home/BelowTheFold.tsx (lines 25-36)
      <InfoCard>
-       <InfoCardInfo title="New promotion!">
-         <InfoCardInfoAction href="/vintage-phone/p" label="BUY NOW" />
+       <InfoCardInfo title="Feeling lost in the woods?">
+         <InfoCardInfoAction href="/vintage-phone/p" label="BUY A PHONE" />
        </InfoCardInfo>
        <InfoCardImage
          height="300px"
          width="840px"
          href="/vintage-phone/p"
          src="https://storecomponents.vtexassets.com/assets/faststore/images/banner-infocard2___3f284742ba9ede3826bc0721f0789694.png?height=300&aspect=true"
          alt="infocard-banner"
        />
      </InfoCard>
```

To see the changes in your store, save `BelowTheFold.tsx` and reload the page. This is what you should see now when scrolling down to the info card component.

![sfj-day1-step01-infocard](https://drive.google.com/uc?id=1zmFnmNsm-s57ktUwzMAPgF_D42jsWq4T)

# Take a look around!

For the next few minutes, **simply navigate around the store you have running locally**. Try to identify where specific pages and components are defined in the source code. Make some more changes and see what happens! This is your moment to explore and play around with the code, before we dive into the core concepts you need to know and the structure of our implementation.