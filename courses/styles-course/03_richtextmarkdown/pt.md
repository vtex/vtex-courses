# Explorando o poder do rich text

## Introdução

Markdown é uma linguagem de marcação amigável que pode ser convertida de maneira simples para HTML. Nesta lição, veremos como é possível utilizar esta linguagem em nosso bloco [**Rich Text**](https://vtex.io/docs/components/all/vtex.rich-text/) para customizá-los e criar textos interessantes.

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
```json
  "rich-text#home1": {
    "props": {
      "text": "# Meu título h1 \n Escreva aqui um parágrafo \n ## Meu título h2 \n Escreva aqui seu segundo parágrafo \n Inclua aqui uma lista \n - Item 1 \n - Item 2 \n - Item3",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
```

**DICA**: Sempre utilize o comando `\n` para pular linhas ao utilizar markdown na prop `text`

Outras propriedades do componente `rich-text` podem ser encontrados na [documentação oficial do Store Framework](https://vtex.io/docs/components/all/vtex.rich-text/)

Vamos começar?

1. Dentro do arquivo `about-us.jsonc`, troque o texto da `tab-list.item#home1` para que apareça um "Sobre" na primeira aba;

2. No conteúdo `rich-text` associado a essa aba, utilize o texto abaixo:

    ```
    # Nossa História \n ### Nascemos de uma hackathon interna da VTEX! \n Isso mesmo. A primeira Hackatheme (hackathon de temas de loja) da VTEX teve 3 finalistas. Um deles foi a FlatFlat, essa loja que vocês estão acessando agora. A FlatFlat foi criada pelos engenheiros Afonso Praça e Sávio Muniz, pelos designers Lucas Falcão e Augusto Barbosa, e pelo diretor de novos negócios Maurício Baum. Como a loja foi criada por profissionais com os mais diversos backgrounds, o resultado ficou óbvio: foram finalistas com o layout mais legal dentre os participantes.
    ```

3. Coloque o título e o subtítulo em negrito.

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/rich-text-solution.png)

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/components/all/vtex.rich-text/) do Rich Text caso tenha alguma dúvida durante a atividade.