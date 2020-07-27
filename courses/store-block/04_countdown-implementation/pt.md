# Creating the countdown block feature

## Introduction
Now we covered the component's basics, it's time to implement the countdown effectively. For that, we need to use a React hook called `useState`.

> It is called within the functional component to update and consume the component *state*. The *state* represents the component's current state. The `useState` returns a pair: the current state value and a function to update it. 

## Making your countdown work!

First, we need to import a few functions and types to continue. Inside the Countdown component, import the following:

```ts
//react/Countdown.tsx
import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'
```

Next step is to add the state update *hook* (`useState`):

```diff
//react/Countdown.tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
+   const [timeRemaining, setTime] = useState<TimeSplit>({
+     hours: '00',
+     minutes: '00',
+     seconds: '00'
+   })

    return (
      <div>
        { targetDate }
      </div>
    ) 
}
```

After doing that, we'll add a default constant `targetDate` for the edge case where the prop is not defined:
    
```typescript
//react/Countdown.tsx
const DEFAULT_TARGET_DATE = (new Date('2020-06-25')).toISOString()
```

Now, we need to add the `tick` function and the `DEFAULT_TARGET_DATE` constant to make the countdown work:

```diff
//react/Countdown.tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
})

+ tick(targetDate, setTime)

  return (
    <div>
      { targetDate }
    </div>
  ) 
}
```

At last but not least, change the `h1` so that it shows the countdown that we've created. For that, we need to use the `timeRemaining` current state:
```diff
//react/Countdown.tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  tick(targetDate, setTime)

  return (
    <div>   
-     <h1>{ targetDate }</h1>
+     <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
    </div>
  ) 
}
```

> The countdown *string* formatting is in a `HH:MM:SS` format, made through an `hours`, `minutes` and `seconds` splitting. 

Therefore, with these changes, we'll see a real-time update of the countdown! The result on the homepage is this: 

![image](https://user-images.githubusercontent.com/19495917/75474406-b3c06e80-5975-11ea-82ec-89ab27504873.png)

<img src="https://user-images.githubusercontent.com/19495917/75474511-e0748600-5975-11ea-825d-7e9a20f95362.gif" width="500" height="320"/>



# Criando a funcionalidade do bloco countdown

## Introdução
Agora que o básico do nosso componente está funcional, é hora de implementar efetivamente o contador. Para isso, é preciso utilizar um *hook* do React, chamado `useState`.

>É chamado dentro de um componente funcional para atualizar e consumir o *state* de um componente. O *state* simboliza o estado atual de um componente. O `useState` retorna um par: o valor do estado atual e uma função para atualizá-lo.


## Fazendo seu contador funcionar!

Em primeiro lugar, precisamos importar algumas funções e tipos para continuar:

```ts
//react/Countdown.tsx
import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'
```

Agora, adicione o *hook* de atualização de estado (`useState`)

```diff
//react/Countdown.tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
+   const [timeRemaining, setTime] = useState<TimeSplit>({
+     hours: '00',
+     minutes: '00',
+     seconds: '00'
+   })

    return (
      <div>
        { targetDate }
      </div>
    ) 
}
```
>Observe os detalhes: `timeRemaining` é o estado atual, `setTime` é a função de atualização do estado, `TimeSplit` é o tipo e, por fim, o objeto `{hours: '00', minutes: '00', seconds: '00'}` é o estado inicial do componente.

Feito isso, adicione uma `targetDate` padrão para o caso de não haver um valor inicial definido. Para isso, declare uma constante que será utilizada como padrão:
    
```typescript
//react/Countdown.tsx
const DEFAULT_TARGET_DATE = (new Date('2020-06-25')).toISOString()
```

Agora, utilize a função `tick` e a constante `DEFAULT_TARGET_DATE`  para fazer o contador:
```diff
//react/Countdown.tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
})

+ tick(targetDate, setTime)

  return (
    <div>
      { targetDate }
    </div>
  ) 
}
```

Por fim, altere o `h1` para que ele exiba o contador que criamos. Para isso, precisamos utilizar o estado atual `timeRemaining`:
```diff
//react/Countdown.tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  tick(targetDate, setTime)

  return (
    <div>   
-     <h1>{ targetDate }</h1>
+     <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
    </div>
  ) 
}
```

> A formatação da *string* do contador está no formato `HH:MM:SS`, feita através do *split* em `hours`, `minutes` e `seconds`.

Assim, com essas alterações, veremos a atualização em tempo real do contador! O resultado na *home* é esse:

![image](https://user-images.githubusercontent.com/19495917/75474406-b3c06e80-5975-11ea-82ec-89ab27504873.png)

<img src="https://user-images.githubusercontent.com/19495917/75474511-e0748600-5975-11ea-825d-7e9a20f95362.gif" width="500" height="320"/>
