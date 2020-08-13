# Explorando o poder do rich text

## Introdução

Markdown é uma linguagem de marcação amigável que pode ser convertida de maneira simples para HTML. Nesta lição, veremos como é possível utilizar esta linguagem em nosso bloco [**Rich Text**](https://developers.vtex.com/docs/vtex-rich-text) para customizá-los e criar textos interessantes.

## Rich Text com Markdown

Para incluir textos no bloco de `rich-text`, é necessário utilizar a prop `text`:

```json
  "rich-text#home1": {
    "props": {
      "text": "Meu texto",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
```

A prop `text` aceita o formato de markdown. Portanto, se você deseja escrever seu texto utilizando essa linguagem, seu código deve ficar semelhante a este:

```json
  "rich-text#home1": {
    "props": {
      "text": "# Meu título h1 \n Escreva aqui um parágrafo \n ## Meu título h2 \n Escreva aqui seu segundo parágrafo \n Inclua aqui uma lista \n - Item 1 \n - Item 2 \n - Item3",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
```

>**Dica**: Sempre utilize o comando `\n` para pular linhas ao utilizar markdown na prop `text`.

Outras propriedades do componente `rich-text` podem ser encontrados na [documentação oficial do Store Framework](https://developers.vtex.com/docs/vtex-rich-text)

## Alterando o estilo e o conteúdo do _rich text_ através de Markdown

1. Dentro do arquivo `about-us.jsonc`, troque o texto da `rich-text#about-content` para que `This is VTEX Minimum Theme` se torne um _header_ pequeno (`h3`). Assegure-se que você quebre uma linha depois desse trecho com `\n`;

2. Coloque o trecho `VTEX Minimum Theme` em itálico.

![image](https://user-images.githubusercontent.com/19495917/90180384-410d4900-dd85-11ea-88b9-3af68e8f3a08.png)

:information_source: Lembre-se de acessar a [documentação](https://developers.vtex.com/docs/vtex-rich-text) do Rich Text caso tenha alguma dúvida durante a atividade.