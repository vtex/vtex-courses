# Getting to know more about clients

## Introduction

In this step, some clients concepts are going to be briefly explained and it's presented which are the clients that are necessary for this course: **analytics client** and **master data client**. The first one will be implemented on this step and you'll also learn how to use a client that has been already implemented in our API.

## About the clients

Clients, on VTEX IO, are abstractions to other services. We tackle complexities when setting up an HTTP client, for example, so you can focus on the real value of your software. Whenever you need to setup a connection with an external API or another VTEX service, you should create a client! Some standard clients are already baked into VTEX IO, check them [here](https://github.com/vtex/node-vtex-api/blob/ccf4d8f8d3208007c4bfd558baf979df8d825af8/src/clients/IOClients.ts).

If you already got to know more about IO services, you probably know that your implementation exports functions that receive a context object. These functions can be a resolver function to a GraphQL field, a middleware to an HTTP server or an event handler, and, in all of them, you receive a ctx (or however you wanna call it) object of type `Context`, and it is inside of `ctx.clients` where you’ll find each client.

It's possible to read more about clients concepts [on this document](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-3598e97a761645e0befdac84a32f339d).

## Analytics client

In this course, it will be necessary to create a client that will be used to get information regarding product's number of views. The client that will be created will make a REST request in which it'll retrieve information about product views. This client needs to have a function that will be used on a handler for a specific route and this is how it can be tested.

## Activity

In this step, we will implement the Anaylitcs client. So,

1. First, in the `/node/clients/` directory, you will find a file called `analytics.ts`, which already has a sketch, just like the code block below. This is where you'll implement your client.

   ```ts
   import { AppClient } from '@vtex/api'

   export default class Analytics extends AppClient {}
   ```

   > You can noticed in this code block that Analytics is a client that extends from `AppClient` because this offers pre-configurations that assure that your client has a secure communication with other parts of your app.

2. The client needs to have a constructor and just a single method, called `getLiveUsers`. This method returns a promise of an array that its elements are of the type `LiveUsersProduct`. Using the code below, add the necessary code lines to the client:

   ```diff
   //node/clients/analytics.ts
   import { AppClient, InstanceOptions, IOContext } from '@vtex/api'

   export default class Analytics extends AppClient {
   +  constructor(context: IOContext, options?: InstanceOptions) {
   +    super('vtex.mocked-analytics@0.x', context, options)
   +  }

   +  public getLiveUsers(): Promise<LiveUsersProduct[]> {}
   }

   +interface LiveUsersProduct {
   +  slug: string
   +  liveUsers: number
   +}
   ```

   > The interface that is defined is going to be used as a typing on the method that we'll implement.

3. Now it's necessary to implement the `getLiveUsers` method. It **returns** an HTTP GET request to a well-defined endpoint that is responsible for getting the data that is needed in this application. So add the following line to the method `getLiveUsers`:

   ```ts
   return this.http.get('_v/live-products')
   ```

   > The method that you've just created will get the necessary data for this application: an array of objects that have two fields: `slug`, a string that represents the product ID and `liveUsers`, a number that is the quantity of users visualizing this product - which are the fields in the interface.

4. With your analytics client already implemented, it's necessary to declare it as one of the clients in the `Clients` class, so it will be accessible using the `Context` that we've talked about at the beginning of this step.

   So, in the `node/clients/` directory, go to the file called `index.ts` and add a get method to the class that refers to the analytics client. It's also necessary to import the client that you created.

   ```diff
   // node/clients/index.ts
   + import Analytics from '../clients/analytics'

   export class Clients extends IOClients {
   +  public get analytics() {
   +    return this.getOrSet('analytics', Analytics)
     }
   }
   ```

5. So as to see it working, it's possible to use `getLiveUsers` method inside the handler for the analytics client. Using a route that it's already defined in the project, it is possible to send a request to it and the handler responsible for this route will call the method that we created.

   Inside the node directory, there is a folder called `handlers`. There is already a file named `analytics.ts`, in which its necessary to do two things for your test to work: get the analytics client from `ctx` and replace the content of `ctx.body` with the method mentioned before, as you can see in the code block below:

  ```diff
    export async function analytics(ctx: Context, next: () => Promise<any>) {
  +    const {
  +      clients: { analytics },
  +    } = ctx
  +    ctx.status = 200
  -    ctx.body = 'OK'
  +    ctx.body = await analytics.getLiveUsers()
  +    ctx.set('cache-control', 'no-cache')
      await next()
    }
  ```

6. Now let's test it! It's possible to use Postman to send a `GET` request to the following route:

   `{your workspace}--appliancetheme.myvtex.com/_v/app/analytics/realTime`

   and it's expected that it replies with the data and status `200`.

![image](https://user-images.githubusercontent.com/19495917/84827089-53c00780-affa-11ea-857f-fdcba0fef7c2.png)
