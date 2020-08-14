# Flex Layout: crie layouts utilizando o poder do Flexbox

## Introdução

O [Flex Layout](https://vtex.io/docs/components/layout/vtex.flex-layout) é um paradigma de estruturação de layout criado no Store Framework para permitir a construção de layouts complexos. Esse paradigma usa o conceito de **linhas** e **colunas** para definir a estrutura e o posicionamento desejados dos blocos em uma determinada página.

Existem dois blocos de construção básicos de cada Flex Layout:

- `flex-layout.row`
- `flex-layout.col`

Se você já está familiarizado com o Flexbox utilizado no CSS, o Flex Layout deve ser simples de entender, já que o Flexbox está sendo utilizar "por debaixo dos panos" pelo flex-layout.row e flex-layout.col.

## Flex Layout

Com o Flex Layout é possível criar layouts personalizados, utilizando a estrutura de linhas e colunas do Flexbox.

Analisando a documentação do bloco, vemos que você pode utilizar qualquer *array* de blocos como `children` do Flex Layout. Além disso, você deve sempre usar `flex-layout.row` e `flex-layout.col`, **NUNCA** `flex-layout` de forma isolada.

Abaixo, temos um exemplo de flex layout composto de um `flex-layout.row` com dois *children*: um `info-card` e um `rich-text`:

```json
  "flex-layout.row":{
    "children": [
      "info-card#rethink",
      "rich-text#deletar"
    ]
  },
  
 "info-card#rethink": {
    "props": {
      "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/utensilios-cozinha-min.png",
      "isFullModeStyle": true,
      "headline": "Time to rethink your kitchen",
      "callToActionText": "Discover",
      "textPosition": "center"
    }
  },
  
  "rich-text#deletar": {
    "props": {
      "text": "I'll be deleted soon"
    }
  }
```

## Atividade

1. Declare o `flex-layout.row` dentro dos `blocks` do template de `store.home` e declare os blocos propostos acima no seu arquivo `home.jsonc`
2. Altere as *children* do `flex-layout.row`, substituindo o bloco `rich-text` por uma coluna `flex-layout.col`.
3. Delete o bloco de `rich-text` proposto acima mo seu tema.
4. Declare o bloco `flex-layout.col` no seu arquivo `home.jsonc` com dois componentes de imagem como children: `image#electronics` e `image#major-appliance`, *nesta ordem*.
5. Defina os blocos `image` com as seguintes props:

    ```json
    ...
    "image#electronics": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/electronics_banner___25d69b49f8224b369375e68513b4d593.png",
        "maxWidth": "100%"
      }
    },
    "image#major-appliance": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/major_appliance_banner___bb10093866a127345ddfbcca3efa5022.png",
        "maxWidth": "100%"
      }
    }
    ```

O resultado obtido deve ser semelhante a este:

![image](https://user-images.githubusercontent.com/12139385/70185681-0c5ed300-16c9-11ea-9260-b88179b508f2.png)

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/components/layout/vtex.flex-layout) do Flex Layout caso tenha alguma dúvida durante a atividade.
