```store/blocks/footer.jsonc
{
    "footer": {
      "blocks": ["footer-layout.desktop"]
    },
    "footer-layout.desktop": {
      "children": [
        "flex-layout.row#footer-1-desktop"
      ]
    },

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
    },

    "flex-layout.col#footer-left-desktop": {
        "children": [
            "accepted-payment-methods"
        ]
    },

    "flex-layout.col#footer-right-desktop": {
        "children": [
            "social-networks"
        ]
    },

    "social-networks": {
        "props": {
          "socialNetworks": [
            { "url": "https://facebook.com/foo", "name": "Facebook" },
            { "url": "https://twitter.com/foo", "name": "Twitter" },
            { "url": "https://instagram.com/foo", "name": "Instagram" }
          ],
          "showInColor": true
        } 
    },

    "accepted-payment-methods": {
        "props": {
          "paymentMethods": ["Mastercard", "Visa", "Diners Club"],
          "showInColor": true
        }
    }
}
```