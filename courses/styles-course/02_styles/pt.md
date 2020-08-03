# Estilos globais

## Introdução

Além do css, que já foi aprendido anteriormente, o Store Framework oferece um outro tipo de customização de design, provida a partir do `style.json`.

## Estilização semântica

Todos os blocos do Store Framework se alavancam das mesmas definições semânticas de estilo, definidas usando o [Tachyons](https://tachyons.io/). Na prática, isso significa que ao invés de precisar mudar todos os fundos de botões para usar a cor que se interessa, é necessário apenas redefinir a cor que um `background` de uma `action-primary` tem.

Customizações através do `style.json` tendem a ter um impacto muito maior que através de css, pois, em geral, mantém a identidade visual da loja ao longo de todas as páginas sendo necessárias poucas mudanças. Por esse motivo, sempre que possível, essa ferramenta deve ser usada, evitando assim overhead de css desnecessário.

## Investigando o `style.json`

### Cores

<img src="https://user-images.githubusercontent.com/18701182/69848546-24fa6380-1259-11ea-9978-9020222ed77e.png" width="400" />

O `styles/configs/style.json` pode ser confuso em primeiro momento, por conter todas as definições de estilo que todos os blocos visuais do Store Framework usam. No entanto, um bom fluxo para identificar que estilos mudar, é através da inspeção de elementos no browser.

Por exemplo, **clique com o botão direito em cima de qualquer botão da loja aperte em inspecionar**.

<img src="https://user-images.githubusercontent.com/18701182/69848770-b36ee500-1259-11ea-882a-b2ac5ebdde4d.png" width="400" />

Observando a barra lateral no Chrome que abriu é possível ver uma série de definições, uma delas é a de cor do background do botão (#0f3e99):

<img src="https://user-images.githubusercontent.com/18701182/69849050-77884f80-125a-11ea-87d2-7a148fd56787.png" width="500" />

Além dela, se você inspecionar no momento em que estiver somente passando o mouse em cima do botão, descobrirá a cor de *hover* (#072c75):

![image](https://user-images.githubusercontent.com/18701182/69849774-5f193480-125c-11ea-82e2-f118c8014287.png)

Se fizermos uma busca pelas ocorrências de ambas as cores no `style.json`, as cores que descobrimos são, respectivamente, as usadas para `action-primary` em `hover-background` e `background`, por exemplo. Isso nos dá uma ideia melhor de onde poderemos achar outras ocorrências dessa mesma definição.

### Tipografia

Para descobrir definições semânticas de texto e quais campos são editáveis, o processo é o mesmo do anterior, podemos buscar atributos como tamanho da fonte, peso, família.

Em um cabeçalho nível 1, por exemplo, ao inspecionar descobrimos que seu tamanho foi definido como 3 rem.

![image](https://user-images.githubusercontent.com/18701182/69850262-ab18a900-125d-11ea-8ba8-e6a64874ca04.png)
![image](https://user-images.githubusercontent.com/18701182/69850281-b1a72080-125d-11ea-8c46-302b6a4f9749.png)

## Atividade

1. No arquivo `style.json`, substitua todas as ocorrências das cores que encontramos, trocando:
  - **#072c75** por **#45a6a3**
  - **#0F3E99** por **#52BAB7**
2. Mude o tamanho da fonte heading level 1 para que agora tenha 2.5 rem de altura

O resultado esperado pode ser visto abaixo:

<img src="https://user-images.githubusercontent.com/18701182/69850673-8b35b500-125e-11ea-824b-3f3f3235e575.png" width="400" />