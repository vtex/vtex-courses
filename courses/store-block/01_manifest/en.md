# Getting to know an app on VTEX IO

In order to build a complete custom application with VTEX IO, it's necessary to understand some concepts that are going to be presented now and it all starts with an important file of an app: the `manifest.json`.

### Manifest file

This file define some basic configurations and abstractions that are needed for the build of your application to work. In this step, some fields of this file are going to be explained, which are:
- vendor
- name
- version
- dependencies

Let's begin!

### *vendor*

It defines the name of the VTEX account that is developing the app. This account is responsible for its maintenance and distribution (the app can be installed in other accounts or only in its own)

>The `vtex` vendor is used for native apps

### *name* 

It identifies the name of the application. It should not contain any special characters (except from `-`) or uppercase characters.

### *version* 

It identifies the current app version. We use the [Semantic Versioning 2.0.0](https://semver.org/) specification for versioning. The format is well defined, divided in *patch*, *minor* and *major* releases.

You can find bellow a summary of the specification: 

- *Patches*: Should be used for bug fixes that are backwards compatible 
- *Minors*: Should be used to add a new backwards compatible feature 
- *Majors*: Should be used when API incompatible changes are made (*breaking changes*)

For example: If an API is at version `2.3.2` and it adds a new non breaking change feature, it can then be updated to version `2.4.0`.

At the moment the deployment is made, there is a worker called *housekeeper* which is responsible for updating automatically the new version for every account. It will, therefore, update all new *minor* and *patch* releases because of its backwards compatibility. It will not, however, automatically update *major* versions since it might come with dependency changes. 

### *dependencies*

An app might depend on other applications. This field lists all of the necessary dependencies for the correct app functioning. 

## Example

In the example of the `manifest.json` structure below, it's possible to see characteristics pointed out above. In particular, the app version is `0.0.1` and these numbers correspond respectively to its *major*, *minor* and *patch*.

```json
{
  "vendor": "vtex",
  "name": "countdown",
  "version": "0.0.1",
  "title": "Countdown",
  "description": "Countdown component",
  "defaultLocale": "pt-BR",
  "builders": {
    "messages": "1.x",
    "store": "0.x",
    "react": "3.x"
  },
  "mustUpdateAt": "2019-04-02",
  "scripts": {
    "postreleasy": "vtex publish --verbose"
  },
  "dependencies": {
    "vtex.styleguide": "9.x",
    "vtex.css-handles": "0.x"
  },
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-a pi/master/gen/manifest.schema"
}
```

## About this tutorial
Now that you know more about the manifest, this tutorial will guide you through learning how to develop a custom app with VTEX IO. In the end of it, you will have a fully function app, which is a countdown block for your store.

There are some prerequisities for you to have an amazing experience when doing this tutorial, which are:

- Knowledge on React and how to use hooks
- Basic concepts on GraphQL
- Understand how to develop using Typescript

If you are not familiar with any of those tools, we encourage you to take a look in some documentation:
- [**React.js**](https://reactjs.org/)
- [**React Hook API**](https:/**/reactjs.org/docs/hooks-intro.html)
- [**Typescript documentation**](https://www.typescriptlang.org/)

