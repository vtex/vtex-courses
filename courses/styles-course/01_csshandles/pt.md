# CSS Handles e o poder da customização de blocos

## Introdução

Dando uma rápida olhada na sua loja atual, você conseguirá perceber que todos os componentes possuem estilos parecidos, mesmo que nenhuma customização tenha sido feita por você.

Todos eles compartilham **valores pré-estabelecidos** para fonte, cor de fundo, cor principal, formato dos botões, etc. Por exemplo, o [Info Card](https://developers.vtex.com/docs/vtex-store-components-infocard).

Isso se deve ao `style.json`, arquivo responsável por declarar valores genéricos de customização para toda loja do Store Framework.

![print_vscode](https://user-images.githubusercontent.com/19495917/90165970-e0274600-dd6f-11ea-908d-a9f50b1b90a1.png)

Para criar uma identidade própria para os componentes da sua loja, você pode sobrescrever esses valores por meio de **customizações de CSS**.

Analisando a [recipe](https://developers.vtex.com/docs/vtex-io-documentation-using-css-handles-for-store-customization) para customizações de loja por CSS, percebemos que alguns passos serão necessários para aplicar o estilo próprio desejado por você, como:

1. Criar um novo arquivo dentro da pasta `CSS` com o nome `vtex.{AppName}.css`
2. Usar o CSS Handle do componente que será customizado dentro deste arquivo seguindo o formato abaixo:

    ```css
    .{CSSHandle} {
        {PropriedadeDeCSS}: {ValorDesejado};
        {PropriedadeDeCSS}: {ValorDesejado};
    }
    ```

3. Na falta de CSS Handles, aplicar CSS Selectors permitidos, como é o caso do `:global(vtex-{componentName})`.
4. Para aplicar CSS em um bloco específico e não a todos os blocos daquele tipo, usa-se o recurso de blockClass, que aparece ao lado dos handles de css ao inspecionar seu código. As blockClass devem ser declaradas como uma prop no bloco em questão, e então referenciado no arquivo de estilo como mostrado abaixo:

    ```css
    .{CSSHandle}--{blockClass} {
        {PropriedadeDeCSS}: {ValorDesejado};
        {PropriedadeDeCSS}: {ValorDesejado};
    }
    ```

## Adicionando Info Cards ao _Minimum Boilerplate_

Antes de customizar um _info card_ é necessário adicioná-lo ao tema, dado que o _boilerplate_ é muito simples. Com isso em mente, vá ao arquivo `home.jsonc` e adicione dois info cards aos seus blocos:

```diff
{
  "store.home": { 
    "blocks": [
      "rich-text",
+     "info-card#clearance",
+     "info-card#vintage"
    ]
  },
  "rich-text": { 
    "props": { 
      "text": "VTEX Store Framework",
      "textAlignment": "CENTER",
      "textPosition": "CENTER",
      "font": "t-heading-1"
    }
  }
}
```

Agora, no mesmo arquivo, vamos definir os blocos logo abaixo da definição de `rich-text``. Você pode utilizar o código abaixo para inserir no arquivo:

```json
"info-card#clearance": {
    "props": {
      "id": "info-card-clearance",
      "isFullModeStyle": false,
      "textPosition": "left",
      "imageUrl": "https://storecomponents.vteximg.com.br/arquivos/banner-infocard2.png",
      "headline": "Clearance Sale",
      "callToActionText": "DISCOVER",
      "callToActionUrl": "/sale/d",
      "textAlignment": "center"
    }
  },
"info-card#vintage": {
    "props": {
        "id": "info-card-vintage",
        "isFullModeStyle": false,
        "textPosition": "right",
        "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
        "headline": "Vintage",
        "callToActionText": "DISCOVER",
        "callToActionUrl": "/sale/d",
        "textAlignment": "center",
        "blockClass": "vintage"
    }
}
```


## Customizando o Info Card

Para descobrir os CSS Handles de um componente, como o Info Card, basta acessar a [seção **Customization**]((https://developers.vtex.com/docs/vtex-store-components-infocard#customization)) da sua documentação.

De acordo com a descrição dos CSS Handles e com a recipe customizações de loja por CSS, conseguimos implementar um exemplo de Info Card customizado.

1. No arquivo `vtex.store-components.css` dentro de `/styles/css`, vamos alterar seu título e as configurações do botão _call to action_, adicionando o código a seguir:

    ```css
    /* /styles/css/vtex.store-components.css */
    .infoCardHeadline {
        font-family: serif;
        font-size: 2.25rem;
        font-weight: normal;
        color: gray;
        border: 2px solid black;
        padding: 24px;
    }

    .infoCardCallActionContainer :global(.vtex-button) {
        color: white;
        background-color: gray;
        border: transparent;
    }

    .infoCardCallActionContainer :global(.vtex-button):hover {
        color: gray;
        background-color: blue;
        border: transparent;
    }
    ```

    > Você pode conferir o efeito das mudanças feitas por você executando o comando `vtex link`.

    ![image](https://user-images.githubusercontent.com/19495917/90165063-82dec500-dd6e-11ea-8b0d-802fa5afc17f.png)

2. Em seguida, vamos adicionar um estilo específico para o infocard Vintage.  Para isso, precisamos adicionar a propriedade `blockClass`ao info card, como mostrado a seguir:

    ```diff
    "info-card#vintage": {
        "props": {
        "id": "info-card-vintage",
        "isFullModeStyle": false,
        "textPosition": "right",
        "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
        "headline": "Vintage",
        "callToActionText": "DISCOVER",
        "callToActionUrl": "/sale/d",
        "textAlignment": "center",
    +   "blockClass": "vintage"
        }
    }
    ```

3. E então declare uma `background-color` para este infocard específico no seu arquivo de css:

    ```css
    /* /styles/css/vtex.store-components.css */
    .infoCardContainer--vintage {
    background-color: #edcfd1
    }
    ```

    ![image](https://user-images.githubusercontent.com/19495917/90165339-e4069880-dd6e-11ea-89bf-80e63a25ffb4.png)

4. Agora, vamos finalizar adicionando mais estilos customizados para o nosso Info Card. No mesmo arquivo CSS que foi utilizado anterioemente, defina a largura máxima (`max-width`) de de todos os infocards para `1260px`, a margin para `0 auto` e o padding para `0`.

    > Você pode se basear nos _Handles_ do [Info Card](https://developers.vtex.com/docs/vtex-store-components-infocard#customization).

    ```css
    /* /styles/css/vtex.store-components.css */
    .infoCardContainer {
        max-width: 1260px;
        margin: 0 auto;
        padding: 0;
    }
    ```

    Fazendo isso, o resultado esperado é:

    ![image](https://user-images.githubusercontent.com/19495917/90165563-38aa1380-dd6f-11ea-9343-843ccc83d2f7.png)


5. Mude a cor do título do componente para `black` e em negrito:

    ```diff
    .infoCardHeadline {
        font-family: serif;
        font-size: 2.25rem;
    -   font-weight: normal;
    -   color: gray;
    +   font-weight: bold;
    +   color: black;
        border: 2px solid black;
        padding: 24px;
    }
    ```

    Terminado este passo, você teve ter algo similar a:

    ![image](https://user-images.githubusercontent.com/19495917/90165764-8d4d8e80-dd6f-11ea-92f6-cadce9318dff.png)

6. Mude a cor de fundo do botão durante o _hover_ para `white`:

    ```diff
    .infoCardCallActionContainer :global(.vtex-button):hover {
        color: gray;
    -   background-color: blue;
    +   background-color: white;
        border: transparent;
    }
    ```

> Certifique-se de testar também a ação de _hover_, de forma a validar se as cores para esta ação também estão corretas.