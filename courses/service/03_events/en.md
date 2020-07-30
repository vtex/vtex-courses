# Events: Handling and receiving events

## Introduction

Some interactions on VTEX IO can generate events and they can be used as triggers for actions, like the activity on this step. For now, we will use the events fired by the `events-example` app.

## Events on VTEX IO

On VTEX IO apps, events can be fired and used to trigger actions. For example, an app that listens for order placements and triggers a confirmation e-mail. It is important to highlight that events are _workspace and account bound_, which means that events are only visible for the account and workspace where they were fired. Events fired on your personal workspace will only be listened to by apps linked on this same workspace.

## Activity

1. First, we are starting the event firing on the `events-example` app. This app will fire an event every X seconds. After running `vtex link` on the `events-example` directory, click on the healthcheck route available and a "ok" message should appear on the browser:

   ![image](https://user-images.githubusercontent.com/43679629/83802091-8c69f380-a680-11ea-82af-a438fb73f40b.png)

   > This healthcheck route access creates a cache context needed for the VTEX IO to fire events. Without it, the `events-example` app won't be able to fire the events our app is going to listen to.

2. We need to add the event handler on the `Service` declaration to refer to what the app is supposed to do when listening to the event. To do so, on the `/node/index.ts` file, complement `Service` declaration:

   ```diff
   //node/index/ts

   + const TREE_SECONDS_MS = 3 * 1000
   + const CONCURRENCY = 10

   export default new Service<Clients, State, ParamsContext>({
     clients: {
       implementation: Clients,
       options: {
         default: {
           retries: 2,
           timeout: 10000,
         },
   +      events: {
   +        exponentialTimeoutCoefficient: 2,
   +        exponentialBackoffCoefficient: 2,
   +        initialBackoffDelay: 50,
   +        retries: 1,
   +        timeout: TREE_SECONDS_MS,
   +        concurrency: CONCURRENCY,
   +      },
   +    },
   +  },
   })
   ```

   Going by each configuration, we have the following:

   | Field                           | Type    | Description                                                                     |
   | ------------------------------- | ------- | ------------------------------------------------------------------------------- |
   | `exponentialTimeoutCoefficient` | seconds | the exponential factor by which the `timeout` will increase in each retry       |
   | `exponentialBackoffCoefficient` | seconds | the exponential factor by which the `backoff delay` will increase in each retry |
   | `initialBackoffDelay`           | seconds | the time the app will wait until the next retry                                 |
   | `retries`                       | -       | the maximum times the app will retry                                            |
   | `timeout`                       | seconds | the timeout until consider a failure attempt                                    |
   | `concurrency`                   | -       | the amount of simultaneous processes the event is able to perform               |

   > By adding this code to the `Service`, we are adding to the `Client` of this `Service`, the capability to handle events. At this point, we are not yet using the `Client` itself when handling the event.

3. For now, we are only going to create a log when receiving an event. To create this event handler, in the `/node/event` directory, go to the `liveUsersUpdate.ts` file and do the following:

   ```ts
   //node/event/liveUsersUpdate.ts
   export async function updateLiveUsers() {
     console.log('EVENT HANDLER: received event')
   }
   ```

4. Now, we need to declare in the `Service` the reference to this function. On the `/node/index.ts` file, add this code:

   ```diff
   ...
   + import { updateLiveUsers } from './event/liveUsersUpdate'
   ...

   export default new Service<Clients, State, ParamsContext>({
     ...
   +  events: {
   +    liveUsersUpdate: updateLiveUsers,
   +  },
   })

   ```

5. We also need to modify the `service.json` file. In order to listen to events sent, we need to declare this to give the app's service this capability. You may do so, by modifying `service.json` file:

   ```diff
   //node/service.json
   {
     "memory": 128,
     "ttl": 10,
     "timeout": 10,
     "minReplicas": 2,
     "maxReplicas": 10,
     "workers": 4,
   +  "events": {
   +    "liveUsersUpdate": {
   +      "sender": "vtex.events-example",
   +      "keys": ["send-event"]
   +    }
     },
     ...
   }
   ```

   > Note that we declare this by using the events resolver and the reference of the app that fires the event (declared as `sender`) and the event reference key (declared as `keys`).

6. At last, run `vtex link` and wait for the event to be fired by the `events-example` app. When listened, the log should appear on the console, like this:

   ![image](https://user-images.githubusercontent.com/43679629/83823425-5f323b00-a6aa-11ea-816a-68525e5800d7.png)
