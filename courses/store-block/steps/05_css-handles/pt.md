# Modificando o bloco countdown para ter estilos configuráveis

## Introdução

Agora que já implementamos o `countdown`, que tal adicionar um pouco de customização? Nessa etapa, você irá aprender conceitos básicos a respeito de CSS _handles_ e Tachyons para, em seguida, customizar o estilo da sua _app_.

### CSS Handles

Os _handles_ de CSS são utilizados para customizar os componentes da sua loja através de classes de CSS no código do tema. Todas essas configurações são definidas através da _app_ `vtex.css-handles`, responsável por declarar todos os pontos de customização do seu bloco.

Definindo os nomes dos seus _handles_ e adicionando aos seus respectivos elementos HTML, é possível entregar ao usuário do tema pontos de customização que permitam criar _layouts_ flexíveis.

### Tachyons

O Tachyons é um _framework_ para CSS funcional. Diferentemente de outros _frameworks_ conhecidos, como o Bootstrap, ele não apresenta componentes UI "pré-buildados". Na verdade, seu objetivo é justamente separar as regras de CSS em partes pequenas e reutilizáveis. Esse tipo de estratégia é comumente conhecida como _Subatomic Design System_ e, caso você tenha interesse, pode encontrar uma referência [neste link](https://daneden.me/2018/01/05/subatomic-design-systems/). Essa estratégia torna _frameworks_ como o Tachyons muito flexíveis, escaláveis e rápidos.

Grande parte das definições de Tachyons podem ser alteradas, de forma que sua loja passe a ter um estilo mais customizado. Para isso, basta definir um arquivo JSON na pasta `styles/configs`; essas informações podem ser encontradas de forma mais detalhada em: [Customizing styles on VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-5-definingstyles).

## Customizando seu bloco

1. Primeiro, importe o _hook_ `useCssHandles`. Para isso, volte ao `Countdown.tsx` e faça o _import_:

   ```tsx
   // react/Countdown.tsx
   import { useCssHandles } from 'vtex.css-handles'
   ```

2. Feito isso, defina em um _Array_ todos os _handles_ que serão necessários (neste caso, será utilizado apenas `'countdown'`):

   ```tsx
   // react/Countdown.tsx
   const CSS_HANDLES = ['countdown']
   ```

3. Após a definição do _array_, utilize o `useCssHandles` no componente `Countdown` para definir o _handle_ do `countdown`:

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

4. Por fim, é preciso utilizar o _handle_ no componente a fim de ver a customização. Para isso, é necessário utilizar a prop `className` com as classes a serem utilizadas e as classes de Tachyons, para os estilos globais.

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
   +   <div className={`${handles.countdown} c-muted-1 db tc`}>
         {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
       </div>
     )
   }
   ```

Vamos ver o resultado?

![image](https://user-images.githubusercontent.com/19495917/75475280-457cab80-5977-11ea-938e-d3c2b532e891.png)

<img src="https://user-images.githubusercontent.com/19495917/75475388-7a88fe00-5977-11ea-9d35-c13482f1e61c.gif" width="500" height="400"/>
