# Installing an app on VTEX IO 

## Introduction
Once you publish an app, you can install it on a VTEX account. Generally, after installing it, there is a robot, called House Keeper, that makes sure all the VTEX accounts have the installed apps kept up to date. Minor and patches versions that are launched are automatically updated on all the accounts.

However, for installing an app for the first time or a major update, it needs to be done manually. In this step, you'll learn how to do that.

## Installing an app

Just as the previous step, it's only necessary a single command to install an app on a specific account. There are two possible situations for this:

- You do not have the root directory of the app's project, but you do know the vendor, the app name and the version you want to install;
- You do have the app's project on your computer.

In the first case, you can install it by running the following command:

```
vtex install {vendor}.{appName}@{version}
```

In case of having the app's project, you just need to go to its folder and run the following command:
```
vtex install
```

> In both cases, you need to be sure that you're on the correct account, the one you want to install the app on.

Considering the case that we have - having the app's project - it's simple as running the second command that was mentioned before. 

First, make sure that you're on the correct account, by using `vtex whoami`; you're going to install the app on `appliancetheme` account. By running the command, the result should be as the following screenshot:

![image](https://user-images.githubusercontent.com/19495917/88828271-62750f00-d1a1-11ea-89d0-068340f8b522.png)

Now, go to the correct folder, which is the app's project, and run the following command:

```
vtex install
```

After running it, it's expected for you to see a message that says the app was successfully installed, just the following one:

![image](https://user-images.githubusercontent.com/19495917/88828538-c0095b80-d1a1-11ea-86cf-bac9cfdf554e.png)

Tip: if you want to list the apps that are currently installed on the account, you can run the `vtex ls` command. You'll see a list similar to the following one:

![image](https://user-images.githubusercontent.com/19495917/88828816-1e363e80-d1a2-11ea-88bb-b3f082b90877.png)

> **Attention**: There is more information when running this command, but it was kept from the screenshot because of its size.