# Modifying the countdown block to have configurable styles

## Introduction

Now that we have implemented the `countdown`, how about adding a little customization? In this step, you will learn basic concepts about CSS _handles_ and Tachyons to customize the style of your _app_.

## CSS Handles

CSS _handles_ are used to customize your store's components through CSS classes in the theme code. All settings are defined through the _app_ `vtex.css-handles`, responsible for declaring all the customization points of your block.

By defining the names of your _handles_ and adding them to their respective HTML elements, it is possible to give the theme's user customization points that allow them to create flexible _layouts_.

## Tachyons

Tachyons is a _framework_ for functional CSS. Unlike other known _frameworks_, like Bootstrap, it does not have "pre-built" UI components. In fact, its purpose is, precisely, separate the CSS rules into small, reusable parts. This type of strategy is commonly known as _Subatomic Design System_ and, if you are interested, you can find a reference [in this link](https://daneden.me/2018/01/05/subatomic-design-systems/). This strategy makes _frameworks_ like Tachyons very flexible, scalable and fast.

A lot of the Tachyons' definitions can be changed, so that your store will have a more customized style. To do this, just define a JSON file in the `styles / configs` folder; this information can be found in more detail at: [Build a store using VTEX IO - Customizing styles](https://help.vtex.com/tracks/build-a-store-using-vtex-io--5qJr8BIQXAKec9CpBWrTNv/6L2qQHU5kwbmTSiYl4MCuD).

## Activity

1. Import the `useCssHandles` _hook_. To do so, return to `Countdown.tsx` and do the _import_:

   ```tsx
   // react/Countdown.tsx
   import { useCssHandles } from "vtex.css-handles"
   ```

2. Besides, define in a _Array_ all necessary _handles_ (in this case, only `'countdown'` will be used):

   ```tsx
   // react/Countdown.tsx
   const CSS_HANDLES = ["countdown"]
   ```

3. Use the `useCssHandles` in the component `Countdown` to define the `countdown` _handle_:

   ```diff
   // react/Countdown.tsx
   const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
     const [timeRemaining, setTime] = useState<TimeSplit>({
       hours: '00',
       minutes: '00',
       seconds: '00'
     })

   + const handles = useCssHandles(CSS_HANDLES)

     tick(targetDate, setTime)

     return (
       <div>
         <h1>
           { `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }
         </h1>
       </div>
     )
   }
   ```

4. At last, it is needed to use the _handle_ in the component to see the customization. For this, use the prop `className` with the classes to be used and the Tachyons classes, for global styles.

   ```diff
   // react/Countdown.tsx
   import React from 'react'
   ...

   const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
     const [timeRemaining, setTime] = useState<TimeSplit>({
       hours: '00',
       minutes: '00',
       seconds: '00'
     })

     const handles = useCssHandles(CSS_HANDLES)

     tick(targetDate, setTime)

     return (
   +   <div className={`${handles.countdown} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
         {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
       </div>
     )
   }
   ```

Let's see the result?

![image](https://user-images.githubusercontent.com/19495917/75475280-457cab80-5977-11ea-938e-d3c2b532e891.png)

<img src="https://user-images.githubusercontent.com/19495917/75475388-7a88fe00-5977-11ea-9d35-c13482f1e61c.gif" width="500" height="400"/>
