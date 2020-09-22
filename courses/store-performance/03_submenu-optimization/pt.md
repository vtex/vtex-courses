# Otimização de submenus

No passo anterior aprendemos como otimizar itens de menu, tornando-os propriedades do menu ao invés de blocos filhos. Alguns menus, no entanto, possuem outros submenus, como o da [Store Theme](storetheme.vtex.com):

![image](https://user-images.githubusercontent.com/18701182/93831521-5d848700-fc49-11ea-9773-c2d727013f95.png)

Estes se comportam como um _layout_, então não há otimizações que possam ser feitas além de usar o comportamento de `children`. Para esses casos, o ideal é ir para uma solução híbrida, em que os menus pais são usados com `children` e os menus *folha* (últimos na árvore de menus) podem ser usados como `props`. 

Todavia, como o usuário não vai ver o conteúdo dos submenus quando a página é carregada, podemos postergar o carregamento do seu conteúdo. 

## Atividade

1. Para entender como podemos otimizar submenus, vamos modificar um pouco nosso exemplo para ficar mais parecido com o que temos na Store Theme, comece editando o nome do bloco que trabalhamos no passo anterior (`"vtex.menu@2.x:menu#category-menu"`) para `"vtex.menu@2.x:menu#categories"`:

/store/blocks/header/category-menu.jsonc
```diff
{
  ...
- "vtex.menu@2.x:menu#category-menu": {
+ "vtex.menu@2.x:menu#categories": {  
  ...
}
```

2. Defina um `menu` e um `sub-menu` agora no lugar do antigo `#category-menu`, nele colocaremos todo o menu que já tínhamos construído: 

```diff
{
+ "vtex.menu@2.x:menu#category-menu": {
+   "children": [
+     "menu-item#categories"
+   ]
+ },
+ "menu-item#categories": {
+   "props": {
+     "id": "menu-item-custom-categories",
+     "type": "custom",
+     "iconId": null,
+     "highlight": false,
+     "itemProps": {
+       "type": "internal",
+       "href": "#",
+       "noFollow": true,
+       "tagTitle": "Categories",
+       "text": "Categories"
+     }
+   },
+   "blocks": [ "vtex.menu@2.x:submenu#categories" ]
+ },
+ "vtex.menu@2.x:submenu#categories": {
+   "children": ["vtex.menu@2.x:menu#categories"]
+ },
  "vtex.menu@2.x:menu#categories": {  
  ...
}
```

O que estamos fazendo aqui é criar um nível acima do menu que já tínhamos definido para então modificar a navegação para um formato de submenu, o resultado deve ser: 

![image](https://user-images.githubusercontent.com/18701182/93835843-fa015600-fc56-11ea-9b0e-b30a281b2d2b.png)

3. No navegador, antes da URL do seu _workspace_ adicione um `view-source:` e procure por `title="Major Appliances"`, você verá duas referências no código, uma para o _header_ e outra para o _footer_. Isto significa que quando carregamos o HTML estamos trazendo juntos esses menus, ainda que não estejam sendo consumidos no primeiro momento:

![image](https://user-images.githubusercontent.com/18701182/93836918-a7299d80-fc5a-11ea-8804-0b2722742e17.png)

4. Com o menu em níveis agora definido, podemos adicionar uma nova prop ao menu pai, a fim de prevenir que os submenus sejam carregados até que o usuário interaja com as categorias: 

```diff
{
  "vtex.menu@2.x:menu#category-menu": {
+   "props": { 
+     "experimentalOptimizeRendering": true
+   },
    "children": [
      "menu-item#categories"
    ]
  },
  ...
}
```

Volte para o código fonte, atualize a página e procure novamente por `title="Major Appliances"`

![image](https://user-images.githubusercontent.com/18701182/93837006-f5d73780-fc5a-11ea-84c8-18542756e5a7.png)

Veja que nenhuma referência é encontrada, mas que se você navegar, o comportamento continua o mesmo. Isso porque os sub-menus são carregados somente depois do *load* inicial. 
