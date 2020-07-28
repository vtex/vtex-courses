# Getting to know more about workspaces

## Introduction

Workspaces are usually defined as environments that are versions of the same account, in a way that any changes made in a workspace do not interfere on the work of other developers.

> Workspaces are isolated from one another.

There are three types of workspaces:

- Development workspace: an environment where it's possible to link, develop, install, and publish apps. It's a workspace in which you have more configuration freedom. It does not handle production traffic, be promoted to master nor can be used for A/B testing.
- Production workspace: handles production traffic, can be used for A/B testing, and can be promoted to master workspace. It's not allowed to link apps.
- Master workspace: a **unique** production workspace in which the content reflects what is served to the store's end-user.

## Creating a production workspace

[WIP]