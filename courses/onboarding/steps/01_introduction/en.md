# Setting up your development environment for VTEX IO

> 🚧 **Are you a VTEX client or partner?**  
> To complete this training, you’ll need access to a VTEX account. We’re working on ways to provide test accounts for unaffiliated developers, but for now, you must belong to a company that’s already part of our ecosystem.  

> 📘 **Using `appliancetheme` as an example**  
> Throughout this guide, `appliancetheme` is used as a placeholder. Replace it with the name of the VTEX account you have access to.  

---

Before you can use VTEX IO, you’ll need to configure your computer. The steps vary depending on your operating system. Follow the instructions for your platform below.  

### Windows

1. Download and install **Git** from [git-scm.com](https://git-scm.com/download/win).  
2. Download and install **Node.js** from [nodejs.org](https://nodejs.org/pt-br/download/).  
3. Download and install **Yarn** from [classic.yarnpkg.com](https://classic.yarnpkg.com/en/docs/getting-started).  
4. Open the Command Prompt by pressing the Windows key and typing `cmd`.  
5. Run the command:  
   ```bash
   yarn global add vtex
   ```

### **Debian/Ubuntu**

1. Install **Git**:
    ```
    sudo apt-get install git-all
    ```
2. Install **Node.js**:
    ```
    sudo apt install nodejs
    ```
3. Install the VTEX IO CLI:
   ```
   yarn global add vtex
   ```

### macOS

1. Go to the **Homebrew** [page](https://brew.sh/index).
2. Copy the link provided below **Install Homebrew**.

    ![](https://user-images.githubusercontent.com/19495917/91765945-283bca80-ebb0-11ea-943d-4d71db627768.png)

3. Open a terminal by typing `Command + Space` and typing` terminal`.
4. In your terminal, paste the **Homebrew** link and hit `Return` (Enter).
5. After the Homebrew installation is finished, run the command `brew install node`.
6. Now, **install Yarn** by running `brew install yarn`.
7. And finally, install **VTEX Toolbelt** with `yarn global add vtex`.

## Logging into an account

After completing the installation of the VTEX Toolbelt, do the following:

1. Now, run `vtex login appliancetheme` in the Terminal.
2. A VTEX login page will open in your browser. Sign in with the email provided for your training.
3. Go back to the CMD / Terminal, run the `vtex whoami` command, and check if the return message looks like this:
    ```jsx
    info: Logged into appliancetheme as {your email} at production workspace master
    ```
4. Create **a workspace** with the command `vtex use {your workspace name}`. Note that the workspace name must be unique, so use something like your user on GitHub.
    ```jsx
    14: 39: 26.044 - info: You're now using the workspace vtextraining on account appliancetheme!
    ```
