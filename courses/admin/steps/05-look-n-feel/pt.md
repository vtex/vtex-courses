# Homogeneidade visual

## Introdução

O Admin Framework existe para unificar canais e facilitar a vida do operador de loja. É importante, no entanto, que a experiência visual seja homogênea para evitar inconsistência de usabilidade.

A fim de facilitar a integração visual para o desenvolvedor, o [Styleguide](https://styleguide.vtex.com), encontra-se disponível e com vários componentes que podem ser utilizados para criar rapidamente telas administrativas.

## Atividade

1. No passo 1, adicionamos o `vtex.styleguide` como dependência, importe o `Layout` e `PageBlock` do styleguide para que possamos usá-los: 

```
import { Layout, PageBlock } from 'vtex.styleguide'
```

2. Ambos estes componentes são responsáveis por criar o layout de admin que é utilizado pelas apps VTEX, você pode compô-los da seguinte forma: 

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

3. Vendo a documentação do [PageBlock](https://styleguide.vtex.com/#/Components/Admin%20structure/PageBlock), nós podemos enriquecê-lo para adicionar um título e uma descrição:

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

O resultado esperado deve ser: 

![image](https://user-images.githubusercontent.com/18701182/92802313-cc7df800-f38c-11ea-95a1-035948dbbc85.png)

