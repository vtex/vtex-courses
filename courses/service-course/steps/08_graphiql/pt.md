# GraphQL: Usando o GraphiQL

## Introdução

Agora, com a _query_ e o _resolver_ implementados, precisamos utilizá-los para pegar as informações dos N produtos mais vistos. Utilizando a **IDE de GraphQL**, podemos testar a _query_ que implementamos anteriormente.

## GraphiQL

[GraphiQL](https://github.com/graphql/graphiql) é uma ID interativa acessada através de um navegador. Antes de utilizar a _query_ na sua _app_, é interessante testar sua funcionalidade. Para fazer isso, vamos reproduzir o uso da _query_ na IDE do GraphQL.

Explorando um pouco a interface da IDE, há três áreas principais: área de código, área das variáveis da _query_ e a área de _debug_. É possível checar onde cada área está na interface através da imagem abaixo:

![image](https://user-images.githubusercontent.com/43679629/83764107-e900ea80-a64f-11ea-969f-116ea896fe2d.png)

## Testando sua _query_

1. Abra a rota do GraphiQL e digite o código abaixo na devida área na interface:

   ```
   query ($topN: Int) {
     productList(topN: $topN){
       slug
       count
     }
   }
   ```

2. A _query_ que acabamos de declarar utiliza uma variável (_topN_). Agora, precisamos declará-la na área de variáveis:

   ```
   {
     "topN": 2
   }
   ```

   > :exclamation: A área de variáveis de _query_ se encontra abaixo da área de código. Para aumentar o seu tamanho, basta clicar no título e arrastar.

3. Por fim, basta clicar no botão de _play_ e checar a saída na área de _debug_. Os resultados da _query_ devem ser similares ao da imagem abaixo:

   ![image](https://user-images.githubusercontent.com/43679629/83763622-4c3e4d00-a64f-11ea-9615-435811d411c6.png)
