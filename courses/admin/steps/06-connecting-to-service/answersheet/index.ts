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
