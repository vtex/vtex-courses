# Criando templates customizados

## Introdução

Até agora, você aprendeu como utilizar CSS, _Tachyons_ e _Markdown_ para customizar seus blocos no Store Framework. Porém, também é importante aprende como criar _templates_ customizados, de forma que a sua loja possa ter _landing pages_ customizadas, com uma URL bem definida e conteúdos específicos.

Lojas são compostas por várias páginas diferentes, cada uma com _layout_ e conteúdo específicos. Ao criar uma loja do zero no VTEX IO, algumas páginas padrão com URLs predefinidas já são disponibilizadas para você. Abaixo, vemos uma lista com algumas dessas páginas padrão:

- `store.home` (Home page)
- `store.product` (Product page)
- `store.search` (Search Results page)
- `store.account` (Client Account page)
- `store.login` (Login page)
- `store.orderplaced` (Order Placed page)

Neste passo, você aprenderá como criar _templates_ customizados do zero.

## Criando uma Landing Page

São necessários poucos passos para se criar uma _landing page_ customizada:

1. Criar um novo _template_ no tema sua loja
2. Criar o novo caminho (_path_) para acessar este _template_

### Template

Um _template_ define o _layout_ da página. Portanto, se você deseja criar uma página personalizada, também precisará criar um novo _template_ no seu tema.

Vamos supor que você queira criar uma página simples com informações sobre a sua loja. Dentro da pasta `blocks`, você pode criar um arquivo que contenha o seguinte código, declarando um novo _template_ para uma página customizada,

```json
{
  "store.custom#{templatename}": {
    "blocks": [
    ]
  }
}
```

onde `{templateName}` deve ser substituído pelo nome identificador do _template_.

A seguir, você deve preencher o código com os componentes necessários para montar o _layout_, que será mostrado em mais detalhes na atividade.

### Path

Agora que um novo _template_ com o _layout_ da página foi definido no código do tema da loja, a próxima etapa é definir o caminho (path) da página que acessará este _layout_.

Devemos criar um arquivo `routes.json` dentro da pasta `store` do seu tema. Após isto, insira o código abaixo,

```json
{
  "store.custom#about-us": {
    "path": "/{URL}"
  }
}
```

onde `{URL}` é o nome do caminho desejado

## Criando um _template_ customizado

Vamos criar uma página com informações sobre a sua loja conforme o exemplo abaixo:

![image](https://user-images.githubusercontent.com/19495917/90177742-5aac9180-dd81-11ea-9566-be74d563664f.png)

1. Na pasta `blocks`, crie um arquivo `about-us.jsonc`;
2. Declare um template `store.custom#about-us` neste arquivo;
3. Inclua um block "flex-layout.row#about-us" neste _template_:

    ```json
    {
        "store.custom#about-us": {
          "blocks": [
            "flex-layout.row#about-us"
          ]
        }
    }
    ```
4. No mesmo arquivo, adicione o código abaixo, logo depois da declaração de `store.custom#about-us`. Ele é responsável por definir `flex-layout.row#about-us`.

    ```json
      "flex-layout.row#about-us": {
        "children": [
          "image#about-us",
          "flex-layout.col#text-about-us"
        ]
      },
    ```



5. Agora, vamos definir seus blocos filhos para montar o _layout_:

    ```json
      "flex-layout.col#text-about-us": {
        "children": [
          "rich-text#about-title",
          "rich-text#about-content"
        ],
        "props": {
          "preventVerticalStretch": true
        }
      },
      "rich-text#about-title": {
        "props": {
            "text": "# About Minimum Theme"
        }
      },
      "rich-text#about-content": {
        "props": {
          "text":
            " This is the VTEX Minimum Theme, you can use it to test blocks usage and build your first store from scratch."
        }
      },
      "image#about-us": {
        "props": {
          "src": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-about-us.png",
          "maxHeight": "600px"
        }
      }
    ```

6. Na pasta `store`, crie um arquivo chamado `routes.json`;

6. Neste arquivo, declare um _path_ `/about-us`:

    ```json
    {
      "store.custom#about-us": {
        "path": "/about-us"
      }
    }
    ```

7. Com o código linkado, acesse `{workspace}--appliancetheme.myvtex.com/about-us` para ver sua nova _landing page_.
