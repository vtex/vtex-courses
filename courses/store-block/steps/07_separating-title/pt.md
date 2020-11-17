# Componentizando o bloco countdown

## Introdução

Nessa etapa, a _app_ tem dois elementos principais: o título e o contador. Porém, para obter uma maior flexibilidade de posicionamento e customização, é interessante que sejam separadas em dois blocos distintos. Para isso, é preciso apresentar brevemente o conceito de interfaces para, em seguida, ser desenvolvido um novo componente `Title`. Um exemplo de customização em termos de posicionamento, que será abordada nessa etapa, é:

> E se eu quisesse que o título estivesse embaixo ou ao lado do contador?

## Interface

Uma interface funciona como um contrato, com restrições bem definidas de como os blocos funcionarão juntos. Define, então, um mapeamento que cria um bloco do Store Framework, a partir de um componente React. É importante destacar que o uso de interfaces, de forma a separar uma _app_ em diversas interfaces torna o poder de customização muito maior.

Ao definir a _app_ na interface, a propriedade `component` é responsável por definir o componente React que será usado. É importante ressaltar que o nome do `component` tem que ser igual ao nome do arquivo do componente dentro da pasta `react/`.

Exemplo de `interfaces.json`:

```json
{
  "countdown": {
    "component": "Countdown"
  }
}
```

Agora, você irá separar o título do bloco do contador e adicioná-lo à nossa loja embaixo do contador.

### Alterando o componente `Countdown`

1. Em primeiro lugar, remova os _imports_, o `title` da interface e altere a constante do CSS _handles_:

   ```diff
   //react/Countdown.tsx
   import React, { useState } from 'react'
   import { TimeSplit } from './typings/global'
   import { tick, getTwoDaysFromNow } from './utils/time'
   import { useCssHandles } from 'vtex.css-handles'
   -import { FormattedMessage } from 'react-intl'

   interface CountdownProps {
     targetDate: string,
   -  title: string
   }

   const DEFAULT_TARGET_DATE = getTwoDaysFromNow()
   -const CSS_HANDLES = ['container', 'countdown', 'title']
   +const CSS_HANDLES = ['countdown']
   ```

2. Agora, no componente React em si, é preciso retirar o `title` como _prop_ recebida e a constante do texto do título, além de alterar o que é renderizado:

   ```diff
   //react/Countdown.tsx
   const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
   - title,
     targetDate = DEFAULT_TARGET_DATE,
   }) => {
     const [
       timeRemaining,
       setTime
     ] = useState<TimeSplit>({
       hours: '00',
       minutes: '00',
       seconds: '00'
     })

   - const titleText = title || <FormattedMessage id="countdown.title" />
     const handles = useCssHandles(CSS_HANDLES)

     tick(targetDate, setTime)

     return (
   -   <div className={`${handles.container} t-heading-2 fw3 w-100 pt7 pb6 c-muted-1 db tc`}>
   -     <div className={`${handles.title} db tc`}>
   -       { titleText }
   -     </div>
         <div className={`${handles.countdown} db tc`}>
           {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
         </div>
   -   </div>
     )
   }
   ```

3. Por fim, retire o título do _schema_:

   ```diff
   //react/Countdown.tsx
   Countdown.schema = {
     title: 'editor.countdown.title',
     description: 'editor.countdown.description',
     type: 'object',
     properties: {
   -   title: {
   -     title: 'editor.countdown.title.title',
   -     type: 'string',
   -     default: null,
   -   },
       targetDate: {
         title: 'editor.countdown.targetDate.title',
         description: 'editor.countdown.targetDate.description',
         type: 'string',
         default: null,
       },
     },
   }
   ```

### Criando um novo componente

1. Crie um novo arquivo dentro da pasta `/react`, chamado `Title.tsx`, ele será o novo componente do título. Nele, alguns _imports_ precisam ser feitos. A estrutura básica do código é muito similar a do componente `Countdown`. Feito isso, adicione os _imports_ necessários e a constante do CSS _handles_:

   ```tsx
   //react/Title.tsx
   import React from 'react'
   import { FormattedMessage } from 'react-intl'
   import { useCssHandles } from 'vtex.css-handles'

   const CSS_HANDLES = ['title'] as const
   ```

2. Agora, é necessário alterar a função do componente:

   ```tsx
   //react/Title.tsx
   const Title: StorefrontFunctionComponent<TitleProps> = ({ title }) => {
     const handles = useCssHandles(CSS_HANDLES)
     const titleText = title || <FormattedMessage id="countdown.title" />

     return (
       <div
         className={`${handles.title} t-heading-2 fw3 w-100 c-muted-1 db tc`}
       >
         {titleText}
       </div>
     )
   }
   ```

3. Por fim, adicione a interface, o _schema_ e o _export_:

   ```tsx
   //react/Title.tsx
   interface TitleProps {
     title: string
   }

   Title.schema = {
     title: 'editor.countdown-title.title',
     description: 'editor.countdown-title.description',
     type: 'object',
     properties: {
       title: {
         title: 'editor.countdown.title.title',
         type: 'string',
         default: null,
       },
     },
   }

   export default Title
   ```

### Alterando o arquivo `interfaces.json`

Nesta altura, há dois componentes na _app_: o título e o contador. Porém, é preciso alterar o arquivo `interfaces.json`, que se encontra na pasta `store`. É preciso declarar os componentes separadamente. No início, nossa interface tinha apenas o `Countdown`. É necessário adicionar o outro componente:

```diff
{
  "countdown": {
    "component": "Countdown"
  },
+   "countdown.title": {
+     "component": "Title"
+   }
}
```

### Adicionando internacionalização

Também é preciso adicionar ao _Messages_ as traduções cujas chaves são as _strings_ do _schema_ que incluímos no arquivo `Title.tsx` logo acima. Como visto na etapa de _Messages_, vá à pasta `/messages` e adicione em cada um dos arquivos as traduções necessárias (`pt.json`, `es.json` e `en.json`). Abaixo há um exemplo para o caso do arquivo `en.json`:

```diff
 {
+  "countdown.title": "Countdown",
   "editor.countdown.title": "Countdown",
   "editor.countdown.description": "Countdown component"
 }
```

### Adicionando o novo bloco na home da loja

Por fim, para ver as mudanças, volte ao tema para alterá-lo a fim de incluir o novo bloco. Para isso, basta adicionar à _home_ o título! Assim como feito para o contador, é necessário adicionar o `countdown.title` como um bloco no tema da loja, ou seja, no arquivo `home.jsonc` do store-theme.

```diff
//home.jsonc
 {
   "store.home": {
     "blocks": [
       "countdown",
+      "countdown.title",
       ...
     ]
   },
   ...
 }
```

Pronto! Agora vamos ver como deve ser o resultado:
![image](https://user-images.githubusercontent.com/19495917/75560163-6d294d80-5a23-11ea-859d-35a8239ddfad.png)
