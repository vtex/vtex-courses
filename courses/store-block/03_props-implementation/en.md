# Making the countdown block customizable

## Introduction

Now we have an `h1` element rendered, it's possible to used it to display information that depend on the component's properties (*props*). For that, some concepts will be shown, given that they are essential for the app development. 

## Concepts
* **Hook**

    *Hooks* are APIs that allow using React features inside functional components. Without the *hooks*, a functional React component is only able to render UI elements. They, hereby, allow, among other things, state storage between different renders and execute side effets to the component's life cycle. Note: They do not work inside classes.

    e.g: 

    ```typescript
    const [count, setCount] = useState(0)
    ```
    
* ***props* interface**
    
    Defines the props *Typescript* typing that the component will receive, allowing IDE's intellisense about the created component. 

    ```typescript
    interface CountdownProps {
      exampleProp: string
    }
    ```

* **Block's schema**

    In VTEX IO, we offer a content management tool called **Site Editor**. With it, through *VTEX Admin*, it's possible to change images, texts and behaviours of blocks without having to change the Store's code.

    In order for your block to **accept user customizations**, you need to export a `schema` in the React component responsible for the block using [JSON *schema*](https://json-schema.org/). This will, automatically, generate a form in Site Editor linked to the block that you're developing. Here's a *schema* example:

    ```js
    // react/Countdown.tsx
    Countdown.schema = {
        title: 'editor.countdown.title',
        description: 'editor.countdown.description',
        type: 'object',
        properties: {},
    }
    ```
    The *schema* is also responsible for defining the labels that will be displayed to the user when editing the block content on the form.

## Atividade

1. In the interface defined in `Countdown.tsx`, add a *prop* called `targetDate`, its type is *string*. We are, hence, defining a component *prop* that will be used to initialize the countdown.
    
    The *prop* definition itself is made through its declaration in the `CountdownProps` interface in the `Countdown.tsx` file, shown previously. Thus, add a line that define the `targetDate` *prop* of type *string*:

    ```diff
    // react/Countdown.tsx
    interface CountdownProps {
    +   targetDate: string    
    }
    ```

2. Now, we need to use it on the component, substituting the text used used previously, `Countdown Test`, for another, using *Site Editor*.

    >Keep in mind that targetDate will be used to define the countdown ending date. However, for now, it will work as a dummy field.

    First, change the component in order for it to use the `targetDate` prop. To do that, you need to use its variable inside the `h1` of the React component.

    ```tsx
    // react/Countdown.tsx
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
      return (
        <div>
          <h1>{ targetDate }</h1>
        </div>
      ) 
    }
    ```

3. Furthermore, to be able to edit this property through *Site Editor*, it's necessary to add that same prop to the **schema**. This is done by adding the `targetDate` key to the `properties` object of the **schema**:
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

All set! Now you can change the text content through *Site Editor*. Go ahead to the *Site Editor* and click on `Countdown` on the side menu, this will open an edit menu, like the shown bellow:

![image](https://user-images.githubusercontent.com/19495917/80523072-e382f700-8963-11ea-892d-3922a99de487.png)

Now, in the field below the title, type the date in the format `AAAA-MM-DD` and see the change, that will then show the text you've typed! 

![image](https://user-images.githubusercontent.com/19495917/80523458-85a2df00-8964-11ea-9e74-f6d2c9cf5ab2.png)


