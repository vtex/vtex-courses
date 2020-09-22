# Refatorando blocos

Alguns blocos ao longo do tempo são substituídos por outros não só para aumentar a flexibilidade e facilidade de operação, mas também para otimizar o seu comportamento e performance. 

O Slider Layout (conhecido no curso de Layouts Complexos) foi aprimorado para que usasse lazy load no conteúdo carregado. Isto quer dizer que produtos e imagens só são carregados quando o usuário, de fato, as solicita. Este tipo de comportamento não estão disponíveis na Shelf e Carrossel, e para otimizar ainda mais a performance, vamos ver como podemos substituí-los.

## Atividade

1. Na home.jsonc declare dois blocos de texto para substituir os títulos: 

/store/blocks/home/home.jsonc
```diff
{
  ...
+ "rich-text#new-arrivals": {
+   "props": {
+     "text": "New arrivals",
+     "font": "t-heading-2",
+     "textPosition": "CENTER",
+     "textAlign": "CENTER"
+   }
+ },
+ "rich-text#clearance": {
+   "props": {
+     "text": "Clearance",
+     "font": "t-heading-2",
+     "textPosition": "CENTER",
+     "textAlign": "CENTER"
+   }
+ },
}
```

2. Mude o nome das `shelf`s para que use `list-context.product-list`: 

```diff
{
  ...
- "shelf#new-arrivals": {
+ "list-context.product-list#new-arrivals": {
  ...
- "shelf#clearance": {
+ "list-context.product-list#clearance": {
  ...
}
```

3. Remova as propriedades da shelf que não são mais necessárias em **ambas as shelfs**:

```diff
{
  "list-context.product-list#new-arrivals": {
    "blocks": ["product-summary.shelf"],
    "props": {
      "orderBy": "OrderByTopSaleDESC",
-     "paginationDotsVisibility": "never",
      "collection": "139",
-     "productList": {
-       "maxItems": 9,
-       "itemsPerPage": 3,
-       "minItemsPerPage": 1.5,
-       "scroll": "BY_PAGE",
-       "arrows": true,
-       "titleText": "New arrivals"
-     }
    }
  },
  ...
}
```

4. Adicione um `slider-layout#shelf` a ambos `product-list`s: 

```diff
{
  "list-context.product-list#new-arrivals": {
    "blocks": ["product-summary.shelf"],
+   "children": ["slider-layout#shelf"],
    ...
  },
  "list-context.product-list#clearance": {
    "blocks": ["product-summary.shelf"],
+   "children": ["slider-layout#shelf"],
    ...
  },
}
```

5. Por fim, defina o `slider-layout#shelf` para que tenha o mesmo comportamento da prateleira que tiramos: 

```diff
{
  ...
+ "slider-layout#shelf": {
+   "props": {
+     "itemsPerPage": {
+       "desktop": 3
+     }
+   }
+ }
}
```

O resultado deve ser: 

![image](https://user-images.githubusercontent.com/18701182/93842015-c977e700-fc6b-11ea-8cf5-0678a5f890fa.png)

**DICA:** Experimente fazer a mesma investigação do `view-source` do passo 3 e ver que os produtos da segunda página de cada shelf não são carregados no HTML depois do refatoramento.