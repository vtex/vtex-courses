# Getting to know more about workspaces

## Introduction

Workspaces are usually defined as environments that are versions of the same account, in a way that any changes made in a workspace do not interfere with the work of other developers.

> Workspaces are isolated from one another.

There are three types of workspaces:

- Development workspace: an environment where it's possible to link, develop, install, and publish apps. It's a workspace in which you have more configuration freedom. It does not handle production traffic, be promoted to master nor can be used for A/B testing.
- Production workspace: handles production traffic, can be used for A/B testing, and can be promoted to master workspace. It's not allowed to link apps.
- Master workspace: a **unique** production workspace in which the content reflects what is served to the store's end-user.

## Creating a production workspace

In this step, we're going to create a production workspace and it's as simple as running the following command of our CLI:

```
vtex use {WorkspaceName} --production
```

>`WorkspaceName` is the name that you want to use to identify your workspace. 

Once you run the command, if the provided name does not exist, one will be asked if want to create it, as you can see in the following image:

![image](https://user-images.githubusercontent.com/19495917/88816710-0efbc480-d193-11ea-8918-1d595c7595f5.png)

In that case, you just need to type `y`:

![image](https://user-images.githubusercontent.com/19495917/88816914-4cf8e880-d193-11ea-9676-3647626a3236.png)

You're done! Your production workspace has been created! In order to verify which workspace and account you are currently on, you can use the following command:

```
vtex whoami
```
