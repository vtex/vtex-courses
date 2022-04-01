# Getting to know an app on VTEX IO

In order to build a complete custom application with VTEX IO, it's necessary to understand some concepts that are going to be presented now and it all starts with an important file of an app: the `manifest.json`.

### Manifest file

This file defines some basic configurations and abstractions that are needed for the build of your application to work. In this step, some fields of this file are going to be explained, which are:

- vendor
- name
- version
- dependencies

Let's begin!

### _vendor_

It defines the name of the VTEX account that is developing the app. This account is responsible for its maintenance and distribution (the app can be installed in other accounts or only in its own)

> The `vtex` vendor is used for native apps.

### _name_

It identifies the name of the application. It should not contain any special characters (except from `-`) or uppercase characters.

### _version_

It identifies the current app version. We use the [Semantic Versioning 2.0.0](https://semver.org/) specification for versioning. The format is well defined, divided in _patch_, _minor_ and _major_ releases.

You can find bellow a summary of the specification:

- _Patches_: Should be used for bug fixes that are backwards compatible
- _Minors_: Should be used to add a new backwards compatible feature
- _Majors_: Should be used when API incompatible changes are made (_breaking changes_)

For example: If an API is at version `2.3.2` and it adds a new non breaking change feature, it can then be updated to version `2.4.0`.

At the moment the deployment is made, there is a worker called _housekeeper_ which is responsible for updating automatically the new version for every account. It will, therefore, update new _minor_ and _patch_ releases because of its backward compatibility. It will not, however, automatically update _major_ versions since it might come with dependency changes.

### _dependencies_

An app might depend on other applications. This field lists all of the necessary dependencies for the correct app functioning.

## Example

In the example of the `manifest.json` structure below, it's possible to see characteristics pointed out above. In particular, the app version is `0.0.1` and these numbers correspond respectively to its _major_, _minor_ and _patch_.

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
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```
