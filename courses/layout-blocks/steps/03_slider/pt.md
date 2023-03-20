# Carrossel de blocos

## Introdução

O Slider Layout, como o Flex Layout, é uma forma flexível de criar um novo bloco a partir de outros blocos usando `children`. Ele permite que sejam criados _sliders_ de outros blocos, como `info-card`s e até mesmo `flex-layout`s por exemplo.

Com o Slider Layout é possível criar um carrossel não só de imagens, como de qualquer conteúdo que se queira. Para este exemplo, vamos utilizar o Slider Layout para tornar um conjunto de info-cards em um slider.

## Slider Layout

Analisando a [documentação](https://developers.vtex.com/docs/guides/vtex-slider-layout), vemos que você pode utilizar qualquer _array_ de blocos como `children`, assim como no Flex Layout.

Abaixo, segue um exemplo de implementação de um slider-layout com dois `info-card`:

```json

  "slider-layout#home": {
    "children": ["info-card#1", "info-card#2"],
    "props": {
      "autoplay": {
        "timeout": 5000,
        "stopOnHover": false
      }
    }
  },

  "info-card#1": {
    "props": {
      "imageUrl": "https://images.unsplash.com/photo-1524185962737-ea7c028a12cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "isFullModeStyle": true,
      "headline": "Black Friday",
      "callToActionText": "Subscribe",
      "textPosition": "center"
    }
  },

  "info-card#2": {
    "props": {
      "imageUrl": "https://images.unsplash.com/photo-1524185962737-ea7c028a12cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "isFullModeStyle": true,
      "headline": "Black Friday",
      "callToActionText": "Subscribe",
      "textPosition": "center"
    }
  }

```

## Atividade

Nesta atividade, vamos criar um _slider_ de marcas para o nosso site:

![](https://appliancetheme.vteximg.com.br/arquivos/brand-slider.png)

1. No arquivo `home.jsonc`, declare o bloco `slider-layout#home` ao template `store.home`.

2. Crie um arquivo chamado `slider-layout.jsonc` dentro da pasta `/store/blocks`;

3. Neste arquivo, baseando-se no código acima, substitua os `info-card` declarados como children de `slider-layout#home` e adicione 6 [componentes de imagem](https://developers.vtex.com/vtex-developer-docs/docs/vtex-store-components-image) `image` como children. Utilize o formato `image#brand1`, `image#brand2` (...) `image#brand6` para declarar os componentes;

4. Declare uma prop `src` específica para cada `image#brand` definido. Utilize as URLs abaixo para cada uma delas:

   1. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square1.png`
   2. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square2.png`
   3. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square3.png`
   4. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square4.png`
   5. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square5.png`
   6. `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square6.png`

5. Por fim, você deve utilizar a propriedade de `autoplay` no bloco `slider-layout#home`. Faça com que o _slide_ aconteça automaticamente a cada **7 segundos e que ele pare quando o usuário passar o mouse em cima do _slide_**.

Note: Lembre-se de acessar a documentação do [Slider Layout](https://developers.vtex.com/docs/guides/vtex-slider-layout) e [Image](https://developers.vtex.com/docs/guides/vtex-store-components-image) caso tenha alguma dúvida durante a atividade.
