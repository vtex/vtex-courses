# Imagens

As imagens são parte essencial de uma loja. É imprescindível ter fotos de muito boa qualidade e que estejam com excelente resolução, para garantir que a experiência do produto esteja sendo passada da melhor maneira possível.

Buscar qualidade ótima, no entanto, não deve ser sinônimo de desperdiçar banda. Não é necessário, por exemplo, carregar uma imagem de `8000px` de largura, sendo que na loja ela vai ser renderizada em uma tela de `600px` de largura. O que acontece, nesses casos, é que a imagem, depois de baixada, é redimensionada pelo navegador e a resolução extra é, então, perdida.

## Pontos de otimização

No Store Framework, existem basicamente dois pontos em que as imagens podem ser otimizadas:

- `product-image`: é a imagem de produto que é mostrada em sua página (pdp);
- `product-summary-image` é a imagem de produto que é exibida em prateleiras e resultados de busca;
- `image`: são imagens comuns, usadas para banners, carrosséis e _infocards_

Se estiver responsável por cuidar do cadastramento de imagens de uma loja, tenha certeza de comprimi-las antes. Isto pode garantir uma redução de até 85% do seu peso, sem que seja necessário também perder qualidade. Uma boa alternativa de ferramenta para facilitar este trabalho é usar o [Squoosh](https://squoosh.app/).

## Atividade

1. Na página principal, inspecione algum dos produtos da prateleira de _New arrivals_ clicando com o botão direito em cima e em seguida em `Inspecionar`. É possível observar no código que aparece, que existe um desperdício de resolução, está sendo solicitado `500px` como valor padrão, sendo que apenas `281px` estão sendo utilizados:

   ![image](https://user-images.githubusercontent.com/18701182/93837727-ad6d4900-fc5d-11ea-818c-1f4942f091cf.png)

2. No arquivo `/store/blocks.jsonc`, defina então o `product-image`, especificando o seu `width`:

   ```diff
   // /store/blocks.jsonc
   {
     ...
     "stack-layout#prodsum": {
       "children": [
         "product-summary-image",
         "product-summary-specification-badges"
       ]
     },
   + "product-summary-image": {
   +   "props": {
   +     "width": 281
   +   }
   + },
     ...
   }
   ```

   Inspecionando novamente, vemos que todas as imagens de prateleira e resultado de busca estão com o tamanho correto:

   <img src="https://user-images.githubusercontent.com/18701182/93838221-481a5780-fc5f-11ea-8d6f-139fac6a2592.png" height=400px></img>

3) Para melhorar o _caching_ de CDN e garantir que nenhuma imagem externa está sendo carregada, no arquivo `store/blocks/search.jsonc`, edite o `info-card` existente para atualizar sua implementação e fazê-lo usando um `image`:

   ```diff
   // /store/blocks/search.jsonc
   {
     "flex-layout.row#depBanner": {
       "children": [
   -     "info-card#depbanner"
   +     "image#depbanner"
       ]
     },
   }
   ```

   > Para saber um pouco mais sobre a definição de _Content Delivery Network_ (CDN), veja [esse artigo](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) da Cloudflare.

4) Defina, por último, o `image#depbanner`:

   ```diff
   {
     ...
   + "image#depbanner": {
   +    "props": {
   +      "src": "assets/electronics.png"
   +    }
   + },
   }
   ```

![image](https://user-images.githubusercontent.com/18701182/93905955-f52db800-fcd1-11ea-9129-065bea80145b.png)

5. Usamos o exemplo `electronics.png` que já estava disponível no repositório, mas qualquer imagem pode ser adicionada se inserida dentro da pasta `/assets`. Experimente acessar algum portal de stock photo gratuito (como o [Pexels](https://www.pexels.com/)), baixar uma imagem e comprimí-la no [Squoosh](https://squoosh.app/). Baixe a imagem, adicione-a a pasta de `/assets` e depois referencie com o nome que voce adicionou:

```diff
{
  ...
  "image#depbanner": {
    "props": {
-     "src": "assets/electronics.png"
+     "src": "assets/{{sua_imagem}}"
    }
  },
}
```

![image](https://user-images.githubusercontent.com/18701182/93907719-168fa380-fcd4-11ea-8b03-6d864d4aeadd.png)

> Exemplo de redução de 60% na compressão com Squoosh
