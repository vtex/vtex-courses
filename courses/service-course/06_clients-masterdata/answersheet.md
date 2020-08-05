```manifest.json
{
  "name": "backend-course",
  "vendor": "vtex",
  "version": "0.0.1",
  "title": "Backend Course Solution",
  "description": "Reference app for the Backend Course Solution",
  "builders": {
    "graphql": "1.x",
    "docs": "0.x",
    "node": "6.x"
  },
  "scripts": {
    "prereleasy": "bash lint.sh"
  },
  "credentialType": "absolute",
  "policies": [
    {
      "name": "ADMIN_DS"
    },
    {
      "name": "outbound-access",
      "attrs": {
        "host": "api.vtex.com",
        "path": "/*"
      }
    }
  ],
  "dependencies": {
    "vtex.mocked-analytics": "0.x",
    "vtex.events-example": "0.x"
  },
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```

```node/event/liveUsersUpdate.ts
import { Clients } from './../clients/index'
import { EventContext } from '@vtex/api'
import { COURSE_ENTITY } from '../utils/constants'

export async function updateLiveUsers(ctx: EventContext<Clients>) {
  const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
  console.log('MOCKED LIVE USERS ', liveUsersProducts)
  await Promise.all(
    liveUsersProducts.map(async ({ slug, liveUsers }) => {
      try {
        const [savedProduct] = await ctx.clients.masterdata.searchDocuments<{
          id: string
          count: number
          slug: string
        }>({
          dataEntity: COURSE_ENTITY,
          fields: ['count', 'id', 'slug'],
          pagination: {
            page: 1,
            pageSize: 1,
          },
          schema: 'v1',
          where: `slug=${slug}`,
        })

        console.log('SAVED PRODUCT', savedProduct)

        await ctx.clients.masterdata
          .createOrUpdateEntireDocument({
            dataEntity: COURSE_ENTITY,
            fields: {
              count: liveUsers,
              slug,
            },
            id: savedProduct?.id,
          })
          .then(res => {
            console.log(res)
            return res
          })
      } catch (e) {
        console.log(`failed to update product ${slug}`)
        console.log(e)
      }
    })
  )
  return true
}
```