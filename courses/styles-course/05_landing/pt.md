# Construindo uma landing customizada de busca

## Introdução

No step anterior, você pôde aprender um pouco mais sobre como criar um template customizado. É muito comum que, em cenários de promoção e datas comemorativas, seja necessário criar *landing pages* especiais.  

## Buscas customizadas

Vimos que a busca infere o que precisa pelo contexto que está inclusa. Numa página customizada, no entanto, o contexto não existe e é preciso que se defina qual a *query* deve ser realizada para inferir os resultados. Tudo isso é possível através do `search-result-layout.customQuery`.

## Query schema

A query schema é uma das [props do _search result custom query_](https://developers.vtex.com/docs/vtex-search-result) com ela é possível controlar a busca que a nossa *landing page* deverá fazer. Para saber todas as possibilidades da query schema, veja sua [documentação aqui](https://developers.vtex.com/docs/vtex-search-result#step-3---defining-how-the-search-query-data-should-be-fetched).

## Criando uma nova _landing page_

1. Defina uma rota nova (`store.custom#landing`) no arquivo `routes.json`;

    ```json
    // store/routes.json
    "store.custom#landing": {
      "path": "/landing"
    }
    ```

2. Crie um novo arquivo na pasta de blocos chamado `search-landing.jsonc`;
3. Crie um novo template custom `store.custom#landing`;
4. Defina o bloco [`image`](https://developers.vtex.com/docs/vtex-store-components-image) como um dos blocos desse template. Este bloco deve possuir props `minWidth` de 100% e uma imagem a sua escolha.
5. Adicione o bloco `search-result-layout.customQuery`:

    ```diff
    // store/blocks/search-landing.jsonc
    {
      "store.custom#landing": { 
        "blocks": [
          "image#landingbanner", 
    +     "search-result-layout.customQuery"
        ]
      }
    }
    ```

6. Defina o bloco `search-result-layout.customQuery` com [prop de *querySchema*](https://developers.vtex.com/docs/vtex-search-result#step-3---defining-how-the-search-query-data-should-be-fetched) que:
  - Ordena por data de lançamento de forma descrescente;
  - Esconda itens indisponíveis;
  - Mostre um máximo de 8 itens por página;
  - Use como *query* "Camera".

7. Neste ponto, é provável que você não esteja vendo o bloco na nova página. Isso se deve ao fato de que ainda não adicionamos nenhum bloco ao `search-result-layout.customQuery`. Aqui há duas possibilidades:

    - Caso você já tenha passado pelos cursos anteriores, é provável que você já tenha alterado o seu arquivo `search.jsonc`neste _template_ que estamos usando para que seja utilizado o conceito de _flex layout_. Sendo assim, basta adicionar as seguintes linhas de código ao arquivo `search-landing.jsonc`:
      ```diff
      // store/blocks/search-landing.jsonc
      {
        ...
        "search-result-layout.customQuery": {
            "props": {
                "querySchema": {
                    "orderByField": "OrderByReleaseDateDESC",
                    "hideUnavailableItems": true,
                    "maxItemsPerPage": 8,
                    "queryField": "Camera",
                    "mapField": "ft",
                    "skusFilter": "ALL_AVAILABLE"
                }
            },
      +     "blocks": [
      +       "search-result-layout.desktop"
      +     ]
        }
      }
      ```


    - Caso você ainda não fez os cursos anteriores e seu arquivo `search.jsonc` encontra-se vazio, é preciso adicionar blocos a ele. Para isso, utilize o bloco de código abaixo. Depois de fazer isso, você precisará apenas adicionar o bloco `search-result-layout.desktop` ao _array_ de blocos do `search-result-layout.customQuery`, como mencionado anteriormente.
    
      ```json
      // store/blocks/search.jsonc
      {
        "store.search": {
          "blocks": [
            "search-result-layout"
          ]
        },
        "search-result-layout": {
          "blocks": [
            "search-result-layout.desktop",
            "search-result-layout.mobile",
            "search-not-found-layout"
          ]
        },
        "search-result-layout.desktop": {
          "children": [ 
            "breadcrumb.search",
            "search-title.v2",
            "flex-layout.row#top",
            "search-fetch-previous",
            "flex-layout.row#results",
            "search-fetch-more"
          ],
          "props":{
            "pagination": "showMore"
          }
        },
        "flex-layout.row#top": {
          "children": [
            "total-products.v2",
            "order-by.v2"
          ]
        },
        "flex-layout.row#results": {
          "children": [
            "flex-layout.col#filter",
            "flex-layout.col#search"
          ]
        },
        "flex-layout.col#filter": {
          "props": {
            "width": "20%"
          },
          "children": [
            "filter-navigator.v3"
          ]
        },
        "flex-layout.col#search": {
          "children": [      
            "search-content"
          ]
        }
      }
      ```
      > Neste caso, aproveite para observar com calma o código adicionado, de forma que você se assegure de que entendeu as relações entre os blocos e a função de cada um.

O resultado final esperado é:

![image](https://user-images.githubusercontent.com/19495917/90278827-7033c100-de3e-11ea-9083-4d7279312d7f.png)
