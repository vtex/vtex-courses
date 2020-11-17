# Admin Framework

# Introduction

In the previous courses we learned about the Store Framework, a storefront construction engine built using VTEX IO. Like the Store Framework, the Admin Framework sets out to solve a specific use case: extensions for the administrative panel.

Complex commerce operations almost never manage to work with a single integrated SaaS solution, ERP, personalization, tracking, digital marketing, among others, are needed. VTEX understands, however, that having a single point of contact would greatly facilitate the work of operators, making the admin a universal tool. It is with this premise that the Admin Framework was created, bringing the possibility of extending backoffice not only to create dashboards that are characteristic of a client and its segment, but also to bring insights and operation from external providers.

# Activity

An admin app works much like the store block app. Let's start the course by cloning a reactor template repository and evolve to make it an admin app:

1. Clone the react app template:

```
git clone https://github.com/vtex-apps/react-app-template admin-course
```

2. Open the `admin-course` in your text editor and add the admin builder to `manifest.json`:

```diff
//manifest.json
{
  "vendor": "CHANGE_ME",
  "name": "CHANGE_ME",
  "version": "0.0.0",
  "title": "CHANGE_ME",
  "description": "CHANGE_ME",
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
+   "admin": "0.x"
  },
  "dependencies": {},
  "registries": [
    "smartcheckout"
  ],
  "policies": [],
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```

3. Edit the `vendor`,`name`, `title` and`description` of the application:

```diff
//manifest.json
{
+ "vendor": "appliancetheme",
+ "name": "admin-sandbox",
  "version": "0.0.0",
  "title": "Admin Sandbox",
  "description": "Admin Sandbox",
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "admin": "0.x"
  },
  "dependencies": {},
  "registries": [
    "smartcheckout"
  ],
  "policies": [],
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```

**NOTE:** If you are taking the course at your own store and developing your own app, remember that you will have to go through the [form of whitelist](https://forms.gle/ovi4h7mnwgUKS2hu5).

5. Add `vtex.styleguide` as a dependency, we will use it later in the course:

```diff
//manifest.json
{
  "vendor": "appliancetheme",
  "name": "admin-sandbox",
  "version": "0.0.0",
  "title": "Admin Sandbox",
  "description": "Admin Sandbox",
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "admin": "0.x"
  },
  "dependencies": {
+   "vtex.styleguide": "9.x"
  },
  "registries": [
    "smartcheckout"
  ],
  "policies": [],
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```

6. In the project's root directory, create an `/admin` directory, its structure should be:

```diff
|
|_ CHANGELOG.md
|_ docs/
|_ messages/
|_ react/
+|_ admin/
|_ package.json
|_ manifest.json
|_ yarn.lock
```
