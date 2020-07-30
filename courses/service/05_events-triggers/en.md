# Events: Using Events as Triggers

## Introduction

With the _Analytics_ client implemented, we want to use the _Events_ as trigger to the requests. This means that, for every event listened, we want to perform a request to the _Analytics_ app. So, for every X seconds, we will have a new data on **Live Products**.

## Events

In VTEX IO, events are often used as triggers to other actions, such as sending e-mails to the final client. To implement this, we need to configure our app's client and event handler.

## Activity

1. As the _Analytics client_ is implemented, we just need to use it in the event handler. First, in the `node/event/liveUsersUpdate.ts` file, import the client we implemented in the previous step:

   ```ts
   import { Clients } from '../clients/index'
   ```

2. Now, we need to use the `EventContext` that we already configured before. Import it by updating the method. You can do so like this:

   ```diff
   //node/event/liveUsersUpdate.ts
   import { Clients } from './../clients/index'
   +import { EventContext } from '@vtex/api'

   +export async function updateLiveUsers(ctx: EventContext<Clients>) {
   ...
   }
   ```

   > Note: you can also globally declare your event context in the `index.ts` file. If you do so, you doesn't need to import in every file you want to use it.

3. Now, to use the _Analytics client_, do the following:

   ```diff
   //node/event/liveUsersUpdate.ts
   export async function updateLiveUsers(ctx: EventContext<Clients>) {
   +  const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
   +  console.log('LIVE USERS: ', liveUsersProducts)
   +  return true
   }
   ```

4. Finally, run `vtex link` and for every event fired, you should see the live users retrieved from the _Analytics_.
   The result should be like this:
   ![image](https://user-images.githubusercontent.com/43679629/85150833-69ffda80-b229-11ea-9260-b9255adf7d9c.png)
