# Connecting to a Service

## Introduction

An admin app ends up losing its meaning if it cannot consume data. So, in the last step of the course, we will learn how to connect your admin app to a service and then use it in the front-end of the application.

## Activity

1. Start by adding the required builders for service: 

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

2. Create a `graphql/` folder and add a simple `schema.graphql` file with a single query: 

/graphql/schema.graphql
```
type Query {
  helloworld: String 
}
```

3. Create a `node/` folder and add an `index.ts` file to it that will instantiate our service:

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

Our service will then, in the query `helloworld`, return a random number.

4. In the `/node` folder so that you can develop well locally, you will need a` package.json`, you can add a simple one:

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

5. In the `react/` folder we will need to define a query to be able to use the resolver that we defined in the service. To do this, create a `graphql/` folder inside the `react/` folder and in this folder, create a `helloworld.gql` with:

/react/graphql/helloworld.gql: 
```
query hello {
  helloworld
}
```

6. Finally, we need to add this query to our component in `adminExample.ts`

```diff
import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
+import { useQuery } from 'react-apollo'

+import helloworld from './graphql/helloworld.gql'

const AdminExample: FC = () => {
+ const { data } = useQuery(helloworld)

  return (
    <Layout>
      <PageBlock title="Title" subtitle="Some explanation." variation="full">
        <h1>Hello, World!</h1>
+       <p>{data?.helloworld}</p>
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
```

The result should be:

![image](https://user-images.githubusercontent.com/18701182/92937440-b79f7400-f421-11ea-9e92-a24ef710e83e.png)

With this you have a service connected to your admin application and can now connect to external services (learn more about our services course 🚀).
