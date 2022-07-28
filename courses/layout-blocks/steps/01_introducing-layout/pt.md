# Apresentando blocos de layout

## Introdução

Em cursos anteriores vimos como usar blocos básicos do Store Framework que trazem funcionalidade, mas que em geral são muito simples para serem usados em um layout real de loja.

O mínimo que precisamos quando construímos um _template_ é definir um _grid_, ou seja, conseguir dispor blocos um ao lado do outro, mas há ainda muitos outros _layouts_ mais complexos que em geral precisam ser atingidos: abas, modais, empilhados, etc.

Neste curso aprenderemos como é possível usar alguns dos blocos de _layout_ e entender melhor cada uma das peculiaridades.

## Padrão entre _layouts_

Apesar de cada bloco de _layout_ ter sua funcionalidade, a ideia por trás de todos é muito parecida. Todos eles dependem fortemente do conceito de `children`, ou seja, de receberem blocos filhos e definirem a regra de renderização. É também comum aos blocos de _layout_ apresentar algumas regras de formatação mas que sempre culminam em usar qualquer bloco filho, garantindo assim a flexibilidade em atingir o template desejado.

```json
{
  "layout-block": {
    "children": ["qualquer-coisa"]
  }
}
```

_Exemplo da ideia de todos os blocos de layout_

## Atividade

Para que o curso funcione bem, é preciso adicionar as dependências de _apps_ de _layout_ que vamos precisar.

1. Vá ao `manifest.json` do seu tema e adicione as seguintes dependências:

```diff
{
  ...
  "dependencies": {
    ...
+   "vtex.condition-layout": "1.x",
+   "vtex.store-link": "0.x",
+   "vtex.modal-layout": "0.x",
+   "vtex.product-price": "1.x",
+   "vtex.stack-layout": "0.x",
+   "vtex.tab-layout": "0.x",
+   "vtex.responsive-layout": "0.x",
+   "vtex.slider-layout": "0.x",
  }
}
```
