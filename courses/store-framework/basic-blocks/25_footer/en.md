# Footer

## :sparkles: **Branch:** footer

## Introduction

In this step, we will learn how to create a component that is commonly seen as unimportant, but which is critical to providing a good user experience: the [footer](https://vtex.io/docs/components/all/vtex.store-footer/).

Few users scroll until the footer. However, the ones that do make it that far may be looking for information that is usually housed in this block, such as links to social media and payment methods accepted by the store. It can also house customized pages that direct to the company's recruitment site, customer support and category menus. 

FOTO Footer

## Configuring the Footer

The Footer block, just as the Header, is responsive, meaning that it can be configured to adapt to different devices, such as desktop and mobile.

Below, we can see an Footer implementation example for desktop:

```json
{
  "footer": {
    "blocks": ["footer-layout.desktop"]
  },
  "footer-layout.desktop": {
    "children": [
      "flex-layout.row#footer-1-desktop"
    ]
  }
}
```

## Activity

We are now going to configure a footer for the store's main page, considering the above-mentioned example code for desktop and mobile.

We will not implement the menu during this activity, since it's already be dealt with during the Header context. We will instead look at accepted payment methods and the store's social media networks. 

1. In the `footer.jsonc` file, copy the code above and to use in your theme; 
2. Thereafter, declare the following block:

    ```json
      "flex-layout.row#footer-1-desktop": {
        "children": [
          "flex-layout.col#footer-left-desktop",
          "flex-layout.col#footer-right-desktop"
        ],
        "props": {
          "blockClass": "footer-row",
          "paddingTop": 7,
          "paddingBottom": 7
        }
      }
    ```

3. Based on the block above, build the `flex-layout.col#footer-left-desktop`, having the following children: `accepted-payment-methods`:

    ```json
        "flex-layout.col#footer-left-desktop": {
            "children": [
                "accepted-payment-methods"
            ]
        },
    ```

4. Then, build the `accepted-payment-methods` block with the following payment methods: `MasterCard`, `Visa` and `Diners Club`:

    ```json
        "accepted-payment-methods": {
            "props": {
              "paymentMethods": ["Mastercard", "Visa", "Diners Club"],

            }
        }
    ```
> And just to gain a bit more knowledge, find out how to display payment methods in color in [this documentation](https://vtex.io/docs/components/all/vtex.store-footer/)

    ```diff
        "accepted-payment-methods": {
            "props": {
              "paymentMethods": ["Mastercard", "Visa", "Diners Club"],
    +          "showInColor": true
            }
        }
    ```

5. In this step, we will use the `social-networks` block to display our store's social media networks. We want to display `Facebook`, `Instagram` and `Twitter`.

    ```json
        "social-networks": {
            "props": {
              "socialNetworks": [
                { "url": "https://facebook.com/foo", "name": "Facebook" },
                { "url": "https://twitter.com/foo", "name": "Twitter" },
                { "url": "https://instagram.com/foo", "name": "Instagram" }
              ]
            } 
        },
    ```

6.  Check the documentation for more on this, and then implement as the social media networks as children of the `flex-layout.col#footer-right-desktop` block:

    ```json
        "flex-layout.col#footer-right-desktop": {
            "children": [
                "social-networks"
            ]
        },
    ```

7. Lastly, make the social media network logos appear in color. Read the footer's [documentation](https://vtex.io/docs/components/all/vtex.store-footer/) for more on this.

    ```diff
        "social-networks": {
            "props": {
              "socialNetworks": [
                ...
              ],
    +          "showInColor": true
            } 
        },
    ```

:information_source: Remember to access the footer's [documentation](https://vtex.io/docs/components/all/vtex.store-footer/) in case you have any questions during the activity. 

Expected result:
![image](https://user-images.githubusercontent.com/12139385/70229436-00105f80-1735-11ea-9c26-9f16a3820f52.png)

---
## Well done!
This is the last step of the Store Framework course, you did really well and we hope you've learned a lot until this moment. **Congratulations!**

If you want to continue learning more about how to develop using VTEX IO, we encourage you to start our next course, which focus on teaching how to develop custom blocks for VTEX Store Framework. You can find it in the [Store Block Course on Learning Lab](https://lab.github.com/vtex-trainings/vtex-store-block-course).