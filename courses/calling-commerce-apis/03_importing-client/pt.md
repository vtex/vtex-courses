# Introdução

Neste passo você aprenderá como buscar Clients já prontos que abstraem as APIs de Commerce, e como importá-los para sua app no VTEX IO. Importaremos o client `Catalog` que permitirá que busquemos detalhes sobre um SKU dentro da plataforma VTEX.

## Clients

*Clients*, no VTEX IO, são abstrações para serviços externos e é como, nativamente, fazemos requisições em serviços de backend. Você pode ler um pouco sobre eles [aqui](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-1dbd20c928c642d0ba059d5efbe7874b).

## VTEX IO Commerce Clients

O pacote [Commerce Clients](https://github.com/vtex/commerce-io-clients/blob/master/src/clients/catalog.ts) é uma biblioteca Typescript que oferece vários **clientes já configurados** para acessar as APIs de Core Commerce da VTEX. Para usá-lo em sua app, basta instalá-lo na pasta `node/` rodando: 

`yarn add @vtex/clients`

## Custom Clients

Caso você não encontre o Client que você deseja para um serviço de Core Commerce da VTEX, recomendamos que você **envie um Pull Request** para o repositório `commerce-clients`. Ficaremos felizes em revisar e, eventualmente, mergear sua contribuição.

Mas, caso o serviço que você esteja tentando acessar seja um provedor externo (ex: API do Here Maps), recomendamos que você crie o Client na sua própria app seguindo [estes passos](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-1dbd20c928c642d0ba059d5efbe7874b).

# Importando um Client

Vamos agora importar um Client do módulo **Catalog** em nossa app. Para isso, utilizaremos a app [`service-example`](https://github.com/vtex-apps/service-example) como modelo. Caso você ainda não tenha essa aplicação clonada locamente para outro curso, rode o seguinte comando:

`git clone https://github.com/vtex-apps/service-example`

Após isso, abra no seu editor o código da app que foi baixado na pasta `service-example`.

Como o Client que usaremos é oferecido no pacote de Commerce Clients, vamos realizar a instalação. **Dentro da pasta `node`, rode o seguinte comando:**

`yarn add @vtex/clients`

Agora que o pacote foi instalado, precisamos configurar o Client para utilizá-lo nos _resolvers_  e _middlewares_ de nossa app. Para isso, precisamos abrir o arquivo `node/clients/index.ts` e:

1. Importar o Client `Catalog` a partir da biblioteca `@vtex/clients`.
2. Adicionar o _getter_ `catalog`, similar ao método acima na classe `Clients`.

```
+ import { Catalog } from '@vtex/clients'
...
  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
```

Pronto! Agora, em qualquer uma das funções de _resolver_ GraphQL ou _middlewares_ de serviço podem utilizar este cliente através de `ctx.clients.catalog`. Por conta do Typescript, conseguimos até ver os métodos e suas respectivas assinaturas:

