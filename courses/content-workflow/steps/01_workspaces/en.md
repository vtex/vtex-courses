# Getting to know more about workspaces

## Introduction

Workspaces are environments isolated from each other in terms of app development. They can be understood as different versions of the same VTEX account. In practice, changes performed in a particular workspace do not affect your store's live version or other developers' work.

There are two main types of workspaces:

- Development workspace: allows linking, developing, installing, and publishing apps. It provides more configuration freedom. But it can't handle production traffic, be promoted to master, or be used for A/B testing.
- Production workspace: supports production traffic and A/B testing. It can be promoted to master, but linking apps is forbidden.
- Master workspace: a **unique production workspace** that reflects the content served to the store's end-user.

>⚠️ While each workspace operates independently when it comes to app development, they share the same VTEX platform modules accessible via Admin. Then, any changes made in a specific workspace will be reflected in all others. 

## Creating a production workspace

In this step, we're going to create a production workspace and it's as simple as running the following command of our CLI:

```
vtex use {WorkspaceName} --production
```

> `WorkspaceName` is the name that you want to use to identify your workspace.

Once you run the command, if the provided name does not exist, one will be asked if want to create it, as you can see in the following image:

![image](https://user-images.githubusercontent.com/19495917/88816710-0efbc480-d193-11ea-8918-1d595c7595f5.png)

In that case, you just need to type `y`:

![image](https://user-images.githubusercontent.com/19495917/88816914-4cf8e880-d193-11ea-9676-3647626a3236.png)

You're done! Your production workspace has been created! In order to verify which workspace and account you are currently on, you can use the following command:

```
vtex whoami
```
