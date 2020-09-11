# Navigation & Routes

## Introdução

Um dos pontos altos de uma boa aplicação de admin é garantir que está bem posicionada e que sua navegação é simples. Para controlar a navegação no menu lateral do admin VTEX existem dois arquivos que serão úteis: o `navigation.json` e o `routes.json`.

## navigation.json

O navigation é o arquivo que define as regras de navegação na barra lateral do admin VTEX. Com ele você pode construir desde um link mais simples, em que um clique leva para sua app, como construir menus mais complexos com submenus associados.

![image](https://user-images.githubusercontent.com/18701182/92757455-21f1df00-f364-11ea-8798-87f8f73863c8.png)


## routes.json

O routes é quem define as rotas e componentes react associados, da sua aplicação, qualquer componente que esteja mapeado para uma rota, deve ser declarado no routes, ainda que não esteja diretamente associado a um item de navegação no `navigation.json`. 

## Atividade

1. Dentro da pasta `admin/` criada no passo anterior, crie mais dois arquivos, o `navigation.json` e o `routes.json`

```diff
|_ admin/
+ |_ navigation.json
+ |_ routes.json
```

2. No `navigation.json` crie um _json_ com as propriedades `section`, `titleId` e `path`:

```
{
  "section": "orders",
  "titleId": "admin-example.navigation.label",
  "path": "/admin/iotraining"
}
```

3. No `routes.json` atribua um component e um path para a navegação criada:

```
{
  "admin.app.example": {
    "component": "adminExample",
    "path": "/admin/app/iotraining"
  }
}
```

**NOTA:** O mapeamento de um *navigation* para uma *route* é feito através do path. O path deve divergir apenas por um `/app/` no routes.json

```
//navigation.json

/admin/{{seupath}}

//routes.json

/admin/app/{{seupath}}
```

4. Para finalizar, crie um componente simples de hello world com o mesmo nome que você deu para o `component` no `routes.json`

```tsx
//react/adminExample.tsx
import React, { FC } from 'react'

const AdminExample: FC = () => {
  return <h1>Hello, World!</h1>
}

export default AdminExample
```

Link a aplicação (`vtex link`). O resultado deve ser o seguinte: 

![image](https://user-images.githubusercontent.com/18701182/92773790-486b4680-f373-11ea-8d1b-c4b84dad4375.png)

Repare que o menu criado está sem nenhuma mensagem ainda, nós o evoluiremos posteriormente, clique no espaço em branco mostrado acima para ver a mensagem de `Hello, World!`.
