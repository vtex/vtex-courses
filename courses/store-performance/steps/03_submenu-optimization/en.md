# Submenu optimization

In the previous step, we learned how to optimize menu items, making them menu properties instead of child blocks. Some menus, however, have other submenus, such as that of [Store Theme](storetheme.vtex.com):

![image](https://user-images.githubusercontent.com/18701182/93831521-5d848700-fc49-11ea-9773-c2d727013f95.png)

These behave like a _layout_, so there are no optimizations that can be done other than using the `children` behavior. For these cases, the ideal is to go for a hybrid solution, where the parent menus are used with `children` and the leaf menus (last in the menu tree) can be used as `props`.

However, as the user will not see the contents of the submenus when the page is loaded, we can postpone the loading of its content.

## Activity

1. To understand how we can optimize submenus, let's modify our example a little to be more similar to what we have in the Store Theme, start by editing the name of the block we worked on in the previous step (`"vtex.menu@2.x: menu#category-menu "`) to `"vtex.menu@2.x: menu#categories"`:

    ```diff
    // store/blocks/header/category-menu.jsonc
    {
      ...
    - "vtex.menu@2.x:menu#category-menu": {
    + "vtex.menu@2.x:menu#categories": {
      ...
    }
    ```

2. Define a `menu` and a `sub-menu` now in place of the old `#category-menu`, in it we will put all the menu that we had already built:

    ```diff
    {
    + "vtex.menu@2.x:menu#category-menu": {
    +   "children": [
    +     "menu-item#categories"
    +   ]
    + },
    + "menu-item#categories": {
    +   "props": {
    +     "id": "menu-item-custom-categories",
    +     "type": "custom",
    +     "iconId": null,
    +     "highlight": false,
    +     "itemProps": {
    +       "type": "internal",
    +       "href": "#",
    +       "noFollow": true,
    +       "tagTitle": "Categories",
    +       "text": "Categories"
    +     }
    +   },
    +   "blocks": [ "vtex.menu@2.x:submenu#categories" ]
    + },
    + "vtex.menu@2.x:submenu#categories": {
    +   "children": ["vtex.menu@2.x:menu#categories"]
    + },
      "vtex.menu@2.x:menu#categories": {
      ...
    }
    ```

    What we are doing here is to create a level above the menu that we had already defined to then change the navigation to a submenu format, the result should be: 

    ![image](https://user-images.githubusercontent.com/18701182/93835843-fa015600-fc56-11ea-9b0e-b30a281b2d2b.png)

3. In the browser, before your _workspace_ URL, add a `view-source:` and search for `title = "Major Appliances"`, you will see two references in the code, one for _header_ and one for _footer_. This means that when we load the HTML we are bringing these menus together, even if they are not being consumed at the first moment:

    ![image](https://user-images.githubusercontent.com/18701182/93836918-a7299d80-fc5a-11ea-8804-0b2722742e17.png)

4. With the level menu now defined, we can add a new `prop` to the parent menu, in order to prevent the submenus from loading until the user interacts with the categories:

    ```diff
    {
      "vtex.menu@2.x:menu#category-menu": {
    +   "props": {
    +     "experimentalOptimizeRendering": true
    +   },
        "children": [
          "menu-item#categories"
        ]
      },
      ...
    }
    ```

Go back to the source code, refresh the page and search again for `title = "Major Appliances"`

![image](https://user-images.githubusercontent.com/18701182/93837006-f5d73780-fc5a-11ea-84c8-18542756e5a7.png)

See that no reference is found, but that if you browse, the behavior remains the same. This is because the submenus are loaded only after the initial *load*.
