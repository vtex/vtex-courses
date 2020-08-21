# Conditional Layout

## Introdução

Em alguns momentos, quando desenvolvendo uma loja, precisamos criar layouts condicionais que seriam aplicados somente a um contexto específico. Já vimos que na utilização de dispositivos diferentes, é possível condicionar o layout através do `Responsive Layout`, mas e se quiséssemos, por exemplo, ter uma página de produto diferente para produtos específicos? Para isso serve o Conditional Layout.

## Setup opcional

Para criar um _layout_ condicional de página de produto é necessário, inicialmente, ter uma página de produto. Se você já não tiver definido um _template_ de produto para sua loja, copie o disponível abaixo: 

```json
//product.jsonc
{
  "store.product": {
    "children": [
      "flex-layout.row#product-breadcrumb",
      "flex-layout.row#product-main"
    ]
  },
  "flex-layout.row#product-breadcrumb": {
    "props": {
      "marginTop": 20
    },
    "children": ["breadcrumb"]
  },
  "flex-layout.row#product-main": {
    "props": {
      "colGap": 9,
      "rowGap": 7,
      "marginTop": 4,
      "marginBottom": 7,
      "paddingTop": 7,
      "paddingBottom": 7,
      "blockClass": "product-main"
    },
    "children": [
      "product-images",
      "flex-layout.col#right-col"
    ]
  },
  "product-images": {
    "props": {
      "displayThumbnailsArrows": true,
      "thumbnailsOrientation": "vertical"
    }
  },
  "flex-layout.col#right-col": {
    "props": {
      "preventVerticalStretch": true,
      "rowGap": 0
    },
    "children": [
      "product-name",
      "product-price#product-details",
      "sku-selector",
      "flex-layout.row#buy-button",
      "shipping-simulator",
      "share#default"
    ]
  },
  "product-price#product-details": {
    "props": {
      "showInstallments": true,
      "showSavings": true
    }
  },
  "flex-layout.row#buy-button": {
    "props": {
      "marginTop": 4,
      "marginBottom": 7
    },
    "children": ["buy-button"]
  },
  "share#default": {
    "props": {
      "social": {
        "Facebook": true,
        "WhatsApp": true,
        "Twitter": false,
        "Pinterest": true
      }
    }
  }
}
```

Fazendo isso, teremos uma página de produto como a mostrada abaixo: 

![image](https://user-images.githubusercontent.com/18701182/90407144-84650180-e07c-11ea-9036-838d4d662ba1.png)

## Atividade

1. Vamos criar um _banner_ exclusivo para a geladeira Geladeira Retrô, para isso, use como primeiro filho da `store.product` um `conditional-layout.product`: 

```diff
//product.jsonc
{
  "store.product": {
    "children": [
+     "conditional-layout.product"
      ...
    ]
  }
  ...
}
```

2. Defina, então, o `conditional-layout.product`, com uma condição específica para a Geladeira Retrô: 

```diff
//product.jsonc
{
  ...
+ "condition-layout.product": {
+   "children": [
+    "condition.product#retro-refrigerator"
+   ]
+ }
}

```

3. Agora, precisamos definir a condição para a geladeira. 

O `condition.product` requer a *prop* `conditions` para definir em quais condições deve ser aplicada (veja a [documentação](https://developers.vtex.com/docs/vtex-condition-layout)), uma condição é dividida em três partes:

- **subject:** é o dado que vai ser usado para fins de comparação, no nosso caso usaremos `productId`, na documentação é possível ver todas as opções disponíveis;
- **verb:** é o método comparativo, usaremos o `is` para validar se o `productId` é de um produto específico, mas poderíamos usar: `is`, `is-not`, `contains` ou `does-not-contain`;
- **object:** é o valor com que queremos comparar, no nosso caso, usaremos o *productId* `3`. 

Sendo assim, o objeto formado é:

```diff
//product.jsonc
{
  ...
+  "condition.product#retro-refrigerator": {
+   "props": {
+     "conditions": [
+       {
+         "subject": "productId",
+         "verb": "is",
+         "object": "3"
+       },
+     ]
+   },
+   "children": ["image#retro-refrigerator-banner"]
+ }
}
```

**NOTA:** Se você estiver fazendo o curso na sua própria loja, identifique o `productId` do produto que deseja customizar e coloque o valor no campo `object`. Você descobrir o valor atualizando a página, abrindo o _console_ do seu navegador e digitando `__RUNTIME__.route.params.id`: 

![image](https://user-images.githubusercontent.com/18701182/90410392-aeb8be00-e080-11ea-8880-f5470c4e5d00.png)

4. Para finalizar, vamos definir o _banner_ retrô: 

```diff
//product.jsonc
{
  ...
+  "image#retro-refrigerator-banner": { 
+    "props": { 
+      "src": "https://appliancetheme.vtexassets.com/assets/app/src/retroimage___92a8271aac7c51d2059193bdbe019016.jpg",
+      "width": "100%",
+      "height": "200px",
+      "blockClass": "cover"
+    }
+  }
}
```

Visite a página do produto testado para ver o layout funcionando, se tiver usando a `appliancetheme` e o produto for a geladeira retro, a url será: 

`https://{{seuworkspace}}--appliancetheme.myvtex.com/retro-refrigerator/p`:

![image](https://user-images.githubusercontent.com/18701182/90411815-ad889080-e082-11ea-9a55-581d6cfcb764.png)

Para garantir que o layout condicional de fato funciona, visite qualquer outra página de produto, e verifique que o _banner_ não é aplicado: 

![image](https://user-images.githubusercontent.com/18701182/90412377-68b12980-e083-11ea-86a8-99495acfd997.png)

## Fim

Chegamos ao último passo do curso e nele aprendemos como criar layouts complexos se alavancando de blocos mais simples, não exploramos todos os layouts possíveis, mas a ideia de todos eles é muito parecida, para conhecer mais visite a seção de [`VTEX STORE FRAMEWORK - LAYOUT APPS`](https://developers.vtex.com/docs/vtex-condition-layout) no Developer Portal. 
