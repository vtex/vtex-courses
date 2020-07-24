# Linkando uma _app_ e a utilizando em um tema de loja

## Introdução

Dado que você já está familiarizado com o Store Framework, você deve saber que utilizamos blocos, como a `shelf` e o `sku-selector`, para criar uma loja no VTEX IO. Neste passo, você irá criar um bloco a ser utilizado na _home_ do tema da sua loja.

## Adicionando um texto fixo ao nosso componente

No _template_ local que foi clonado, abra o arquivo `Countdown.tsx`. Você verá que contém uma implementação base de um componente React, que é uma `div` vazia, como mostrado abaixo:

```tsx
//react/Countdown.tsx
import React from 'react'

interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
    return <div></div>
}

Countdown.schema = {
    title: 'editor.countdown.title',
    description: 'editor.countdown.description',
    type: 'object',
    properties: {},
}

export default Countdown
```

Algumas coisas para prestar atenção:

- Os tipos para as _props_ do componente são definidos aqui:

    ```ts
    interface CountdownProps {}
    ```

- Este _schema_ se refere ao conteúdo que é mostrado no _Site Editor_:

    ```tsx
    Countdown.schema = {
        title: 'editor.countdown.title',
        description: 'editor.countdown.description',
        type: 'object',
        properties: {},
    }
    ```

    > Para que o seu bloco possa **aceitar configurações do usuário**, é preciso exportar um `schema` no componente React responsável por aquele bloco utilizando [JSON *schema*](https://json-schema.org/). Isso irá, automaticamente, gerar um formulário para o Site Editor relativo ao bloco que você está desenvolvendo. 

Agora, vamos adicionar uma _tag_ `h1` dentro do componente:

```diff
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
-   return <div></div>
+   return (
+     <div>
+       <h1>Countdown Test</h1>
+     </div>
+   )
}
```

De forma a ver o bloco que você acabou de criar, é necessário declará-lo em um tema.

> Qual tema eu posso utilizar?

Nesse curso, você irá utilizar o `vtex.store-theme`, que pode ser clonado ao rodar o seguinte comando no seu terminal:

```
git clone https://github.com/vtex-apps/store-theme.git
```

Observação: Pode ser clonado em uma pasta de sua preferência, mas não dentro do diretório da aplicação que você está desenvolvendo.

Agora, para evitar conflitos, vá ao terminal e unlinke qualquer tema ou aplicação que você tenha linkado no seu _workspace_:

```
vtex unlink --all
```

Com os dois repositórios prontos, você precisa linkar ambos, em dois terminais diferentes, utilizando o seguinte comando:
```
vtex link
```
> Lembre-se de utilizar seu próprio _workspace_!

Com ambos os _links_ ativos (tema e bloco customizado), vamos adicionar o bloco ao tema. Para fazer isso, é necessário adicioná-lo nas dependências do tema:

```diff
{
    ...
    "dependencies": {
        ...
+        "vtex.countdown": "0.x",
        ...
    },
    ...
}
```

Por fim, nós queremos adicionar o bloco na loja, para que este possa ser visto. Dentro do arquivo `store-theme/store/blocks/home/home.jsonc`, declare um bloco `countdown`: 
```diff
{
    "store.home": {
        "blocks": [
+           "countdown",
            ...
        ]
        ...
    }
    ...
}
```

O resultado esperado é encontrar um _header_ no topo da _home_ da sua loja, como visto abaixo:

![image](https://user-images.githubusercontent.com/19495917/80492927-0e0c8a00-893b-11ea-8a1d-aaad2874a014.png)

> No caso de adicionar o bloco como o último em `store.home`, você o verá no final da página.