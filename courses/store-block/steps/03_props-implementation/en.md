# Making the countdown block customizable

## Introduction

Now we have an `h1` element rendered, it's possible to use it to display information that depends on the component's properties (_props_). For that, some concepts will be shown, given that they are essential for app development.

## Changing the content rendered on the component

1. In the interface defined in `Countdown.tsx`, add a _prop_ called `targetDate`, its type is _string_. We are, hence, defining a component _prop_ that will be used to initialize the countdown.

   ```diff
   // react/Countdown.tsx
   interface CountdownProps {
   +   targetDate: string
   }
   ```

2. Now, we need to use it on the component, substituting the text used previously, `Countdown Test`, for another, using _Site Editor_.

   > Keep in mind that `targetDate` will be used to define the countdown ending date. However, for now, it will work as a dummy field.

   First, change the component in order for it to use the `targetDate` prop. To do that, you need to use its variable inside the `h1` of the React component.

   ```tsx
   // react/Countdown.tsx
   const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
     targetDate,
   }) => {
     return (
       <div>
         <h1>{targetDate}</h1>
       </div>
     )
   }
   ```

3. Furthermore, to be able to edit this property through _Site Editor_, it's necessary to add that same prop to the **schema**. This is done by adding the `targetDate` key to the `properties` object of the **schema**:
   ```diff
   // react/Countdown.tsx
   Countdown.schema = {
     title: 'editor.countdown.title',
     description: 'editor.countdown.description',
     type: 'object',
     properties: {
   +   targetDate: {
   +      title: 'Final date',
   +      description: 'Final date used in the countdown',
   +      type: 'string',
   +      default: null,
   +   },
     },
   }
   ```

All set! Now you can change the text content through _Site Editor_.

> You can go to the Site Editor by accessing the following link: `{yourWorkspace}--appliancetheme.myvtex.com/admin/cms/site-editor`.

Go ahead to the _Site Editor_ and click on `Countdown` on the side menu, this will open an edit menu, like the shown below:

![image](https://user-images.githubusercontent.com/19495917/80523072-e382f700-8963-11ea-892d-3922a99de487.png)

Now, in the field below the title, type the date in the format `AAAA-MM-DD` and see the change, that will then show the text you've typed!

![image](https://user-images.githubusercontent.com/19495917/80523458-85a2df00-8964-11ea-9e74-f6d2c9cf5ab2.png)
