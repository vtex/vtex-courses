# Linking an app and using it on a store's theme

## Introduction

To develop a store front block, like the ones provided natively in Store Framework, we use the UI development library **[React.js](https://reactjs.org/)**.

## A little about the tool

*React*'s basic development unit is a **component**, in which should be implemented all-in-one the logical operation, visual interface and data retrieval of an UI element. Following the most recent recommendation, we will focus our usage in the [**Hook API**](https:/**/reactjs.org/docs/hooks-intro.html), not using *class* definition for component building. 

In VTEX IO, we adopt [**Typescript**](https://www.typescriptlang.org/) as default language for *frontend* programming. Despite the complexity of learning new syntaxes, the effort is quickly rewarded! Using Typescript, the bug anticipation is enhanced, because of its static typing. Besides that, with the right IDEs, it's possible to increase the development speed with a smarter *code completion* of the code objects. 

In this course, we'll use Typescript exclusively. If you're not familiar with the language, it will be a great chance to give it a try!

## Step objective 

Since you're already familiar to Store Framework, you know that we use blocks, like `shelf` and `sku-selector`, to create a VTEX IO store. In this step you're going to create a block that is going to be used in your store's home page theme.

## Setting up our test bot
It's important for you to have out test bot installed in this course repository so as for us to see your progress, even though it does not contains any tests or evaluation on each step. So as to install it, follow the steps below:

1. Open [our test bot installation page](https://github.com/apps/vtex-course-hub) and click on **Configure**;
2. Select the **Only selected repositories** option, then click on **Select repositories** and type in `store-block`;
3. Click on `{{ user.username }}/store-block` and then on **Install**.

    <img src="https://user-images.githubusercontent.com/19495917/86020968-f31fca00-b9fe-11ea-9776-ccab355663b5.png" width="350" />

## Activity

1. In the local template cloned, open up the `Countdown.tsx` file:

    ```tsx
    //react/Countdown.tsx
    import React from 'react'

    interface CountdownProps {}

    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
      return <div></div>
    }

    Countdown.schema = {
      title: 'editor.countdown.title',
      description: 'editor.countdown.description',
      type: 'object',
      properties: {},
    }

    export default Countdown
    ```

2. Add an `h1` tag inside the component and link it in your terminal, using the command `vtex link`.

    ```diff
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
    -   return <div></div>
    +   return (
    +     <div>
    +       <h1>Countdown Test</h1>
    +     </div>
    +   )
    }
    ```

    >**IMPORTANT**: In order to the component that you've just linked to be seen in a functional store, you need to declare the block that the app defines in a theme. For that, hereby, we need to first have a theme to add the app to. In this course, we'll use the [Store Theme](https://github.com/vtex-apps/store-theme.git). To clone the repository just run a:
    ```
    git clone https://github.com/vtex-apps/store-theme.git
    ```

3. To avoid conflicts, go to your terminal and unlink any theme or apps you have linked. To do that, head just run the following command: 

    ```
    vtex unlink --all
    ```

4. With the repository cloned, go to its folder (`cd store-theme`) and link the theme on your workspace: 

    ```
    vtex link
    ```

    > **IMPORTANT**: At this point, you need to have two terminals opened and running `vtex link`. The first one contains the link of the custom block that you're creating and the second one refers to the `store-theme`, the theme you're using to insert your custom block on.

5. Now, with both links active (theme and custom block), in order to use the app on the theme, we have to add it to the theme's dependencies, which, is in the `manifest.json`. Therefore, head to the theme's manifest in the `store-theme` folder and add `vtex.countdown` as a dependency. Its version is defined in its manifest (`0.0.1`). The manifest will then have one extra line like it is defined below: 

    ```diff
    {
        ...
        "dependencies": {
            ...
    +        "vtex.countdown": "0.x",
            ...
        },
        ...
    }
    ```

6. Lastly, we need to add the block to the store. Inside the file `store-theme/store/blocks/home/home.jsonc`, declare `countdown` block: 
    ```
    {
        "store.home": {
            "blocks": [
                "countdown",
                ...
            ]
            ...
        }
        ...
    }
    ```

The expected result is to find a h1 in the top of the store, you can see it below: 

![image](https://user-images.githubusercontent.com/19495917/80492927-0e0c8a00-893b-11ea-8a1d-aaad2874a014.png)
