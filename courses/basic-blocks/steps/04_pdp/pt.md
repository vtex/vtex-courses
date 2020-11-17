# Página do produto

## Introdução

Assim que a página inicial da loja estiver pronta, podemos começar a trabalhar em um novo modelo de loja: a página do produto. As páginas de produtos são provavelmente os modelos com mais blocos, o que as torna extremamente flexíveis e personalizáveis.

## Página do produto

Vamos construir uma página de produto mínima, com apenas o essencial:

- **imagens;**
- **preços;**
- **nomes;**
- **botão de compra**

![image](https://user-images.githubusercontent.com/18701182/69375575-6b632780-0c87-11ea-85d2-41e1e858a33e.png)

## Blocos de produto

A maioria dos blocos de produto, ao contrário dos blocos de conteúdo, são inseridos em um determinado contexto, tornando-os um pouco "plug-n-play": colocar `product-images` na página do produto levará automaticamente a imagens sendo renderizadas nessa página, o mesmo sendo válido para preço e nome.

Isso não significa que esses blocos sejam menos personalizáveis, muito pelo contrário, como veremos em breve.

## Atividade

Construa uma página de produto usando os seguintes blocos em `product.jsonc` e declare-a na pasta `store/blocks`: [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) and [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton). Esperamos que a estrutura contenha o seguinte:

1. Uma **row** em `store.product`;

   ```json
   {
     "store.product": {
       "children": ["flex-layout.row#main"]
     }
   }
   ```

2. Essa **row** deve conter **duas _columns_**;

   ```json
   "flex-layout.row#main": {
     "props": {
       "marginTop": 6
     },
     "children": [
       "flex-layout.col#left",
       "flex-layout.col#right"
     ]
   }
   ```

3. A coluna da esquerda deve conter [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages);

   ```json
   "flex-layout.col#left": {
     "children": [
       "product-images"
     ]
   }
   ```

4. A coluna da direita deve conter [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price) e [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton):

   ```json
     "flex-layout.col#right": {
       "children": [
         "product-name",
         "product-price",
         "buy-button"
       ]
     },
   ```

Ainda queremos:

1. A coluna da direita alinhada ao centro (veja as props `verticalAlign` e `preventVerticalStretch` na [documentação do Flex Layout Column](https://developers.vtex.com/docs/vtex-flex-layout#flex-layoutcol)):

   ```json
     "flex-layout.col#right": {
       "props": {
         "preventVerticalStretch": true,
         "verticalAlign": "middle"
       },
       "children": [
         ...
       ]
     },
   ```

2. O [`product-price`](https://developers.vtex.com/docs/vtex-product-price#configuration) mostrar economias totais e lista de preçoes (`showSavings` e `showListPrice`):

   ```json
     "product-price": {
       "props": {
         "showSavings": true,
         "showListPrice": true
       }
     }
   ```

Após terminados os passos anteriores, você pode procurar por um produto na barra de busca, no canto superior direito da página.

![image](https://user-images.githubusercontent.com/19495917/90903507-682ad280-e3a4-11ea-9781-77a9b111218b.png)

Se você estiver na conta `appliancetheme`, tente buscar por uma máquina de café, por exemplo:

<img src="https://user-images.githubusercontent.com/19495917/90903699-b049f500-e3a4-11ea-9e3e-6ad5f6a41333.png" height=300px>

Ao clicar na segunda, a `Red Retro Coffee Machine`, você i'ra para a sua página de produto, ou `pdp`, e verá os blocos que a compõe.

![image](https://user-images.githubusercontent.com/19495917/90905481-9f9a7e80-e3a6-11ea-99c4-6a546e0000a3.png)

> Nota: Alguns dos produtos não terão _savings_, dado que não há descontos baseados no preço de catálogo, ou _list price_.

Note: Lembre de acessar as documentações de [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) e [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton) em caso de dúvidas durante a atividade.
