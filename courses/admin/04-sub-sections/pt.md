# Sub seções

## Introdução

Em alguns casos a sua aplicação é mais complexa e precisa de vários seções navegáveis (e.g. uma tela para insights e outra para gestão). O Admin Framework oferece a possibilidade de criar itens de navegação de seção que funcionam de forma análoga.

## Atividade

1. Remova o `path` do navigation que tínhamos usado antes e adicione um novo campo `subSectionItems` com um _array_ vazio:

```diff
{
  "section": "orders",
  "titleId": "admin-example.navigation.label",
- "path": "/admin/iotraining",
  "searchKeyWordsHelpers": "admin-example.navigation.search.kws",
+ "subSectionItems": []
}
```

2. Adicione um elemento para o _array_ de `subSectionItems` com uma `labelId` e um `path` (que pode ser o mesmo do anterior):

```diff
{
  "section": "orders",
  "titleId": "admin-example.navigation.label",
  "searchKeyWordsHelpers": "admin-example.navigation.search.kws",
  "subSectionItems": [
+   {
+     "labelId": "admin-example.navigation.insight",
+     "path": "/admin/iotraining",
+   }
  ]
}
```

3. Adicione mais outro elemento com um `labelId` diferente e outro `path`: 

```diff
{
  "section": "orders",
  "titleId": "admin-example.navigation.label",
  "searchKeyWordsHelpers": "admin-example.navigation.search.kws",
  "subSectionItems": [
+   {
+     "labelId": "admin-example.navigation.insight",
+     "path": "/admin/iotraining",
+   },
+   {
+     "labelId": "admin-example.navigation.management",
+     "path": "/admin/otheriotraining",
+   }
  ]
}
```

4. Com os _paths_ novos, faça as alterações necessárias no `routes.json`: 

```diff
{
  "admin.app.example": {
    "component": "adminExample",
    "path": "/admin/app/iotraining"
  },
+ "admin.app.otherexample": {
+   "component": "adminOtherExample",
+   "path": "/admin/app/otheriotraining"
+ }
}
```

5. Crie o novo componente `adminOtherExample.tsx` na raiz da pasta `react/`:

/react/adminOtherExample.tsx 
```
import React, { FC } from 'react'

const AdminOtherExample: FC = () => {
  return <h1>Other Example!</h1>
}

export default AdminOtherExample
```

6. Finalize criando as mensagens para cada um dos `labelId` definidos no passo 3: 


/messages/pt.json
```diff
{
  "admin-example.navigation.label": "Treinamento de IO",
  "admin-example.navigation.search.kws": "mock, test, treinamento, io",
+ "admin-example.navigation.insight": "Informações",
+ "admin-example.navigation.management": "Gerenciamento"
}
```

/messages/en.json
```diff
{
  "admin-example.navigation.label": "IO Training",
  "admin-example.navigation.search.kws": "mock, test, training, io",
+ "admin-example.navigation.insight": "Insights",
+ "admin-example.navigation.management": "Management"
}
```

/messages/es.json
```diff
{
  "admin-example.navigation.label": "Entrenamiento de IO",
  "admin-example.navigation.search.kws": "mock, test, entrenamiento, io",
+ "admin-example.navigation.insight": "Información",
+ "admin-example.navigation.management": "Administración"
}
```

O resultado esperado é então: 

![admin](https://user-images.githubusercontent.com/18701182/92791871-6fca0f80-f383-11ea-98f8-382c743a6657.gif)
