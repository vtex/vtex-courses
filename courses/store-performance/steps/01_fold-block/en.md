# Improving initial load

## Introduction

Performance is an increasingly critical point in the creation of a store and, to ensure that your theme is within our best optimization practices, we created this course totally focused on points of improvement in a theme.

For this course, we can use a complete theme to focus only on points for improvement.

Clone the repository:
[https://github.com/vtex-apps/demostore-theme](https://github.com/vtex-apps/demostore-theme)

```
git clone https://github.com/vtex-apps/demostore-theme
```

## Fold block

Not all content on a page needs to be loaded first. Initially, when a user enters the store there is a limit on how much he can see. That is why with the `__fold__` block you are able to control what will initially be seen, thus reducing the need to load data in the initial * load *. Automatically, what is below `__fold__` is, then, loaded after the essentials are already available and the user starts to * scroll * down.



## Activity

1. Run a `vtex workspace reset` ensuring that no other themes are linked in the store

2. Go to the cloned repository directory and *link* and then the offered theme:

    ```
    vtex link
    ```

    You should see the following store:

    ![screencapture-savioperformance-appliancetheme-myvtex-2020-09-21-19_42_00](https://user-images.githubusercontent.com/18701182/93828834-91a87980-fc42-11ea-9f84-dd3053822621.png)

3. The content below the *Clearance* shelf cannot be seen by the user, so let's optimize the first upload, postponing the * fetching * of this. To do this, in the `home.jsonc` file in the `/store/blocks/home/` directory, add the `__fold__` block just below the `"shelf#clearance"`:

    ```diff
    "store.home": {
        "blocks": [
          "flex-layout.row#slider",
          "shelf#new-arrivals",
          "shelf#clearance",
    +     "__fold__",
          "flex-layout.row#newsletter",
          "rich-text#brands",
          "flex-layout.row#brands",
          "rich-text#instagram",
          "flex-layout.row#instagram"
        ]
      }
    ```

In your browser, then, run a CTRL (Cmd) + `-` (zooming out to be able to see the whole page) and notice that everything below the` Clearance` is loaded after (as soon as the *scroll* is executed) to what is above:

![image](https://user-images.githubusercontent.com/18701182/93830718-5fe5e180-fc47-11ea-9caf-f7b8a10b0a23.png)


