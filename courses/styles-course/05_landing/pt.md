# Construindo uma landing customizada de busca

## Introdução

No step anterior, você pôde aprender um pouco mais sobre como criar um template customizado. É muito comum que, em cenários de promoção e datas comemorativas, seja necessário criar *landing pages* especiais.  

## Buscas customizadas

Vimos que a busca infere o que precisa pelo contexto que está inclusa. Numa página customizada, no entanto, o contexto não existe e é preciso que se defina qual a *query* deve ser realizada para inferir os resultados. Tudo isso é possível através do `search-result-layout.customQuery`.

## Query schema

A query schema é uma das [props do search result custom query](https://developers.vtex.com/docs/vtex-search-result) com ela é possível controlar a busca que a nossa *landing page* deverá fazer. Para saber todas as possibilidades da query schema, veja sua [documentação aqui](https://developers.vtex.com/docs/vtex-search-result#step-3---defining-how-the-search-query-data-should-be-fetched).

## Criando uma nova _landing page_


![image](https://user-images.githubusercontent.com/18701182/69890324-d1792b80-12d3-11ea-911d-194d2cb778c8.png)

1. Defina uma rota nova (`store.custom#landing`) no arquivo `routes.json`;

    ```json
    "store.custom#landing": {
      "path": "/landing"
    }
    ```

2. Crie um novo arquivo na pasta de blocos chamado `search-landing.jsonc`;
3. Crie um novo template custom `store.custom#landing`;
4. Defina o bloco [`image`](https://developers.vtex.com/docs/vtex-store-components-image) como um dos blocos desse template. Este bloco deve possuir props `minWidth` de 100% e uma imagem a sua escolha.
5. Faça o mesmo com o `search-result-layout.customQuery`:

    ```json
    {
      "store.custom#landing": { 
        "blocks": [
          "image#landingbanner", 
          "search-result-layout.customQuery"
        ]
      }
    }
    ```

6. Defina o bloco `search-result-layout.customQuery` com [prop de *querySchema*](https://developers.vtex.com/docs/vtex-search-result#step-3---defining-how-the-search-query-data-should-be-fetched) que:
  - Ordena por data de lançamento de forma descrescente;
  - Esconda itens indisponíveis;
  - Mostre um máximo de 8 itens por página;
  - Use como *query* "Blue Top Retro Camera".