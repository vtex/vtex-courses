# Encontrando as APIs do VTEX Commerce

## Introdução

Neste passo, você aprenderá como encontrar a documentação das APIs da VTEX, além de entender as diferenças para chamá-las através do VTEX IO.

## Portal do Desenvolvedor

Antes de começar a desenvolver sua integração com as APIs de Commerce da VTEX, é fundamental que você possa **descobrí-las** e entender seu funcionamento. O [Portal de Desenvolvedor](https://developers.vtex.com/reference/get-to-know-vtex-apis) da VTEX lista todas as APIs disponíveis, além de conter explicações sobre como usar cada um dos _endpoints_ oferecidos.

![Portal de Desenvolvedor da VTEX](https://user-images.githubusercontent.com/18706156/92934603-0f3be080-f41e-11ea-95f7-34f0238a8d96.png)

A maioria das APIs seguem a especificação [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Também é importante ressaltar que todas as chamadas **operam sobre uma conta** na VTEX.

## Diferenças no VTEX IO

O VTEX IO é um _first-class citizen_ para as APIs da VTEX e, por isso, existem algumas diferenças usando-as na sua aplicação. O Portal do Desenvolvedor recebe alguns parâmetros de identificação e autorização que não são necessários quando chamando os _endpoints_ pelo VTEX IO.

## Autenticação

Tradicionalmente, a VTEX autentica chamadas para rotas privadas (`/pvt`) utilizando um par **AppKey** e **AppToken**, obtidos no painel de administração de uma conta. No VTEX IO **não é recomendado que se use esse par de chave e token para se autenticar**, já que a plataforma oferece outra maneira mais escalável e elegante.

Todas as apps que são desenvolvidas no VTEX IO representam um **recurso** na plataforma, o que possibilita uma aplicação interagir com outros sistemas **em nome de si mesma**, devidamente autorizada pelo administrador da conta. Fica a cargo do desenvolvedor da app **declarar as permissões necessárias**.

Na prática, isso significa duas coisas:

1. Tanto o endpoint como o _role_ necessários para acessar alguma API devem ser **declarados no `manifest.json` da app**.
2. As chamadas devem ser realizadas com **um token do VTEX ID** ao invés do par **AppKey** e **AppToken**.

Você aprenderá como realizar essas configurações logo mais!

> O _role_, falando sobre autorização dentro da VTEX, representa um "papel" no _License Manager_, gerenciador de usuários e autorizações na plataforma. Alguns módulos da VTEX não requerem nenhum _role_ específico, mas outros podem requerer e são necessários ao "caller" para conseguir acessar aquele recuros.

## Token da app e Token do usuário

- Cada app no VTEX IO, automaticamente, recebe um `authToken` que pode ser utilizado para chamar APIs externas. Esse token, que pode ser obtido no objeto de contexto em qualquer requisição, tem todas as permissões que foram declaradas no campo `policies` do manifesto da aplicação.
- É necessário verificar se faz sentido usar este token nas requisições, especialmente ao acessar **sistemas críticos** das contas. Caso você identifique uma situação assim, também é possível utilizar o **token do usuário que está usando a app**.

## `accountName`

Como dito, todas as chamadas para módulos do Commerce da VTEX são relativas à alguma `account` na VTEX, e tradicionalmente essa informação é passada através da _query string_ `?an`. Porém, ao longo do curso, iremos apresentar abstrações criadas no VTEX IO que **dispensam essa configuração manual**.

Vale ressaltar que as apps que são desenvolvidas no VTEX IO **devem funcionar independente da conta onde estão instaladas**, por isso é importante que nenhuma destas informações críticas seja _"hard-coded"_.

## Atividade

1. Para verificar o token que cada aplicação recebe da plataforma, no _middleware_ de validação da app `service-example`, adicione o seguinte _log_:

`node/middlewares/validate.ts`

```diff
+ console.log(ctx.vtex.authToken)
  console.log('Received params:', params)

  const { code } = params
  ...
```

2. Agora, **linke sua app** e acesse a URL pública fornecida no processo. A URL será algo como `https://{workspace}--{account}.myvtex.com/_v/status/:code`. Substitua `code` por `200` e, após acessar a URL, verifique o conteúdo que foi loggado no `console.log` através do processo do `vtex link`.
   ![Exemplo do console.log do Token](https://user-images.githubusercontent.com/18706156/93616134-b4206580-f9aa-11ea-8331-0fbecc7cf586.png)

> Você pode verificar o conteúdo desse token no site https://jwt.io/. Ele é um token parecido com o seu token pessoal (rode o comando `vtex local token`), porém representa a aplicação que você está desenvolvendo e conterá as permissões que foram solicitadas por esta app no `manifest.json`.
