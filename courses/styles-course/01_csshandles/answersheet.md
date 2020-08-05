```store/blocks/home.jsonc
{
    ...
    "callToActionMode": "button",
    "callToActionText": "Explore",
    "callToActionUrl": "/sale/d",
    "textAlignment": "center"
    "textAlignment": "center",
    "blockClass": "vintage"
    }
  },
  "info-card#button-left": {
    ...
    "subhead": "Give your kitchen a cool style adding warm metallic finishes.<br>Available until January 2020.",
    "callToActionMode": "link",
    "callToActionText": "Go to collection",
    "textAlignment": "center"
    "textAlignment": "center",
    "blockClass": "metal"
    }
  }
}
```

```styles/css/vtex.store-components.css
.infoCardHeadline {
    font-family: serif;
    font-size: 2.25rem;
    font-weight: bold;
    color: black;
    border: 2px solid black;
    padding: 24px;
}

.infoCardCallActionContainer :global(.vtex-button) {
    color: white;
    background-color: gray;
    border: transparent;
}

.infoCardCallActionContainer :global(.vtex-button):hover {
    color: gray;
    background-color: white;
    border: transparent;
}

.infoCardContainer--vintage {
    background-color: #edcfd1
}

.infoCardContainer--metal {
    background-color: #e1e1e1;
}

.infoCardContainer {
    max-width: 1260px;
    margin: 0 auto;
    padding: 0;
}
```
