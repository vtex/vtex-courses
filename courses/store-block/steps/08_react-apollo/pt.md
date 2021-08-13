# Conectando _backend_ e _frontend_

## Introdução

Agora aprenderemos como recuperar dados do _backend_ e exibi-los na interface. O VTEX IO utiliza [GraphQL](https://graphql.org/) como linguagem/tecnologia para transferência de dados, o que torna a programação dos nossos componentes bastante simples. Iremos modificar o nosso componente Countdown para buscar o _targetDate_ do **campo `releaseDate` de um produto da VTEX**. Para realizar queries GraphQL em React, é utilizado o **Apollo Client**, uma biblioteca de gerenciamento de estado que facilita a integração de uma API GraphQL com a aplicação _front-end_.

A biblioteca **Apollo Client** disponibiliza uma integração nativa com React, por meio de _hooks_. Dessa forma, realizar uma _query_ significa usar um _hook_ que não só realizará as _queries_ e fará o _fetch_ dos dados, mas também proverá cache e atualização do estado da UI. Essa integração, chamada `react-apollo` já está declarada no `package.json`.

## Preparação

- Para implementar esta funcionalidade, precisamos **adicionar o nosso bloco `countdown` na página de produto**, e também faremos nossos testes nessa página também. Para isso, faça o seguinte:

1. Primeiramente, em seu tema clonado (`store-theme`) acesse o arquivo `store/blocks/pdp/product.jsonc` e, no bloco `flex-layout.col#right-col` adicione o bloco `countdown`, logo antes do `buy-button`:

   ```diff
       "product-gifts",
   +	"countdown",
       "flex-layout.row#buy-button",
       "availability-subscriber",
   ```

2. Rode `vtex link` em seu tema novamente (caso o processo já não esteja sendo executado). Pronto, agora o nosso bloco está na página de produto. Acesse alguma destas páginas e veja o componente `Countdown` renderizado.

## Query de Release Date

1. Crie uma pasta `react/queries` e nela adicione um arquivo `productReleaseDate.graphql` que irá conter a _query_ a ser feita. Em particular, essa _query_ irá receber um termo, que será **o slug do produto a ser recuperado a data de lançamento**. Ela chamará o _resolver_ `product`, já disponível pela app `vtex.search-graphql`, e recuperaremos apenas o campo que precisamos.

   ```graphql
   query productReleaseDate($slug: String) {
     product(slug: $slug) {
       releaseDate
     }
   }
   ```

   > Perceba que a query precisará do _slug_ do produto que buscamos. Para isso, **recuperaremos esta informação do contexto de Produto da VTEX**.

2. Para utilizar essa query, é necessário **adicionar a app `vtex.search-graphql` como dependência em sua app.** Também precisaremos utilizar o hook `useProduct`, exportado pela app `vtex.product-context`, para recuperar o slug do produto que está carregado na página. Para isso, no `manifest.json` de sua app, adicione em `dependencies`:

   ```
   "vtex.search-graphql": "0.x",
   "vtex.product-context": "0.x"
   ```

3. Agora, é necessário importar os hooks `useQuery`, para fazer a _query_ que retornará o dado que descrevemos, e `useProduct`, para nos dar a informação sobre o slug do produto atual. Além disso, também é preciso importar a _query_, definida anteriormente, que se encontra no arquivo `productReleaseDate.graphql`.

   ```diff
   // react/Countdown.tsx
   import React from 'react'
   ...
   +import { useQuery } from 'react-apollo'

   +import useProduct from 'vtex.product-context/useProduct'

   +import productReleaseDate from './graphql/productReleaseDate.graphql'
   ```

   > É importante notar que há a possibilidade da sua IDE mostrar um erro ao fazer o _import_ do `product-context`.

   > Vale ressaltar também que a _prop_ `targetDate` não será mais necessária, então pode removê-la.

4. Feito isso, defina a query usando o `productReleaseDate` importado e o `useQuery`. Os dados de produto podem ser encontrados em `useProduct`. Ambos são [hooks](https://reactjs.org/docs/hooks-intro.html), e portanto, devem ser adicionados dentro de um componente funcional React.

   ```diff
   + const { product } = useProduct()
   + const { data, loading, error } = useQuery(productReleaseDate, {
   +   variables: {
   +     slug: product?.linkText
   +   },
   +   ssr: false
   + })
   ```

   > `linkText` será igual a `'red-analogic-coffee-and-tea-machine'`, por exemplo, quando o seu componente for renderizado na página deste produto.

5. Agora que estamos utilizando nosso bloco em páginas que têm contexto de produto, é importante testar se este context existe. Para fazer isso, vamos adicionar o bloco de código abaixo:

   ```tsx
   if (!product) {
     return (
       <div>
         <span>There is no product context.</span>
       </div>
     )
   }
   ```

6. Além disso, é preciso tratar os casos de _loading_ e _error_ antes de retornar o componente principal do contador ao utilizar o _hook_ `useQuery`. Para isso, é possível retornar um `span` em cada um dos casos, como no exemplo abaixo, dentro do componente `Countdown`:

   ```tsx
   if (loading) {
     return (
       <div>
         <span>Loading...</span>
       </div>
     )
   }
   if (error) {
     return (
       <div>
         <span>Erro!</span>
       </div>
     )
   }
   ```

7. Após enviar as modificações, acesse uma página de produto e verifique se a _query_ está funcionando através de um `console.log({data})` após a chamada do `useQuery`, que deve mostrar algo como isso:

   ```ts
   {
     data: {
       product: {
         releaseDate: '2019-01-01T00:00:00"',
         __typename:  "Product"
       }
     }
   }
   ```

8. Por fim, para fazer com que o Countdown marque as horas para o `releaseDate` do produto, mude o parâmetro da função `tick`. Você também pode remover as `props` recebidas no componente, já que não serão mais usadas.
   ```diff
   -tick(targetDate, setTime)
   +tick(data?.product?.releaseDate || DEFAULT_TARGET_DATE, setTime)
   ```

Resultado no produto _Red Front-Loading Washer_:

> No caso de você se deparar com casos em que o contador está contando para cima ou até mesmo com valores negativos, não se preocupe! Isso está relacionado ao fato de que o `releaseDate`pode estar no passado.

![image](https://user-images.githubusercontent.com/18706156/79596495-0fc28c00-80b7-11ea-8361-35075dba3bd5.png)

---

## Muito bem!

Esse é o último passo do curso de Store Block, você avançou muito bem e esperamos que tenha aprendido bastante até esse momento. **Parabéns!**

Se você deseja continuar aprendendo mais em como desenvolver utilizando o VTEX IO, nós o encorajamos a começar nosso próximo curso, que foca em ensinar como desenvolver serviços no VTEX IO.
