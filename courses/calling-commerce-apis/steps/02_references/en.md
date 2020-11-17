# Finding the VTEX Commerce APIs

## Introduction

In this step, you will learn how to find the documentation for VTEX APIs, as well as understand the differences in calling them through VTEX IO.

## Developer Portal

Before starting to develop your integration with VTEX Commerce APIs, it is essential that you can **discover them** and understand how they work. The VTEX's [Developer Portal](https://developers.vtex.com/reference/get-to-know-vtex-apis) lists all available APIs, as well as explaining how to use each of the endpoints offered.

![Developers Portal](https://user-images.githubusercontent.com/18706156/92934603-0f3be080-f41e-11ea-95f7-34f0238a8d96.png)

Most APIs follows the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) specification. it is also important to note that all calls **operate on an account** at VTEX.

## Differences in VTEX IO

VTEX IO is a _first-class citizen_ for VTEX APIs and, therefore, there are some differences in using them in your application. The Developer Portal receives some identification and authorization parameters that are not required when calling endpoints through VTEX IO.

## Authentication

Traditionally, VTEX authenticates calls to private routes (`/pvt`) using a pair **AppKey** and **AppToken**, obtained from an account administration panel. In VTEX IO **it is not recommended to use this key and token pair to authenticate yourself**, since the platform offers another more scalable and elegant way.

All apps that are developed on VTEX IO represent a **resource** on the platform, which allows an application to interact with other systems **on behalf of itself**, duly authorized by the account administrator. It is up to the app developer **to declare the necessary permissions**.

In practice, this means two things:

1. Both the endpoint and the _role_ required to access any API must be **declared in the `manifest.json` of the app**.
2. Calls must be made with **a VTEX ID token** instead of the **AppKey** and **AppToken** pair.

You will learn how to make these settings soon!

> The _Role_, talking about authorization within VTEX, represents a "role" in _License Manager_, the user and authorization manager on the platform. Some VTEX modules do not require any specific _role_, but others may and are necessary for the caller to be able to access that resource.

## App Token and User Token

- Each app in VTEX IO automatically receives an `authToken` that can be used to call external APIs. This token, which can be obtained from the context object in any request, has all the permissions that were declared in the `policies` field of the application manifest.
- It is necessary to check if it makes sense to use this token in requests, especially when accessing **critical systems** of accounts. If you identify a situation like this, you can also use the **token of the user using the app**.

## `accountName`

As stated, all calls to VTEX's Commerce modules are related to some `account` on VTEX, and traditionally this information is passed through the _query string_ `? An`. However, throughout the course, we will present abstractions created in VTEX IO that **do not require this manual configuration**.

It is worth mentioning that the apps that are developed on VTEX IO **must work regardless of the account where they are installed**, so it is important that none of this critical information is _"hard-coded"_.

## Activity

1. To check the token that each application receives from the platform, in the validation _middleware_ of the `service-example` app, add the following _log_:

`node/middlewares/validate.ts`

```diff
+ console.log(ctx.vtex.authToken)
  console.log('Received params:', params)

  const { code } = params
  ...
```

2. Now, **link your app** and access the public URL provided in the process. The URL will be something like `https://{workspace}-{account}.myvtex.com/_v/status/:code`. Replace `code` with`200` and, after accessing the URL, check the content that was logged in `console.log` through the`vtex link` process.
   ![console.log Token example](https://user-images.githubusercontent.com/18706156/93616134-b4206580-f9aa-11ea-8331-0fbecc7cf586.png)

> You can check the contents of this token on the website https://jwt.io/. It is a token similar to your personal token (run the command `vtex local token`), but it represents the application you are developing and will contain the permissions that were requested by this app in`manifest.json`.
