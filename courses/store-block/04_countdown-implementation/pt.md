# Criando a funcionalidade do bloco countdown

## Introdução
Agora que o básico do nosso componente está funcional, é hora de implementar efetivamente o contador. Para isso, é preciso utilizar um *hook* do React, chamado `useState`;


## O *hook* `useState` 

É chamado dentro de um componente funcional para atualizar e consumir o *state* de um componente. O *state* simboliza o estado atual de um componente. 

>O `useState` retorna um par: o valor do estado atual e uma função para atualizá-lo.

Voltando ao exemplo apresentado na etapa anterior, podemos mostrar na prática os conceitos abordados anteriormente. Para lembrar do exemplo, veja o código abaixo:

```tsx
const [count, setCount] = useState(0)
```

No trecho acima é importante observar três coisas: 
* Na variável `count`, é possível consumir o estado atual;
* `setCount` é uma função para atualizá-lo;
* `0` é o valor do estado inicial


```tsx
const [timeRemaining, setTime] = useState<TimeSplit>({
  hours: '00', 
  minutes: '00', 
  seconds: '00'
})
```

## Atividades
1. Precisamos importar algumas funções e tipos para continuar:

    ```tsx
    //react/Countdown.tsx
    import React, { useState } from 'react'
    import { TimeSplit } from './typings/global'
    import { tick } from './utils/time'
    ```

2. Adicione o *hook* de atualização de estado (`useState`)

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

3. Adicione uma `targetDate` padrão para o caso de não haver um valor inicial definido. Para isso, declare uma constante que será utilizada como padrão:
    
    ```typescript
    //react/Countdown.tsx
    const DEFAULT_TARGET_DATE = (new Date('2020-06-25')).toISOString()
    ```

4. Utilize a função `tick` e a constante `DEFAULT_TARGET_DATE`  para fazer o contador:
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
    > A formatação da *string* do contador está no formato `HH:MM:SS`, feita através do *split* em `hours`, `minutes` e `seconds`.

Assim, com essas alterações, veremos a atualização em tempo real do contador! O resultado na *home* é esse:

![image](https://user-images.githubusercontent.com/19495917/75474406-b3c06e80-5975-11ea-82ec-89ab27504873.png)

<img src="https://user-images.githubusercontent.com/19495917/75474511-e0748600-5975-11ea-825d-7e9a20f95362.gif" width="500" height="320"/>
