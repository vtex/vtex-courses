# Tornando seu conteúdo responsivo

## Introdução

A página inicial de um e-commerce é sempre o primeiro contato do cliente com a marca. Por isso, é comum que o lojista queira estabelecer uma **comunicação direta** com os seus usuários nesse momento estratégico da navegação.

No Store Framework, existem alguns componentes que atendem a esse cenário, como o [Info Card](https://developers.vtex.com/docs/guides/vtex-store-components-infocard) e o [Rich Text](https://developers.vtex.com/docs/guides/vtex-rich-text).

## Configurando o Rich Text

Assim como a sua funcionalidade, a configuração do Rich Text também é simples, podemos montar um exemplo de implementação do bloco usando texto escrito em markdown. Por exemplo:

```json
"rich-text": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},
```

Como falado anteriormente, o uso de Markdown permite flexibilidade ao componente. Mas, por outro lado, também pode fazer com que a sua renderização sofra alterações de acordo com o dispositivo usado pelo usuário.

Por exemplo: a frase acima ( `# Your Coffee, Your Way \n ### New Coffee Makers Collection` ) pode usar um _markdown_ adequado para _desktop_, mas não necessariamente para _mobile_ (cujo tamanho de tela é menor).

Para resolver esse cenário e tornar o componente mais adaptável a outros dispositivos, devemos usar o [**Responsive Layout**](https://developers.vtex.com/docs/guides/vtex-responsive-layout).

Primeiramente devemos declarar os blocos dentro do template `store.home`:

`"responsive-layout.desktop#desktop", "responsive-layout.mobile#mobile"`

Em seguida devemos declarar esses blocos da seguinte forma:

```json

...

"responsive-layout.desktop#desktop": {
  "children": ["rich-text#desktop"]
},

"responsive-layout.mobile#mobile": {
  "children": ["rich-text#mobile"]
},

"rich-text#desktop": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection (I'm on desktop)",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},

"rich-text#mobile": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection (I'm on mobile)",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
}
```

Ao interpretar o código acima, perceba como duas configurações de Rich Text são construídas a partir do uso de `responsive-layout.desktop#desktop` e `responsive-layout.mobile#mobile`.

## Atividade

Nessa atividade, vamos brincar um pouco com o markdown do [Rich Text](https://developers.vtex.com/docs/guides/vtex-rich-text) e aprender a usá-lo com o componente [Image](https://developers.vtex.com/docs/guides/vtex-store-components-image). Tudo isso usando o Responsive Layout, é claro!

### Desktop:

![image](https://user-images.githubusercontent.com/12139385/70152049-414c3500-168b-11ea-8da3-4f4ce0f5fee6.png)

### Mobile:

![image](https://user-images.githubusercontent.com/12139385/70152883-bf5d0b80-168c-11ea-81e0-25be5ed3d5ce.png)

1. Adicione o código proposto acima no arquivo `home.jsonc` e declare os blocos de `responsive-layout` no template `store.home`;
2. No `rich-text#mobile`, altere o markdown da primeira frase para `h3` e da segunda para `h4`;
   > Se você não se lembra da sintaxe de Markdown, é possível consultá-la em [**Markdown Documentation**](https://www.markdownguide.org/).
3. Adicione `image#desktop` como children de `responsive-layout.desktop#desktop`. Faça o mesmo com `image#mobile` em `responsive-layout.mobile#mobile`;
4. Declare os seguintes blocos de Image:

   ```json
   "image#desktop": {
     "props": {
       "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Desktop.jpg?q=1",
       "link": {
         "url": "/small-appliances/coffee-makers"
       } ,
       "alt": "Coffee Makers Collection"
     }
   },

   "image#mobile": {
     "props": {
       "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Mobile.jpg?q=1",
       "link": {
         "url": "/small-appliances/coffee-makers"
       } ,
       "alt": "Coffee Makers Collection"
     }
   },
   ```

5. Analisando as props do [componente Image](https://developers.vtex.com/docs/guides/vtex-store-components-image#configuration), defina a largura máxima das duas imagens como `100%`.

Note: Lembre-se de acessar a [documentação](https://developers.vtex.com/docs/guides/vtex-responsive-layout) do Responsive Layout caso tenha alguma dúvida durante a atividade.
