# Conectando a um serviço

## Introdução

Uma app de admin acaba perdendo o seu sentido se não puder consumir dados. Sendo assim, no último passo do curso, vamos aprender como conectar sua app de admin a um serviço e, em seguida, usá-lo no *front-end* da aplicação.

## Atividade

1. Comece adicionando os builders para serviço necessários: 

/manifest.json
```diff
{
  ...
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "admin": "0.x",
+   "node": "6.x",
+   "graphql": "1.x"
  }
}

```

2. Crie uma pasta `graphql/` e adicione um arquivo simples `schema.graphql` com uma única query: 

/graphql/schema.graphql
```
type Query {
  helloworld: String 
}
```

3. Crie uma pasta `node/` e nela adicione um `index.ts` que vai instanciar nosso serviço: 

/node/index.ts
```
import { Service } from '@vtex/api'

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        helloworld: () => `Service number: ${Math.random()}`,
      },
    },
  },
})
```

Nosso serviço vai então, na query `helloworld` retornar um número aleatório

4. Na pasta `/node` para que você consiga desenvolver bem localmente, será necessário um `package.json`, voce pode adicionar um simples: 

/node/package.json
```
{
  "dependencies": {
    "co-body": "^6.0.0",
    "ramda": "^0.25.0"
  },
  "devDependencies": {
    "@types/co-body": "^0.0.3",
    "@types/jest": "^24.0.18",
    "@types/node": "^12.0.0",
    "@types/ramda": "types/npm-ramda#dist",
    "@vtex/api": "6.36.2",
    "@vtex/test-tools": "^1.0.0",
    "tslint": "^5.14.0",
    "tslint-config-vtex": "^2.1.0",
    "typescript": "3.8.3"
  },
  "scripts": {
    "lint": "tsc --noEmit --pretty && tslint -c tslint.json --fix './**/*.ts'"
  },
  "version": "0.0.7"
}

```

5. Na pasta `react/` nós vamos precisar definir uma query para conseguir usar o resolver que definimos no serviço, para fazer isso, crie uma pasta `graphql/` dentro da pasta `react/` e nesta pasta, crie um `helloworld.gql` com: 

/react/graphql/helloworld.gql: 
```
query hello {
  helloworld
}
```

6. Para finalizar, precisamos adicionar essa query ao nosso componente no `adminExample.ts`

```diff
import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
+import { useQuery } from 'react-apollo'

+import helloworld from './graphql/helloworld.gql'

const AdminExample: FC = () => {
+ const { data } = useQuery(helloworld)

  return (
    <Layout>
      <PageBlock title="Titulo" subtitle="Alguma explicação." variation="full">
        <h1>Hello, World!</h1>
+       <p>{data?.helloworld}</p>
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
```

O resultado deve ser: 

![image](https://user-images.githubusercontent.com/18701182/92937440-b79f7400-f421-11ea-9e92-a24ef710e83e.png)