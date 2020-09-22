# Imagens

As imagens são parte essencial de uma loja. É imprescindível ter fotos de muito boa qualidade e que estejam com excelente resolução, para garantir que a experiência do produto esteja sendo passada da melhor maneira possível. 

Buscar qualidade ótima, no entanto, não deve ser sinônimo de desperdiçar banda. Não é necessário, por exemplo, carregar uma imagem de `8000px` de largura, sendo que na loja ela vai ser renderizada em uma tela de `600px` de largura. O que acontece, nesses casos, é que a imagem, depois de baixada, é redimensionada pelo navegador e a resolução extra é, então, perdida. 

## Pontos de otimização

No Store Framework, existem basicamente dois pontos em que as imagens podem ser otimizadas: 

- `product-image`: é a imagem de produto que é mostrada em sua página (pdp);
- `product-summary-image` é a imagem de produto que é exibida em prateleiras e resultados de busca;
- `image`: são imagens comuns, usadas para banners, carrosséis e *infocards*

## Atividade

1. Na página principal, inspecione algum dos produtos da prateleira de *New arrivals* clicando com o botão direito em cima e em seguida em `Inspecionar`. É possível observar no código que aparece, que existe um desperdício de resolução, está sendo solicitado 500px por default, sendo que apenas 281px estão sendo utilizados: 

![image](https://user-images.githubusercontent.com/18701182/93837727-ad6d4900-fc5d-11ea-818c-1f4942f091cf.png)

2. No arquivo `/store/blocks/default.jsonc`, defina então o `product-image`, especificando o seu `width`: 

```diff
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

![image](https://user-images.githubusercontent.com/18701182/93838221-481a5780-fc5f-11ea-8d6f-139fac6a2592.png)


3. Para melhorar o caching de CDN e garantir que nenhuma imagem externa está sendo carregada, no arquivo `store/blocks/search.jsonc`, edite o info-card existente para atualizar sua implementação e fazê-lo usando um `image`: 

```diff
{
  "flex-layout.row#depBanner": {
    "children": [
-     "info-card#depbanner" 
+     "image#depbanner"
    ]
  },
}  
```

4. Defina, por último o image#depbanner: 

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

Usamos o exemplo `electronics.png` que já estava disponível no repositório, mas qualquer imagem pode ser adicionada se inserida dentro da pasta `/assets`.
