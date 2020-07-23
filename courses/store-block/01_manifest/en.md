# Getting to know an app on VTEX IO

## Introduction

Before we start, it's necessary to remind some important concepts of the logical for a better understanding of the logical workflow when developing an app.

## manifest.json

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



