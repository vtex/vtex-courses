# Criando a funcionalidade do bloco countdown

## Introdução

Agora que o básico do nosso componente está funcional, é hora de implementar efetivamente o contador. Para isso, é preciso utilizar um _hook_ do React, chamado `useState`;

## O _hook_ `useState`

É chamado dentro de um componente funcional para atualizar e consumir o _state_ de um componente. O _state_ simboliza o estado atual de um componente.

> O `useState` retorna um par: o valor do estado atual e uma função para atualizá-lo.

Voltando ao exemplo apresentado na etapa anterior, podemos mostrar na prática os conceitos abordados anteriormente. Para lembrar do exemplo, veja o código abaixo:

```ts
const [count, setCount] = useState(0)
```

No trecho acima é importante observar três coisas:

- Na variável `count`, é possível consumir o estado atual;
- `setCount` é uma função para atualizá-lo;
- `0` é o valor do estado inicial

```ts
const [timeRemaining, setTime] = useState<TimeSplit>({
  hours: '00',
  minutes: '00',
  seconds: '00',
})
```

## Fazendo seu contador funcionar!

1. Precisamos importar algumas funções e tipos para continuar:

   ```ts
   //react/Countdown.tsx
   import React, { useState } from 'react'
   import { TimeSplit } from './typings/global'
   import { tick, getTwoDaysFromNow } from './utils/time'
   ```

   > A função `getTwoDaysFromNow` será utilizada para tratar condições de borda. Será explicado mais tarde neste passo.

2. Adicione o _hook_ de atualização de estado (`useState`)

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

   > Observe os detalhes: `timeRemaining` é o estado atual, `setTime` é a função de atualização do estado, `TimeSplit` é o tipo e, por fim, o objeto `{hours: '00', minutes: '00', seconds: '00'}` é o estado inicial do componente.

3. Adicione uma `targetDate` padrão para o caso de não haver um valor inicial definido. Vamos utilizar para isto uma data que é definida como dois dias a partir da data atual e ela será calculada em uma função utilitária que foi previamente importada da pasta `/utils`:

   ```typescript
   //react/Countdown.tsx
   const DEFAULT_TARGET_DATE = getTwoDaysFromNow()
   ```

4. Utilize a função `tick` e a constante `DEFAULT_TARGET_DATE` para fazer o contador:

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

5. Altere o `h1` para que ele exiba o contador que criamos. Para isso, precisamos utilizar o estado atual `timeRemaining`:

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

   > A formatação da _string_ do contador está no formato `HH:MM:SS`, feita através do _split_ em `hours`, `minutes` e `seconds`.

Assim, com essas alterações, veremos a atualização em tempo real do contador! O resultado na _home_ é esse:

![image](https://user-images.githubusercontent.com/19495917/75474406-b3c06e80-5975-11ea-82ec-89ab27504873.png)

<img src="https://user-images.githubusercontent.com/19495917/75474511-e0748600-5975-11ea-825d-7e9a20f95362.gif" width="500" height="320"/>
