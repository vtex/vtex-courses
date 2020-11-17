# Publishing an app on VTEX IO

## Introduction

After being presented to the concepts regarding the types of workspaces, we're going to teach how to publish an app on VTEX IO. In order to realize operations like these, we use commands on [VTEX Toolbelt](https://developers.vtex.com/docs/vtex-io-documentation-toolbelt), our CLI that gives you access to the platform features.

## Using VTEX Toolbelt to publish an app

To publish an app on VTEX IO, one needs to use the following command on VTEX Toolbelt inside the app's folder:

```
vtex publish
```

> Which app are we going to publish?

At the end of the Store Framework course, you implemented a functional store and it's that app you are going to publish.

> What if I did not take the Store Framework course?

Do not worry, for this step, you can use any theme that you already have and publish it. In case of not having one, you can go back to our courses and create one!

With an application of a theme, go to `manifest.json` file and change the app name to the following format:

```
trainingweek-{{devname}}
```

where `devname` is a name of your choice, that identifies you. Besides, it's necessary to change the application vendor, which **needs** to be `appliancetheme`.

Below you will find a part of a valid `manifest.json` file with the previous changes already made:

```json
{
    "vendor": "appliancetheme",
    "name": "trainingweek-fabiana",
    ...
}
```

By the end of this step, we're are going to effectively publish the app. Inside the app's directory, run the command that was mentioned at the beginning of the step. When running the command, you will need to confirm the action, as you can see in the following image:

![image](https://user-images.githubusercontent.com/19495917/88819289-2d16f400-d196-11ea-8cb6-f86a902c4887.png)

After confirming it, the app's building will start and, after finishing it, you should see a message saying that the publishing process was successful.

![image](https://user-images.githubusercontent.com/19495917/88824809-3061ae00-d19d-11ea-86c1-4118bf609ec3.png)

Well done! You've just published your first app!
