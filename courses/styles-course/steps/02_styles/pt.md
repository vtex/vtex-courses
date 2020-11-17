# Estilos globais

## Introdução

Além do CSS, que já foi aprendido anteriormente, o Store Framework oferece um outro tipo de customização de design, provida a partir do `style.json`.

## Estilização semântica

Todos os blocos do Store Framework se alavancam das mesmas definições semânticas de estilo, definidas usando o [Tachyons](https://tachyons.io/). Na prática, isso significa que, ao invés de precisar mudar todos os fundos de botões para usar a cor que se interessa, é necessário apenas redefinir a cor que um `background` de uma `action-primary` tem.

Customizações através do `style.json` tendem a ter um impacto muito maior que através de CSS, pois, em geral, mantém a identidade visual da loja ao longo de todas as páginas sendo necessárias poucas mudanças. Por esse motivo, sempre que possível, essa ferramenta deve ser usada, evitando assim _overhead_ de CSS desnecessário.

## Investigando o `style.json`

### Cores

![](https://user-images.githubusercontent.com/18701182/69848546-24fa6380-1259-11ea-9978-9020222ed77e.png)

O `styles/configs/style.json` pode ser confuso em primeiro momento, por conter todas as definições de estilo que todos os blocos visuais do Store Framework usam. No entanto, um bom fluxo para identificar que estilos mudar, é através da inspeção de elementos no navegador.

Por exemplo, **clique com o botão direito em cima de qualquer botão da loja aperte em inspecionar**.

![image](https://user-images.githubusercontent.com/19495917/90169302-cb997c80-dd74-11ea-983e-6af755b1aa5d.png)

Observando a barra lateral no Chrome que abriu é possível ver uma série de definições, uma delas é a de cor do _background_ do botão (#3f3f40):

![image](https://user-images.githubusercontent.com/19495917/90169845-875aac00-dd75-11ea-968b-db03f14435e7.png)

Se fizermos uma busca pelas ocorrências de ambas as cores no `style.json`, as cores que descobrimos são, respectivamente, as usadas para `action-primary` em `hover-background` e `background`, por exemplo. Isso nos dá uma ideia melhor de onde poderemos achar outras ocorrências dessa mesma definição.

### Tipografia

Para descobrir definições semânticas de texto e quais campos são editáveis, o processo é o mesmo do anterior, podemos buscar atributos como tamanho da fonte, peso, família.

Em um cabeçalho nível 1, por exemplo, ao inspecionar descobrimos que seu tamanho foi definido como `3 rem`.

![image](https://user-images.githubusercontent.com/19495917/90170621-b0c80780-dd76-11ea-9d41-c96639944e58.png)

![image](https://user-images.githubusercontent.com/19495917/90170541-9b52dd80-dd76-11ea-8390-f243e267e145.png)

## Alterando globalmente a cor e a tipografia

1. No arquivo `style.json`, substitua todas as ocorrências das cores que encontramos, trocando:

- **#3f3f40** with **#e68e94**

2. Mude o tamanho da fonte do cabeçalho de nível 1 (`heading level 1`) para que agora tenha `2.5 rem` de altura:

   ```diff
       "heading-1": {
           "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
           "fontWeight": "700",
   +       "fontSize": "2.5rem",
           "textTransform": "initial",
           "letterSpacing": "0"
       },
   ```

O resultado esperado pode ser visto abaixo:

![image](https://user-images.githubusercontent.com/19495917/90172958-17025980-dd7a-11ea-80d1-31b6e3f3ac1f.png)
