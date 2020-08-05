# CSS Handles e o poder da customização de blocos

## Introdução

Dando uma rápida olhada na sua loja atual, você conseguirá perceber que todos os componentes possuem estilos parecidos, mesmo que nenhuma customização tenha sido feita por você.

Todos eles, incluindo o [Info Card](https://developers.vtex.com/docs/vtex-store-components-infocard) recém configurado, compartilham **valores pré-estabelecidos** para fonte, cor de fundo, cor principal, formato dos botões, etc.

Isso se deve ao `style.json`, arquivo responsável por declarar valores genéricos de customização para toda loja do Store Framework.

![style](https://user-images.githubusercontent.com/52087100/69889933-60854400-12d2-11ea-8d11-97aef0f3bf83.png)

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

    ![image](https://user-images.githubusercontent.com/12139385/70145123-2626f880-167e-11ea-97f4-65aaacba74c3.png)

2. Em seguida, vamos adicionar um estilo específico para o infocard Vintage.  Para começar, adicione a prop `blockClass` no `info-card#button-right` como mostrado abaixo:

    ```diff
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
            "textAlignment": "center",
    +       "blockClass": "vintage"
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

    O resultado deve ser semelhante a imagem abaixo:

    ![image](https://user-images.githubusercontent.com/12139385/70145268-743bfc00-167e-11ea-9dca-070d444b16b5.png)

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

6. Mude a cor de fundo do botão durante o _hover_ para `white`:

    ```diff
    .infoCardCallActionContainer :global(.vtex-button):hover {
        color: gray;
    -   background-color: blue;
    +   background-color: white;
        border: transparent;
    }
    ```


7. Além do _block class_ `vintage`, que já foi declarado anteriormente, adicione um novo, chamado `metal` e defina sua cor de fundo como `#e1e1e1`.

    ```css
    /* /styles/css/vtex.store-components.css */
    .infoCardContainer--metal {
        background-color: #e1e1e1;
    }
    ```

8. Por fim, vamos utilizar o novo _block class_ criado no passo anterior no _info card_ `info-card#button-left`, exatamente da mesma maneira como foi feito no passo 2, com o _block class_ `vintage`

O resultado esperado é similar ao da imagem abaixo:

![image](https://user-images.githubusercontent.com/12139385/70145478-ead8f980-167e-11ea-8951-5d4b98e6d5c0.png)

> Certifique-se de testar também a ação de _hover_, de forma a validar se as cores para esta ação também estão corretas.