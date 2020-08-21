# Quick View

## Introdução 

Seguiremos os conceitos aprendidos no passo anterior e vamos aprofundar um pouco mais para aprender como construir o comportamento de _Quick View_ em uma prateleira de produtos.

## Atividade

1. Adicione uma prateleira na sua página inicial:

```diff
{
  "store.home": {
    "blocks": [
      ...
+     "list-context.product-list"
    ]
  },
+ "list-context.product-list": {
+   "blocks": ["product-summary.shelf#modal"],
+   "children": ["slider-layout"]
+ },
+ "product-summary.shelf": {
+   "children": [
+     "product-summary-name",
+     "product-selling-price"
+   ]
+ }
}
```

2. No `product-summary` adicione um _trigger_ para o modal: 

```diff
{
  ...
 "product-summary.shelf": {
   "children": [
+    "modal-trigger#quickview",
     "product-summary-name",
     "product-selling-price"
   ]
 }
}
```

3. Vamos, então, fazer com que o _trigger_ para o modal seja a imagem do produto e definir que usaremos um _layout_:

```diff
{
  ...
  "product-summary.shelf": {
    "children": [
      "modal-trigger#quickview",
      "product-summary-name",
      "product-selling-price"
    ]
  },
+ "modal-trigger#quickview": {
+   "children": ["product-summary-image", "modal-layout#quickview"]
+ }
}
```

4. Para fechar vamos definir um simples modal com algumas opções de produto:

```diff
{
  ...
+ "modal-layout#quickview": {
+   "children": [
+     "product-summary-name",
+     "product-images",
+     "product-summary-sku-selector",
+     "product-summary-quantity",
+     "add-to-cart-button"
+   ]
+ }
}
```

O resultado, então, deve ser:

![modallayout](https://user-images.githubusercontent.com/18701182/90278764-585c3d00-de3e-11ea-8fa9-491a1cfd6001.gif)
  
