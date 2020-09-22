# Otimizando menus

O menu é um dos pontos críticos de performance em uma loja. Por estar presente em (quase) todas as páginas, quando mal otimizado, pode fazer com que qualquer página tenha problemas de performance independente do quão bem implementada ela esteja. Neste passo, vamos aprender como otimizar a sua implementação para, não só viabilizar a edição deste no Site Editor, como reduzir o overhead de blocos necessários em sua definição

## Props vs children

Em geral uma implementação de menu em uma loja segue o seguinte padrão: 

```json
{
  "vtex.menu@2.x:menu#category-menu": {
    "children": [
      "menu-item#category-electronics",
      "menu-item#category-major-appliances",
      "menu-item#category-small-appliances"
    ]
  },
  "menu-item#category-electronics": {
    "props": {
      "id": "menu-item-category-electronics",
      "type": "custom",
      "iconId": null,
      "highlight": false,
      "itemProps": {
        "categoryId": 153,
        "type": "internal",
        "href": "/electronics/",
        "noFollow": true,
        "tagTitle": "Electronics",
        "text": "Electronics"
      }
    }
  },
  ...
}
```

Existem dois problemas em implementar um menu desta forma: 

1. Por se usar o `children`, o menu passa a ter implementação parecida com a de um layout, o que faz com que todo o conteúdo dentro dele não seja facilmente editável no Site Editor

2. Para cada novo menu que for criado, é necessária a definição de um novo bloco, o que aumenta o overhead dos blocos que são necessários para compor uma página

## Atividade

1. Para melhorar, então, a performance do menu da nossa *Appliance Store*, vá até o arquivo `/store/blocks/header/category-menu.jsonc` e remova sua seção de `children`: 

```diff
{
  "vtex.menu@2.x:menu#category-menu": {
-   "children": [
-     "menu-item#category-electronics",
-     "menu-item#category-major-appliances",
-     "menu-item#category-small-appliances"
-   ]
  }
  ...
}
```

2. Adicione agora uma nova seção de props e um array de items: 

```diff
{
  "vtex.menu@2.x:menu#category-menu": {
+   "props": {
+     "items": []
+   }
  }
  ...
}
```

3. Para fechar, para cada um dos menu-items que tínhamos  ( `"menu-item#category-electronics"`; `"menu-item#category-major-appliances"`; `"menu-item#category-small-appliances"`), adicione suas `props` como itens do array que criamos: 

```diff
{
  "vtex.menu@2.x:menu#category-menu": {
    "props": {
      "items": [
+       {
+         "id": "menu-item-category-electronics",
+         "type": "custom",
+         "iconId": null,
+         "highlight": false,
+         "itemProps": {
+           "categoryId": 153,
+           "type": "internal",
+           "href": "/electronics/",
+           "noFollow": true,
+           "tagTitle": "Electronics",
+           "text": "Electronics"
+         }
+       }
+       ...
      ]
    }
```

O resultado esperado é um menu exatamente igual ao que tínhamos, mas que agora conseguimos controlar pelo Site Editor e adicionar novos itens. 

![image](https://user-images.githubusercontent.com/18701182/93832191-53638800-fc4b-11ea-9b51-b2ba59ebdb47.png)
