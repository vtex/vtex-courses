# Página de pesquisa

## Introdução

![image](https://user-images.githubusercontent.com/18701182/69843114-d6db6500-1244-11ea-82a7-b10880e2ed55.png)

Acabamos de implementar nossa página de produto e estamos avançando para a página de pesquisa. Ambos são semelhantes no sentido de que ambos têm blocos que são únicos neste contexto. Vamos explorar os blocos de forma desordenada, sem pensar no design da página, por enquanto, apenas para ter uma ideia de seu comportamento.

## Começando com o Search Layout

Da mesma forma que outros modelos, `store.search` também pode ser flexível. Para construir um layout único, você precisará usar um bloco chamado `search-result-layout`.

```json
{
  "store.search": {
    "blocks": ["search-result-layout"]
  }
}
```

O `search-result-layout`, por sua vez, deve conter outros 3 blocos:

- `search-result-layout.desktop`
- `search-result-layout.mobile`
- `search-not-found-layout`

Como você já percebeu, os dois primeiros definem qual layout será exibido no **desktop e celular** respectivamente, enquanto o terceiro define o layout da **página de pesquisa sem resultados**.

```json
{
  "store.search": {
    "blocks": ["search-result-layout"]
  },
  "search-result-layout": {
    "blocks": [
      "search-result-layout.desktop",
      "search-result-layout.mobile",
      "search-not-found-layout"
    ]
  }
}
```

Nesse curso, vamos **focar** na implementação do **layout para desktop**.

## Blocos de Busca

A [documentação dos resultados da pesquisa](https://developers.vtex.com/docs/vtex-search-result) oferece uma boa referência para blocos que podem ser usados ​​em um **contexto de pesquisa**. Esta etapa se concentrará em destacar os principais:

- Breadcrumb de pesquisa (`breadcrumb.search`);
- Título de pesquisa (`search-title.v2`);
- Total de produtos encontrados (`total-products.v2`);
- Ordenação de produtos (`order-by.v2`);
- Botão Mostrar mais resultados (`search-fetch-more`);
- Mostrar botão de resultados anteriores (`search-fetch-previous`);
- Filtro de navegação (`filter-navigator.v3`);
- Resultados da pesquisa (`search-content`)

Embora serem muitos, todos esses blocos são relativamente simples e funcionam muito bem sem a necessidade expressa de configurar suas `props`.

## Atividade

![image](https://user-images.githubusercontent.com/18701182/69843046-7f3cf980-1244-11ea-8309-8a26071cd6f0.png)

Copie os códigos acima no arquivo `search.jsonc` e defina a `search-result-layout.desktop` contendo o seguinte, na ordem abaixo:

- `breadcrumb.search`;
- `search-title.v2`;
- `total-products.v2`;
- `order-by.v2`;
- `search-fetch-previous`;
- `search-content`;
- `filter-navigator.v3`;
- `search-fetch-more`.

Para isso, escreva um código similar a este:

```json
...
  },
  "search-result-layout.desktop": {
    "children": [
      "breadcrumb.search",
      "search-title.v2",
      "total-products.v2",
      "order-by.v2",
      "search-fetch-previous",
      "search-content",
      "filter-navigator.v3",
      "search-fetch-more"
    ]
  }
...
```

Note: Lembre-se de olhar a [documentação](https://developers.vtex.com/docs/vtex-search-result) caso tenha dúvidas ao longo da atividade.
