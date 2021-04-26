# Navigation & Routes

## Introduction

One of the highlights of a good admin application is to ensure that it is well-positioned and that navigation is simple. To control navigation in the VTEX admin side menu there are two files that will be useful: `navigation.json` and`routes.json`.

## navigation.json

Navigation is the file that defines the navigation rules in the VTEX admin sidebar. With it, you can build from a simpler link, in which a click takes you to your app, how to build more complex menus with associated submenus.

![image](https://user-images.githubusercontent.com/60782333/107589617-28bba100-6be5-11eb-83d6-31486d1bafe3.png)

## routes.json

The routes define the routes and associated react components, from your application, any component that is mapped to a route must be declared in the routes, even if it is not directly associated with a navigation item in `navigation.json`.

## Atividade

1. Within the `/admin/`folder created in the previous step, create two more files,`navigation.json` and `routes.json`:

```diff
|_ admin/
+ |_ navigation.json
+ |_ routes.json
```

2. In `navigation.json` create a JSON object with the properties `section`, `titleId` and `path`:

```
{
  "section": "orders",
  "titleId": "admin-example.navigation.label",
  "path": "/admin/iotraining"
}
```

3. In `routes.json` assign a `component` and `path` to the created navigation:

```
{
  "admin.app.example": {
    "component": "adminExample",
    "path": "/admin/app/iotraining"
  }
}
```

**NOTE:** The mapping from a _navigation_ to a _route_ is done through the path. The path must diverge only by a `/app/` in routes.json

```
//navigation.json

/admin/{{yourpath}}

//routes.json

/admin/app/{{yourpath}}
```

4. Finally, create a simple hello world component with the same name that you gave to `component` in `routes.json`:

```tsx
//react/adminExample.tsx
import React, { FC } from 'react'

const AdminExample: FC = () => {
  return <h1>Hello, World!</h1>
}

export default AdminExample
```

Link the application (`vtex link`). The result should be as follows:

![image](https://user-images.githubusercontent.com/18701182/92773790-486b4680-f373-11ea-8d1b-c4b84dad4375.png)

Notice that the created menu has no message yet, we will evolve it later, click on the blank space shown above to see the message of `Hello, World!`.
