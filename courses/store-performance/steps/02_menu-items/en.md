# Optimizing menus

The menu is one of the critical performance points in a store. Because it is present on (almost) all pages, when poorly optimized, it can cause any page to have performance problems regardless of how well implemented it is. In this step, we will learn how to optimize its implementation to not only make it possible to edit it on the Site Editor but also to reduce the overhead of blocks needed in its definition.

## Props vs children

In general, a menu implementation in a store follows the following pattern:

```json
{
  "vtex.menu@2.x:menu#category-menu": {
    "children": [
      "menu-item#category-electronics",
      "menu-item#category-major-appliances",
      "menu-item#category-small-appliances"
    ]
  },
  "menu-item#category-electronics": {
    "props": {
      "id": "menu-item-category-electronics",
      "type": "custom",
      "iconId": null,
      "highlight": false,
      "itemProps": {
        "categoryId": 153,
        "type": "internal",
        "href": "/electronics/",
        "noFollow": true,
        "tagTitle": "Electronics",
        "text": "Electronics"
      }
    }
  },
  ...
}
```

There are two problems with implementing a menu this way:

1. By using `children`, the menu now has an implementation similar to that of a _layout_, which means that all the content inside it is not easily editable in the Site Editor

2. For each new menu that is created, it is necessary to define a new block, which increases the overhead of the blocks that are necessary to compose a page

## Activity

1. To improve the menu performance of our _ Appliance Store _, go to the `/store/blocks/header/category-menu.jsonc` file and remove your `children` section:

   ```diff
   {
     "vtex.menu@2.x:menu#category-menu": {
   -   "children": [
   -     "menu-item#category-electronics",
   -     "menu-item#category-major-appliances",
   -     "menu-item#category-small-appliances"
   -   ]
     }
     ...
   }
   ```

**NOTE:** Do not delete the definitions of these blocks, they are being used elsewhere

2. Now add a new section of `props` and an array of `items`:

   ```diff
   {
     "vtex.menu@2.x:menu#category-menu": {
   +   "props": {
   +     "items": []
   +   }
     }
     ...
   }
   ```

3. To wrap it up, for each of the `menu-items` we had (`"menu-item#category-electronics"`;`"menu-item#category-major-appliances"`;`"menu-item#category-small-appliances "`), add your `props` as array items that we created:

   ```diff
   {
     "vtex.menu@2.x:menu#category-menu": {
       "props": {
         "items": [
   +       {
   +         "id": "menu-item-category-electronics",
   +         "type": "custom",
   +         "iconId": null,
   +         "highlight": false,
   +         "itemProps": {
   +           "categoryId": 153,
   +           "type": "internal",
   +           "href": "/electronics/",
   +           "noFollow": true,
   +           "tagTitle": "Electronics",
   +           "text": "Electronics"
   +         }
   +       }
   +       ...
         ]
       }
   ```

The expected result is a menu exactly the same as the one we had, but now we are able to control it through the Site Editor and add new items.

![image](https://user-images.githubusercontent.com/18701182/93832191-53638800-fc4b-11ea-9b51-b2ba59ebdb47.png)
