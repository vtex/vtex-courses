# Internationalization practices in VTEX IO

## Introduction

With the customized block in the store, we need to learn to **internationalize** the content presented.

It is important to remember that blocks must always follow good localization practices, and **must not show _hardcoded_** strings, but ones that are sensitive to the language that the store operates.

Don't worry, you won't need to add translations of all texts for the various languages in which the Store Framework is used. Therefore, in this stage, will be presented concepts about the internationalization of _apps_ and how to do it.

### The _Messages_

The concept of _messages_ makes it easy to add new languages ​​to the theme. The _Messages_ centralize all translation services on the platform. Given a text to be translated, _Messages_ will first check the user-defined context, then check the translations of the _apps_ and, finally, go through the automatic translation system.

In the directory structure, you can see that there is a folder called `messages`, which has three main files: `pt.json`, `en.json`, and`es.json`, each responsible for the translations: Portuguese, English, and Spanish, respectively. In addition, in order to provide better automatic translations, the `context.json` file is used, which is responsible for avoiding ambiguities.

To use such definitions, the translation files mentioned above are JSON, whose keys are messages and values ​​are translations.

> The `context.json` file is necessary and must contain all messages, besides offering automatic translations in exceptional cases.

## Internationalizing your block

You must have learned how to use our **builder _messages_**, and it will be through it that internationalized _strings_ will be added to the components.

1. To do so, **in the directory `/messages`**, add now a message for the **title of the component**:

   `messages/pt.json`

   ```diff
   {
     ...,
   +	"countdown.title": "Contagem Regressiva"
   }
   ```

   `messages/en.json`

   ```diff
   {
     ...,
   +	"countdown.title": "Countdown"
   }
   ```

   `messages/es.json`

   ```diff
   {
     ...,
   +	"countdown.title": "Cuenta Regresiva"
   }
   ```

   `messages/context.json`

   ```diff
   {
     ...,
   +	"countdown.title": "Countdown"
   }
   ```

2. After that, to **render the title** the component `FormattedMessage` of the lib [react-intl](https://github.com/formatjs/react-intl) must be used.

   > The lib _react-intl_ supports many ways of configuration and internationalization, it is worth checking it out.

3. Now, add the lib using `yarn add react-intl` in the _react_ directory. After doing that, in your component's code, `Countdown.tsx`, **import the FormattedMessage**:

   ```tsx
   //react/Countdown.tsx
   import { FormattedMessage } from 'react-intl'
   ```

4. And add a new prop to the interface `CountdownProps`:

   ```diff
   interface CountdownProps {
   + title: string
     targetDate: string
   }
   ```

5. You'll also need to add a const that will be your title:

   ```tsx
   //react/Countdown.tsx
   const titleText = title || <FormattedMessage id="countdown.title" />
   ```

6. Now, join the title to the countdown to render. To do so, define a container outside. Besides, the text for the title will be passes using the _prop_ `title`:

   ```tsx
   //react/Countdown.tsx
   const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
     title,
     targetDate,
   }) => {
     const [timeRemaining, setTime] = useState<TimeSplit>({
       hours: '00',
       minutes: '00',
       seconds: '00',
     })

     const titleText = title || <FormattedMessage id="countdown.title" />
     const handles = useCssHandles(CSS_HANDLES)

     tick(targetDate, setTime)

     return (
       <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1`}>
         <div className={`${handles.title} db tc`}>{titleText}</div>
         <div className={`${handles.countdown} db tc`}>
           {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
         </div>
       </div>
     )
   }
   ```

7. Note that three **new** _handles_ are used: _container_, _countdown_ and _title_. Therefore, remember to declare them in the const `CSS_HANDLES`, seen in the previous step:

   ```tsx
   const CSS_HANDLES = ['container', 'countdown', 'title']
   ```

8. At last but not least, it is needed to add the `title` _prop_ in the _schema_:

   ```diff
   //react/Countdown.tsx
   Countdown.schema = {
     title: 'editor.countdown.title',
     description: 'editor.countdown.description',
     type: 'object',
     properties: {
   +   title: {
   +     title: 'I am a title',
   +     type: 'string',
   +     default: null,
   +   },
       targetDate: {
         title: 'Final date',
         description: 'Final date used in the countdown',
         type: 'string',
         default: null,
       },
     },
   }
   ```

Done! Now, to try out your store in other languages, you just need to add the _query string_ `/?cultureInfo=pt-br` or `/?cultureInfo=es-ar` on the URL, for example. By using the first URL, the expected result is this one:

![image](https://user-images.githubusercontent.com/19495917/80527977-99057880-896b-11ea-9305-8921d580a1f1.png)
