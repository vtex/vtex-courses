# Evoluindo sua página de produto

## Introdução

Durante a última etapa, aprendemos como criar uma página de produto simples com uma quantidade mínima de conteúdo sobre produtos, mas sabemos que o resultado está longe de ser uma página de produto ideal, por isso adicionaremos outros elementos que aparecem com frequência nas páginas de produtos de várias lojas.

![image](https://user-images.githubusercontent.com/18701182/69391258-002e4b00-0cb1-11ea-901f-f69d9c0b3062.png)

## Mais de 30 blocos de produtos

Nossa [documentação](https://vtex.io/docs/components/product-related) contém mais de 30 blocos relacionados ao produto. Exploraremos mais 4 nesta etapa:

- [Breadcrumb](https://developers.vtex.com/docs/vtex-breadcrumb)
- [Product Identifier](https://developers.vtex.com/docs/vtex-product-identifier)
- [Product Quantity](https://developers.vtex.com/docs/vtex-product-quantity)
- [SKU Selector](https://developers.vtex.com/docs/vtex-store-components-skuselector)

É importante que ao final do curso você reserve um tempo para explorar totalmente nossos componentes, além das possibilidades de customização que acompanham cada um.

## Activity

Desenvolva a página do produto adicionando os 4 blocos listados acima ao`product.jsonc` da seguinte forma:

1. Defina a `breadcrumb` logo antes da **row**;

    ```json
    "store.product": {
      "children": [
        "breadcrumb",
        "flex-layout.row#main"
      ]
    }
    ```

2. Defina o `product-identifier.product` logo depois de `product-name`;

    ```diff
        },
        "children": [
          "product-name",
    +      "product-identifier.product",
          ...
        ]
      },
    ```

3. Crie uma **row** logo abaixo do preço, contendo o `sku-selector` e `product-quantity` como filhos;

    ```json
    {
      ...
        "children": [ 
          "product-price",
          "flex-layout.row#qty-sku"
        ]
      },
      "flex-layout.row#qty-sku": {
        "children": [
          "sku-selector",
          "product-quantity"
        ]
      },
      ...
    }
    ```

4. Defina o `shipping-simulator` logo abaixo da linha definindo o `SKU Selector` e o `Product Quantity`:

```diff
    "children": [
      ...
+      "shipping-simulator",
      "buy-button"
    ]
```


Note: Lembre-se de acessar a documentação do [Breadcrumb](https://developers.vtex.com/docs/vtex-breadcrumb), [Product Identifier](https://developers.vtex.com/docs/vtex-product-identifier), [Product Quantity](https://developers.vtex.com/docs/vtex-product-quantity) e [SKU Selector](https://developers.vtex.com/docs/vtex-store-components-skuselector) se tiver qualquer dúvida durante a atividade.
