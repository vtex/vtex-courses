# Layout de abas

## Introdução

O [Tab Layout](https://vtex.io/docs/components/layout/vtex.tab-layout) é um paradigma de estruturação de layouts criado no Store Framework para permitir a construção de layouts com abas ou guias.

Neste paradigma, temos dois containers: o `tab-list` e o `tab-content`. Em cada um destes containers, temos os itens que os compõem. Dentro do `tab-list`, temos os `tab-list.item`. Já no `tab-content`, temos os `tab-content.item`.

Abaixo, veremos um exemplo de implementação de um tab layout.

Primeiro, é necessário declarar o block `tab-layout` no template desejado:

```json
{
  "store.home": {
    "blocks": [
      ...
      "tab-layout"
    ]
  }
}

```

Depois, é necessário declarar um `tab-list` e um `tab-content` como children do `tab-layout`:

```json
...
"tab-layout": {
  "children": [
    "tab-list",
    "tab-content"
  ]
}
```


Com isso, temos esses dois containers como componentes do nosso `tab-layout`. O próximo passo é declarar os `tab-list.item` e `tab-content.item` como children do `tab-list` e do `tab-content`, respectivamente:

```json
...
"tab-list": {
  "children": [
    "tab-list.item#1",
    "tab-list.item#2"
    ]
}
```

```json
...
"tab-content": {
  "children": [
    "tab-content.item#1",
    "tab-content.item#2"
    ]
}
```

Na próxima etapa, temos que declarar as propriedades dos `tab-list.item`. O código abaixo gera uma interface de tabs como a desta imagem:

![image](https://user-images.githubusercontent.com/18701182/90059099-076f0c00-dcb9-11ea-918d-664761c34f3a.png)


A propriedade `tabId` é muito importante, pois ela é a chave que conecta o botão de um `tab-list.item` com um `tab-content.item`.

```json
...
"tab-list.item#1": {
  "props": {
    "tabId": "majorAppliances",
    "label": "Major Appliances",
    "defaultActiveTab": true
  }
},
"tab-list.item#2": {
  "props": {
    "tabId": "electronics",
    "label": "Electronics"
  }
}
```

A seguir, vamos declarar as children e as props dos `tab-content.item`.

No array de children, é possível incluir diversos blocks como `rich-text`, `info-card`, `image`, `flex-layout` e etc.

Na prop `tabId`, é necessário incluir os mesmos ids declarados nos `tab-list.item` para que o link entre a aba e o conteúdo funcione.

```json
...
"tab-content.item#1": {
  "children": [
    "rich-text#1"
  ],
  "props": {
    "tabId": "majorAppliances"
  }
},
"tab-content.item#2": {
  "children": [
    "rich-text#2"
  ],
  "props": {
    "tabId": "electronics"
  }
}
```

Por fim, você deve declarar as propriedades do seu conteúdo. No nosso exemplo, colocamos apenas um `rich-text` em cada `tab-content.item`:

```json
"rich-text#1": {
  "props": {
    "text": "Texto para Major Appliances",
    "textPosition": "CENTER",
    "font": "t-heading-3"
  }
},
"rich-text#2": {
  "props": {
    "text": "Texto para Electronics",
    "textPosition": "CENTER",
    "font": "t-heading-3"
  }
}
```

## Atividade

Nesta atividade, vamos criar a estrutura simples de um tab layout, conforme imagem abaixo. Mais tarde, vamos incluir algum conteúdo para estilizar nossa página customizada.

![](https://appliancetheme.vteximg.com.br/arquivos/tarefa-tab-layout.png)

1. No arquivo `about-us.jsonc` criado anteriormente, adicione um `tab-layout#home` ao template `store.custom#about-us`;
2. Declare o bloco `tab-layout#home` e adicione como seus children um `tab-list#home` e um `tab-content#home`;
3. Declare um `tab-list#home` e adicione como seus children um `tab-list.item#home1` e um `tab-list.item#home2`;
4. Declare as props do `tab-list.item#home1` de maneira que a interface exiba o texto "Major Appliances". (Dica: não se esqueça que incluir nas props um `tabId` = `"majorAppliances"` e a propriedade `defaultActiveTab` = `true`);
5. Declare as props do `tab-list.item#home2` de maneira que a interface exiba o texto "Electronics". (Dica: não se esqueça que incluir nas props um `tabId` = `"electronics"`);
6. Agora, vamos para a parte o conteúdo. Declare um `tab-content#home` no seu tema e adicione os children `tab-content.item#home1` e `tab-content.item#home2`;
7. Em cada `tab-content.item`, declare apenas um `rich-text` como children (por exemplo, `rich-text#home1` e `rich-text#home2`);
8. Depois, inclua uma prop `tabId` em cada `tab-content.item` de maneira que aconteça o link entre o `tab-list` criado anteriormente e `tab-content`;
9. Por fim, adicione os `rich-text` e declare suas props conforme o código abaixo:
  
    ```json
    "rich-text#home1": {
      "props": {
        "text": "Área do conteúdo da tab-list.item com  tabId = majorAppliances",
        "textPosition": "CENTER",
        "font": "t-heading-3"
      }
    },
    "rich-text#home2": {
      "props": {
        "text": "Área do conteúdo da tab-list.item com  tabId = electronics",
        "textPosition": "CENTER",
        "font": "t-heading-3"
      }
    }
    ```
  
:information_source: Lembre-se de acessar a documentação [Tab Layout](https://vtex.io/docs/components/layout/vtex.tab-layout) e do [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/) caso tenha alguma dúvida durante a atividade.