# Melhorias na busca

Uma das operações mais pesadas e pouco performáticas na navegação de uma loja é a sua busca. Para melhorar a experiência, também podemos otimizar a busca por dados e torná-la mais eficiente, neste sentido dois pontos devem ser observados: os SKUs e o preço

## Atividade

1. Para otimizar o contexto da busca, adicione a propriedade context ao template de busca no arquivo `store/blocks/search.jsonc`: 

```diff
{
  "store.search": {
+   "props": {
+     "context": {}
+   },
    "blocks": ["search-result-layout#search"]
  },
  ...
}
```

2. Para garantir redução de resultados carregados e portanto, tornar o volume de resultados menor. É possível controlar para que apenas o primeiro SKU disponível seja retornado, para isso, adicione no `context` o `skusFilter` como sendo `FIRST_AVAILABLE`: 

```diff
{
  "store.search": {
    "props": {
      "context": {
+       "skusFilter": "FIRST_AVAILABLE"
      }
    },
    "blocks": ["search-result-layout#search"]
  },
}
```

3. Para tornar os preços mais *cache*aveis e evitar simulá-lo para cada resultado de busca obtido, podemos também escolher `skip` como `simulationBehavior`: 

```diff
{
  "store.search": {
    "props": {
      "context": {
        "skusFilter": "FIRST_AVAILABLE"
+       "simulationBehavior": "skip" 
      }
    },
    "blocks": ["search-result-layout#search"]
  },
}
```
