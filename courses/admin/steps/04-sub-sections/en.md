# Subsections

## Introduction

In some cases, your application is more complex and needs several navigable sections (e.g. one screen for insights and another for management). The Admin Framework offers the possibility to create section navigation items that work in a similar way.

## Activity

1. Remove the `path` from the navigation we had used before and add a new `subSectionItems` field with an empty array:

```diff
{
  "section": "orders",
  "titleId": "admin-example.navigation.label",
- "path": "/admin/iotraining",
  "searchKeyWordsHelpers": "admin-example.navigation.search.kws",
+ "subSectionItems": []
}
```

2. Add an element to the array of `subSectionItems` with a `labelId` and a `path` (which can be the same as the previous one):

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

3. Add another element with a different `labelId` and another `path`:

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

4. With the new paths, make the necessary changes to `routes.json`:

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

5. Create the new `adminOtherExample.tsx` component at the root of the `react/` folder:

/react/adminOtherExample.tsx 
```
import React, { FC } from 'react'

const AdminOtherExample: FC = () => {
  return <h1>Other Example!</h1>
}

export default AdminOtherExample
```

6. Finish by creating the messages for each of the `labelId` defined in step 3:


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

The expected result is, then: 

![admin](https://user-images.githubusercontent.com/18701182/92791871-6fca0f80-f383-11ea-98f8-382c743a6657.gif)
