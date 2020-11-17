# Services in VTEX IO

## Introduction

The VTEX IO platform allows developers to create unique commerce experiences using Web technologies. It’s possible to create frontend blocks for Store Framework, backend services exposing REST or GraphQL APIs, and combine a series of VTEX modules into a complete solution, packaging it into an app.

As VTEX IO powers big e-commerce operations, they require **running code on a server**. **Services** are how we run **Node.js or .NET** code on VTEX IO infrastructure, backed by API abstractions to improve developer experience.

## Services

A **Service** must be exported from a VTEX IO app, just like themes or store blocks, using builders `node` or `dotnet`. With these, you are able to develop a REST API without having to set up a server, GraphQL APIs and routes.

Services in VTEX IO support one-command rollbacks and continuous integration. They can export internal and external routes and run on top of Kubernetes. You can count on VTEX IO to manage the scalability of your services.

Inside the `/node` folder of a service lives `service.json`, where it´s possible to **declare routes that the service must respond to** and other configurations like _timeout_ and _memory_.

During this course, you will implement some services in VTEX IO and learn a bit more about the possibilities that they offer to your development.

## About this course

This course will guide you will guide you through learning how to develop a service app with VTEX IO. There are some prerequisities for you to have an amazing experience when doing this course, which are:

- Basic concepts on GraphQL
- Understand how to develop using Typescript

If you are not familiar with any of those tools, we encourage you to take a look in some documentation:

- [**Typescript documentation**](https://www.typescriptlang.org/)
- [**GraphQL documentation**](https://graphql.org/learn/)

In order for you to start the course, you can use the template repository that we provide will all the initial files that you need to have so you can get started. You will find the repository in this [link](https://github.com/vtex-trainings/service-course-template).

> If you do not quite understand how to use a template repository, you can check this [article](https://developers.vtex.com/page/how-to-use-a-template-repository).
