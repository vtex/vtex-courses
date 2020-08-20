# Introduzindo o Rich Text

## Rich Text

Começaremos personalizando a *página inicial*. Na pasta `/store/blocks` do seu tema, você encontrará um arquivo chamado` home.jsonc`. Este arquivo determina como os blocos que você pretende usar são organizados. A linguagem usada na composição do layout é simples e baseada em [JSON](http://www.json.org/json-en.html).

Em `home.jsonc`, você notará um bloco que é padrão em todos os temas, ou seja,` store.home`. Este bloco determina quais blocos filhos serão exibidos na página inicial.

```json
{
  "store.home": {
    "blocks": []
  }
  ...
}
```

Vamos usar Rich Text em seu corpo:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  }
  ...
}
```

Portanto, `store.home` agora sabe que precisa renderizar um Rich Text. No entanto, ainda não especificamos qual visual esse Rich Text deve adotar. Para isso, precisaremos **definir o bloco**.

## Definindo blocos

A definição de um bloco deve sempre ser executada separadamente de qualquer outro bloco, no nível de origem do arquivo JSON. 

```json
{
  "store.home": {
    "blocks": [
      "rich-text" <----- Aqui o bloco é usado dentro de outro
    ]
  },
  "rich-text": { <----- Aqui está no nível da fonte
  }
}
```

Na definição do bloco, você pode definir seu comportamento e visual. **Pontos de personalização** devem ser usados ​​para conseguir isso, então vamos começar usando os `props` de Rich Text: 

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {

    }
  }
}
```

Leia o Rich Text [documentação](https://developers.vtex.com/docs/vtex-rich-text#rich-text) mais uma vez e vamos definir os adereços que usaremos para personalizar o bloco.

Queremos obter um simples "Olá, Mundo!", E olhando para as props, notamos um chamado: `text` [(Texto escrito em linguagem de marcação a ser exibido)](https://vtex.io/docs/app /vtex.rich-text#blocks-api). Esta é a prop que determina qual texto será exibido.

Incluindo esta prop, agora temos o seguinte:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "Hello, World!"
    }
  }
}
```

Lendo a [documentação do Markdown](https://www.markdownguide.org/cheat-sheet/), aprendemos que, para que um texto apareça em *itálico*, precisamos apenas colocar esse texto entre `*`  

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "*Hello, World!*"
    }
  }
}
```

Para centralizar o alinhamento do texto, podemos adicionar a prop `textPosition` e atribuir a ela o valor` CENTER`:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "*Hello, World!*",
      "textPosition": "CENTER"
    }
  }
}
```

## Atividade

Defina um [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/) em sua página inicial e crie um **negrito** "Hello, World!" que está **alinhado à direita**. Faça isso adicionando um código como este no arquivo `store/blocks/home.jsonc`:

    ```diff
    {
      "store.home": { 
        "blocks": [
    +      "rich-text"
        ]
      },
    +  "rich-text": {
    +    "props": {
    +      "text": "**Hello, World!**",
    +      "textPosition": "RIGHT"
    +    }
    +  }
    }
    ```

Depois de executar o `vtex link`, seu` rich-text` deve ficar assim:

<img src="https://user-images.githubusercontent.com/12139385/70143376-2e7d3480-167a-11ea-8727-2bc6a9422f21.png" width="150" />

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/components/all/vtex.rich-text/) do Rich Text se você tiver alguma dúvida durante a atividade.
