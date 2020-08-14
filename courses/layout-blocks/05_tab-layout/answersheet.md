```store/blocks/about-us.jsonc
{
  "store.home": {
    "blocks": ["tab-layout#home"]
  },
  "tab-layout#home": {
    "children": ["tab-list#home", "tab-content#home"]
  },
  "tab-list#home": {
    "children": ["tab-list.item#home1", "tab-list.item#home2"]
  },
  "tab-list.item#home1": {
    "props": {
      "tabId": "majorAppliances",
      "label": "Major Appliances",
      "defaultActiveTab": true
    }
  },
  "tab-list.item#home2": {
    "props": {
      "label": "Electronics",
      "tabId": "electronics"
    }
  },
  "tab-content#home": {
    "children": ["tab-content.item#home1", "tab-content.item#home2"]
  },
  "tab-content.item#home1": {
    "children": ["rich-text#home1"],
    "props": {
      "tabId": "majorAppliances"
    }
  },
  "tab-content.item#home2": {
    "children": ["rich-text#home2"],
    "props": {
      "tabId": "electronics"
    }
  },
  "rich-text#home1": {
    "props": {
      "text": "Área do conteúdo da tab-list.item com  tabId = majorAppliances",
      "textPosition": "CENTER",
      "font": "t-heading-3"
    }
  },
  "rich-text#home2": {
    "props": {
      "text": "Área do conteúdo da tab-list.item com  tabId = electronics",
      "textPosition": "CENTER",
      "font": "t-heading-3"
    }
  }
}

```