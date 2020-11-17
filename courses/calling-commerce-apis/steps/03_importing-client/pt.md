# Importando um Client em sua aplicação

## Introdução

Neste passo você aprenderá como buscar _Clients_ já prontos que abstraem as APIs de Core Commerce, além de como importá-los para sua app no VTEX IO. Importaremos o _Client_ `Catalog` que permitirá que busquemos detalhes sobre um SKU dentro da plataforma VTEX.

## Clients

_Clients_, no VTEX IO, são abstrações para serviços externos e são usados nativamente para fazermos requisições externas em serviços de _backend_. Você pode ler um pouco sobre eles [aqui](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-1dbd20c928c642d0ba059d5efbe7874b).

## VTEX IO Commerce Clients

O pacote [Commerce Clients](https://github.com/vtex/commerce-io-clients/blob/master/src/clients/catalog.ts) é uma biblioteca Typescript que oferece vários **clients já configurados** para acessar as APIs de Core Commerce da VTEX. Para usá-lo em sua app, basta instalá-lo na pasta `node/` rodando:

`yarn add @vtex/clients`

## Custom Clients

Caso você não encontre o _Client_ que você deseja para um serviço de Core Commerce da VTEX, recomendamos que você **envie um Pull Request** para o repositório `commerce-clients`. Ficaremos felizes em revisar e, eventualmente, mergear sua contribuição.

Mas, caso o serviço que você esteja tentando acessar seja um provedor externo (ex: API do Here Maps), recomendamos que você crie o _Client_ na sua própria app seguindo [estes passos](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-1dbd20c928c642d0ba059d5efbe7874b).

# Atividade

1. Vamos agora importar um _Client_ do módulo **Catalog** em nossa app. Após ter clonado a app de boilerplate, abra no seu editor o código da app que foi baixado na pasta `service-example`.

2. Como o _Client_ que usaremos é oferecido no pacote de Commerce Clients, vamos realizar a instalação. **Dentro da pasta `node`, rode o seguinte comando:**

`yarn add @vtex/clients`

3. Agora que o pacote foi instalado, precisamos configurar o _Client_ para utilizá-lo nos _resolvers_ e _middlewares_ de nossa app. Para isso, precisamos que você abra no seu editor o arquivo `node/clients/index.ts`.

4. Importe o _Client_ `Catalog` a partir da biblioteca `@vtex/clients`.
5. Adicione o _getter_ `catalog`, similar ao método acima na classe `Clients`.

```diff
+    import { Catalog } from '@vtex/clients'
...
+    public get catalog() {
+      return this.getOrSet('catalog', Catalog)
+    }
```

Pronto! Agora, qualquer uma das funções de _resolver_ GraphQL ou _middlewares_ de serviço pode utilizar este Client através de `ctx.clients.catalog`. Por conta do Typescript, é possível ter _autocomplete_ dos métodos e ver detalhes dos tipos necessários nos parâmetros.
