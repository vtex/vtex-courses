// node/index.ts
import {
  LRUCache,
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState,
  method,
} from '@vtex/api'
import { Clients } from './clients'
import { productList } from './resolvers/products'
import { updateLiveUsers } from './event/liveUsersUpdate'
import { analytics } from './handlers/analytics'

const TREE_SECONDS_MS = 3 * 1000
const CONCURRENCY = 10

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })
metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service<Clients, State, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 10000,
      },
      events: {
        exponentialTimeoutCoefficient: 2,
        exponentialBackoffCoefficient: 2,
        initialBackoffDelay: 50,
        retries: 1,
        timeout: TREE_SECONDS_MS,
        concurrency: CONCURRENCY,
      },
    },
  },
  events: {
    liveUsersUpdate: updateLiveUsers,
  },
  graphql: {
    resolvers: {
      Query: {
        productList,
      },
    },
  },
  routes: {
    analytics: method({
      GET: [analytics],
    }),
  },
})
