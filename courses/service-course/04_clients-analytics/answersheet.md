```node/handler/analytics.ts
export async function analytics(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { analytics },
  } = ctx
    ctx.status = 200
    ctx.body = await analytics.getLiveUsers()
    ctx.set('cache-control', 'no-cache')
  await next()
}
```

```node/clients/analytics.ts
import { AppClient, IOContext, InstanceOptions } from '@vtex/api'

export default class Analytics extends AppClient {
    constructor(context: IOContext, options?: InstanceOptions) {
        super('vtex.mocked-analytics@0.x', context, options)
    }
        
    public getLiveUsers(): Promise<LiveUsersProduct[]> {
        return this.http.get('_v/live-products')
    }
    
}
        
interface LiveUsersProduct {
    slug: string
    liveUsers: number
}
```

```node/clients/index.ts
import { IOClients } from '@vtex/api'
import Analytics from '../clients/analytics'


// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get analytics() {
        return this.getOrSet('analytics', Analytics)
    }

}
```