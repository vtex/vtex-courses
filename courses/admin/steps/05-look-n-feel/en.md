# Look'n Feel

## Introduction

The Admin Framework exists to unify channels and make life easier for the store operator. It is important, however, that the visual experience is homogeneous to avoid inconsistency of usability.

In order to facilitate visual integration for the developer, [Styleguide](https://styleguide.vtex.com) is available and with several components that can be used to quickly create administrative screens.

## Activity

1. In step 1, we add `vtex.styleguide` as a dependency, import the styleguide's`Layout` and `PageBlock` so that we can use them:

```
import { Layout, PageBlock } from 'vtex.styleguide'
```

2. Both components are responsible for creating the admin layout that is used by VTEX apps, you can compose them as follows:

```
import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'

const AdminExample: FC = () => {
  return (
    <Layout>
      <PageBlock variation="full">
        <h1>Hello, World!</h1>
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
```

3. By viewing the [PageBlock] documentation (https://styleguide.vtex.com/#/Components/Admin%20structure/PageBlock), we can enrich it by adding a title and description:

```diff
import React, { FC } from "react";
import { Layout, PageBlock } from "vtex.styleguide";

const AdminExample: FC = () => {
  return (
    <Layout>
      <PageBlock
+       title="Titulo"
+       subtitle="Alguma explicação."
+       variation="full"
      >
        <h1>Hello, World!</h1>
      </PageBlock>
    </Layout>
  );
};

export default AdminExample;
```

The expected result should be:

![image](https://user-images.githubusercontent.com/18701182/92802313-cc7df800-f38c-11ea-95a1-035948dbbc85.png)
