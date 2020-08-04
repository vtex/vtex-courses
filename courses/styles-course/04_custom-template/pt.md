# Criando templates customizados

## Introdução

Until now, you've learned how to use CSS, Tachyons, and Markdown in order to customize your blocks on Store Framework. However, it's also important to learn how to create custom templates, so your store can habe custom landing pages, for example, with a well-defined URL and specific content to display.

Até agora, você aprendeu como utilizar CSS, _Tachyons_ e Markdown para customizar seus blocos no Store Framework. Porém, também é importante aprende como criar _templates_ customizados, de forma que a sua loja possa ter _landing pages_ customizadas, com uma URL bem definida e conteúdos específicos.

Lojas são compostas por várias páginas diferentes, cada uma com layout e conteúdo específicos. Ao criar uma loja do zero no VTEX IO, algumas páginas padrão com URLs predefinidas já são disponibilizadas para você. Abaixo, vemos uma lista com algumas dessas páginas padrão:

- `store.home` (Home page)
- `store.product` (Product page)
- `store.search` (Search Results page)
- `store.account` (Client Account page)
- `store.login` (Login page)
- `store.orderplaced` (Order Placed page)

Neste passo, você aprenderá como criar _templates_ customizados do zero.

## Criando uma Landing Page

São necessários poucos passos para se criar uma landing page customizada:

1. Criar um novo template no tema sua loja
2. Criar o novo path para acessar este template

### Template

Um template define o layout da página. Portanto, se você deseja criar uma página personalizada, também precisará criar um novo template no seu tema.

Vamos supor que você queira criar uma página simples com informações sobre a sua loja. Dentro da pasta `blocks`, você pode criar um arquivo que contenha o seguinte código, declarando um novo template para uma página customizada,

```json
{
 "store.custom#{templatename}": {
     "blocks": [
     ]
  }
}
```

onde `{templateName}` deve ser substituído pelo nome identificador do template.

A seguir, você deve preencher o código com os componentes necessários para montar o layout. Abaixo, vemos um exemplo dessa implementação:

```json
{
 "store.custom#{templatename}": {
   "blocks": [
     "flex-layout.row#about-us"
   ]
 },
 "flex-layout.row#about-us": {
   "children": [
     "image#about-us",
     "flex-layout.col#text-about-us"
   ]
 },
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
     "text":
     "# Sobre a FlatFlat"
   }
 },
 "rich-text#about-content": {
   "props": {
     "text":
     " FlatFlat é uma loja de eletro eletrônicos com muita tradição na fabricação de itens modernos e vintage. Nosso objetivo é criar eletrodomésticos que tornem as casas dos nossos clientes interessantes, independente do estilo. Com apenas 2 meses de história, já somos a loja com os produtos mais bonitos de toda a VTEX. Estamos construindo o nosso site nesse momento com o intuito de dar ao nosso cliente uma experiência memorável com a nossa marca!"
   }
 },
 "image#about-us": {
   "props": {
     "src": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-about-us.png",
     "maxHeight": "600px"
   }
 }
}
```

### Path

Agora que um novo template com o layout da página foi definido no código do tema da loja, a próxima etapa é definir o caminho (path) da página que acessará este layout.

Devemos criar um arquivo `routes.json` dentro da pasta `store` do seu tema. Após isto, insira o código abaixo,

```json
{
  "store.custom#about-us": {
    "path": "/{URL}"
  }
}
```

onde `{URL}` é o nome do caminho desejado

## Atividade

Vamos criar uma página com informações sobre a sua loja conforme o exemplo abaixo:

![](https://appliancetheme.vteximg.com.br/arquivos/about-us-activity.png)

1. Na pasta `blocks`, crie um arquivo `about-us.jsonc`;
2. Declare um template `store.custom#about-us` neste arquivo;
3. Inclua um block "flex-layout.row#about-us" neste template;
4. Após declarar o `flex-layout.row`, utilize o código do exemplo dado acima para completar o layout da página;
5. Na pasta `store`, crie um arquivo `routes.json`;
6. Neste arquivo, declare um path `/about-us`;
7. Com o código linkado, acesse `{workspace}--appliancetheme.myvtex.com/about-us` para ver sua nova landing page.