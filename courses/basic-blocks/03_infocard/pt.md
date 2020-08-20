# Info Card: *call to action* do Store Framework

## Introdução

Uma loja precisa de uma boa *página inicial* para envolver os usuários, aumentando o tempo da sessão e, portanto, as chances de conversão. Para tal, é necessário utilizar vários elementos, como banners promocionais, estantes com destaques, material sobre nós, etc.

Criamos o próximo bloco na *página inicial* usando uma *call to action*. No Store Framework, temos um bloco desenhado para esse fim, denominado [**Info Card**](https://developers.vtex.com/docs/vtex-store-components-infocard).

## Começando com o Info Card

![image](https://user-images.githubusercontent.com/18701182/68480411-7b085800-0213-11ea-9426-31dcb0d0aa7d.png)

Usando o Info Card, você pode criar imagens que possuem links e botões (parte superior ou lateral do bloco) que direcionam o fluxo do usuário (*Call to action*).

Olhando a [documentação](https://vtex.io/docs/app/vtex.store-components/info-card#blocks-api), podemos ver que:

- `isFullModeStyle` define se o *Call to Action (CTA)* é definido acima do banner;
- `textPosition` define a posição do texto;
- `textAlignment` define o alinhamento do texto;
- `imageUrl` define qual imagem será usada como banner;
- `headline` determina qual texto será usado como título;
- `callToActionMode` permite escolher o modo *CTA* como um link ou um botão;
- `callToActionText` define o texto *CTA*;
- `callToActionUrl` determina a URL para a qual ele redireciona;

Portanto, temos as seguintes props:

```json
  {
    "store.home": {
      "blocks": [
        "rich-text",
        "info-card"
      ]
    },
    "rich-text": {
      "props": {
        "text": "*Hello, World!*",
        "textPosition": "RIGHT"
      }
    },
    "info-card": {
      "props": {
      "isFullModeStyle": false,
      "textPosition": "right",
      "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
      "headline": "Vintage Pink",
      "subhead": "Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020.",
      "callToActionMode": "button",
      "callToActionText": "Explore",
      "callToActionUrl": "/sale/d",
      "textAlignment": "center"
      }
    }
  }
```

## Instâncias de Blocos

Você pode ter se perguntado:
> "E se eu quisesse ter dois info cards diferentes?"

É possível por meio de **instâncias de blocos**.

Todos os blocos têm nomes pré-estabelecidos, mas você pode criar instâncias de bloco e definir diferentes formas de exibição dos tipos de bloco. Após cada bloco ter sido definido, simplesmente coloque um '#' com um nome **arbitrário**, por exemplo:

```json
  {
    "store.home": {
      "blocks": [
        "rich-text",
        "info-card#button-right"
      ]
    },
    ...
    "info-card#button-right": {
      "props": {
        "isFullModeStyle": false,
        "textPosition": "right",
        "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
        "headline": "Vintage Pink",
        "subhead": "Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020.",
        "callToActionMode": "button",
        "callToActionText": "Explore",
        "callToActionUrl": "/sale/d",
        "textAlignment": "center"
      }
    }
  }
```

> **ATENÇÃO:** Ao longo do curso, você notará vários `...`, que você não deve copiar, pois representa o progresso alcançado durante as etapas anteriores.

## Atividade

1. No arquivo `home.jsonc`, com base no código acima, crie o `info-card # button-left` logo abaixo do infocard: `info-card # button-right`. Este novo info card deve implementar os seguintes adereços:

    - TO título deve ser `Shining chrome`
    - Uma frase de *call to action* do tipo link com o seguinte texto em vez de um botão: `Go to Collection` 
    - A seguinte imagem `https://appliancetheme.vteximg.com.br/arquivos/cozinha-cinza-min.png`
    - O seguinte subtítulo `Give your kitchen a cool style adding warm metallic finishes.<br>Available until December 2020.`
    - Texto à esquerda da imagem (`textPosition`).

    ```json
    ...
      "info-card#button-left": {
        "props": {
        "isFullModeStyle": false,
        "textPosition": "left",
        "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-cinza-min.png",
        "headline": "Shining chrome",
        "subhead": "Give your kitchen a cool style adding warm metallic finishes.<br>Available until January 2020.",
        "callToActionMode": "link",
        "callToActionText": "Go to collection",
        "textAlignment": "center"
        }
      }
    ...
    ```

O resultado esperado será semelhante a este:

![imagem](https://appliancetheme.vteximg.com.br/arquivos/info-card-activity.png)

:information_source: Lembre-se de acessar a documentação do [Info Card](https://vtex.io/docs/app/vtex.store-components/Info-Card) se você tiver alguma dúvida sobre a atividade.
