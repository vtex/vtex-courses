# Stack Layout

## Introdução

O [Stack Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-stack-layout) é mais um tipo possível de construir _layouts_ complexos se alavancando dos blocos nativos, com ele é possível facilmente empilhar bloco. Para este passo, vamos criar um _call-to-action_ (CTA) na página principal com um _banner_ e um botão de redirecionamento.

## Atividade

Pensando melhor no problema que queremos resolver, conseguimos dividi-lo em duas partes:

- Uma imagem (bloco `image`) de fundo:

![image](https://appliancetheme.vtexassets.com/assets/app/src/appliancecat___1b7592b49667c6a89203a0997e06bc87.jpg)

- Um botão de CTA:

![image](https://user-images.githubusercontent.com/18701182/90291114-8a2cce00-de55-11ea-982c-3fef741535fb.png)

Vamos então construir o _info card_ usando ambos elementos:

1. Declare o `stack-layout` na sua página:

```diff
{
  "store.home": {
    "blocks": [
+     "stack-layout#cta"
    ]
  }
}
```

2. Adicione uma imagem e um _link_ para o `stack-layout`:

```diff
{
  "store.home": {
    "blocks": [
     "stack-layout#cta"
    ]
  },
+ "stack-layout#cta": {
+   "children": [
+     "image#cta",
+     "link#cta"
+   ]
+ }
}
```

3. Declare a imagem e o _link_ que usaremos:

```diff
{
  ...
+ "image#cta": {
+   "props": {
+     "blockClass": "cover",
+     "width": "100%",
+     "height": 400,
+     "src": "https://appliancetheme.vtexassets.com/assets/app/src/appliancecat___1b7592b49667c6a89203a0997e06bc87.jpg"
+   }
+ },
+ "link#cta": {
+   "props": {
+     "displayMode": "button",
+     "buttonProps": {
+       "variant": "primary",
+       "size": "large"
+     },
+     "href": "/washer",
+     "label": "Check these awesome discounts"
+   }
+ }
}
```

4. O resultado deve ser então:

![infocard](https://appliancetheme.vtexassets.com/assets/app/src/appliancecat___0a2e8bde5418359bdaf0a06d9a4d09f5.jpg)

**OPCIONAL:** Se você quiser melhorar um pouco o visual do _info card_ criado, siga os passos seguintes:

5. Crie um arquivo `vtex.stack-layout.css` na pasta `/styles/css` e adicione os seguintes estilos:

```
.stackItem {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

6. No arquivo `vtex.store-components.css` da pasta `/styles/css` adicione:

```
.imageElement--cover {
  object-fit: cover;
}
```

O resultado deve ser então:

![image](https://user-images.githubusercontent.com/18701182/90292857-22788200-de59-11ea-9a9c-8668b01ffb1c.png)

## Notas

- Não se preocupe se não entender bem como funcionou a estilização feita nos passos opcionais, temos um curso exclusivo para estilização que será visto mais a frente.

- Se você clicar no botão e não estiver vendo uma página de resultado de busca, garanta que você tem um layout de busca definido (vimos isso no curso de blocos básicos) seguindo a documentação de [Search Result](https://developers.vtex.com/docs/vtex-search-result#search-result)
