# Layout modal

## Introdução

Também é possível, com o Store Framework, criar uma experiência de modais na loja. Seja para se inscrever em uma _newsletter_ ou criar um _quick view_, o [Modal Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-modal-layout) funciona como todos os outros blocos de _layout_, em que qualquer bloco pode ser usado como seu conteúdo.

Neste passo, vamos, então, construir um modal mais simples, para, em seguida, construirmos um _Quick View_ funcional.

### Um pouco mais sobre como o Modal Layout funciona

O bloco de Modal Layout divide a sua lógica em dois sub-blocos: `modal-trigger` e `modal-layout`.

O `modal-trigger` é usado para que seja escolhido qual bloco deve ser o responsável por disparar o comportamento de modal, você poderia usar uma imagem, um texto, _link_ ou o bloco que preferir.

O `modal-layout` define quais blocos filhos serão usados dentro do modal. É, portanto, nesse bloco, que o conteúdo do modal em si, deve ser colocado.

## Atividade

1. Na sua home, adicione um `modal-trigger#first` aos blocos:

```
{
  "store.home": {
    "blocks": [
      ...
      "modal-trigger#first"
    ]
  }
}
```

2. Defina, então, o `modal-trigger#first` com um texto de _Click Me_:

```
{
  ...
  "modal-trigger#first": {
    "children": [
      "rich-text#trigger"
    ]
  },
  "rich-text#trigger": {
    "props": {
      "text": "CLICK ME"
    }
  }
}
```

3. Coloque nos filhos do `modal-trigger#first` o `modal-layout#first`:

```diff
{
  ...
  "modal-trigger#first": {
    "children": [
      "rich-text#trigger",
+     "modal-layout#first"
    ]
  },
  ...
+ "modal-layout#first": {
+   "children": [
+     "rich-text#hello"
+   ]
+ },
+ "rich-text#hello": {
+   "props": {
+     "text": "Hello"
+   }
+ }
  ...
}
```

O resultado, então, deve ser:

![modal gif](https://user-images.githubusercontent.com/18701182/90183287-9f3c2b00-dd89-11ea-924d-6195465ffd25.gif)
