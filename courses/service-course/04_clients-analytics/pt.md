# Conhecendo um pouco mais sobre clientes

## Introdução

Neste passo, alguns conceitos referentes a clientes serão brevemente explicados e é apresentado quais são os clientes necessários para este curso: **cliente de analytics** e **cliente do Master Data**. O primeiro será implementado neste passo e você também aprenderá como utilizar um cliente que já está implementado na nossa API.

## Sobre os clientes

Clientes, no VTEX IO, são abstrações para outros serviços. Nós transpassamos a complexidade ao implementar um cliente HTTP, por exemplo, de forma que você consiga focar nos verdadeiros objetivos da sua aplicação. Sempre que vcoê precisar configurar uma conexão com uma API externa ou outro serviço da VTEX, você deve criar um cliente! Alguns clientes padrões já estão implementados no VTEX IO, você pode consultá-los [aqui](https://github.com/vtex/node-vtex-api/blob/ccf4d8f8d3208007c4bfd558baf979df8d825af8/src/clients/IOClients.ts).

Caso você já saiba um pouco mais sobre serviços no IO, você provavelmente já sabe que sua implementação exporta funções que recebem um objeto de contexto. Estas funções podem ser um _resolver_ para um campo de GraphQL, um _middleware_ para um servidor HTTP ou um _handler_ de eventos. Em todos os casos, você recebe um `ctx` (ou como você preferir chamá-lo), que é um objeto do tipo `Context` e dentro de `ctx.clients`, você encontrará diversos clientes, dentre os quais estão os que você implementou.

É possível ler mais sobre os conceitos que envolvem a definição de clientes [neste documento](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-3598e97a761645e0befdac84a32f339d).

## O cliente de _analytics_

Neste curso, será necessário criar um cliente que será utilizado para consultar informações em relação ao número de visualizações de um determinado produto. O cliente que será criado fará um _request_ REST en qye irá receber e consumir estas informações de número de visualizações de produtos. Para fazer isso, esse cliente precisa ter uma função que será utilizada no _handler_ para uma rota específica e é assim que iremos testá-lo.

## Implementando o cliente _analytics_ e fazendo testes

Neste passo, vamos implementar o cliente de _Analytics_. Em primeiro lugar, no diretório `/node/clients`, você encontrará um arquivo chamado `analyticsClient.ts`, que já contém uma simples declaração de classe, como o código mostrado abaixo. É aqui que você implementará seu cliente.

   ```ts
   import { AppClient } from '@vtex/api'

   export default class Analytics extends AppClient {}
   ```

   > É possível notar neste bloco de código que `Analytics` é um cliente que estende de `AppClient`, pois esta classe oferece configurações já pré-esbeleciadas que asseguram que seu cliente tem uma comunicação segura com outras partes da sua _app_.

1. O cliente precisa ter um construtor e apenas um método, que chamaremos de `getLiveUsers`. Este método retorna uma promessa de um _array_ em que seus elementos são do tipo `LiveUsersProduct`. Utilizando o código abaixo, adicione as linhas de código necessárias ao seu cliente:

   ```diff
   //node/clients/analyticsClient.ts
   import { AppClient, InstanceOptions, IOContext } from '@vtex/api'

   export default class Analytics extends AppClient {
   +  constructor(context: IOContext, options?: InstanceOptions) {
   +    super('vtex.mocked-analytics@0.x', context, options)
   +  }

   +  public getLiveUsers(): Promise<LiveUsersProduct[]> {}
   }

   +interface LiveUsersProduct {
   +  slug: string
   +  liveUsers: number
   +}
   ```

   > A interface que é definda será utilizada como tipagem para o método que vamos implementar.

2. Agora, vamos implementar o método em si, `getLiveUsers`. Ele retorna um _request_ HTTP GET para um _endpoint_ bem definido, que é responsável por pegar os dados que são necessários para esta aplicação. Dessa forma, adicione a seguinte linha ao método `getLiveUsers`:

   ```ts
   return this.http.get('_v/live-products')
   ```

   > O método que você acabou de criar irá pegar os dados necessários para esta aplicação: um _array_ de objetos que contêm dois campos: `slug`, uma _string_ que representa o ID do produto e `liveUsers`, um número que é a quantidade de usuários visualizando o produto - que são os campos que estão na interface.

3. Com o seu cliente de _analytics_ já implementado, é necessário declará-lo como um dos clientes na classe `Clientes`, de forma que ele ficará disponível e acessível através do uso de `Context`, do qual falamos anteriormente.

    Dessa forma, na pasta `/node/clients`, vá ao arquivo chamado `index.ts` e adicione um método referentes ao cliente de _analytics_. Também é necessário importar o cliente que você implementou anteriormente.

   ```diff
   // node/clients/index.ts
   + import Analytics from '../clients/analytics'

   export class Clients extends IOClients {
   +  public get analytics() {
   +    return this.getOrSet('analytics', Analytics)
     }
   }
   ```

4. De forma que você possa ver suas mudanças funcionando, é possível utilizar o método `getLiveUsers` dentro de um _handler_. Utilizando uma rota que já está definida no projeto, você pode enviar um _request_ para ela e o _handler_ responsável por essa rota irá chamar o método que criamos. 

    Para fazer isso, há uma pasta dentro do diretório `/node`, chamada `handlers`. Há um arquivo chamado `analytics.ts`, no qual é necessário fazer duas coisas para que seu teste funcione: pegar o cliente de _analytics_ de `ctx` e substituir o conteúdo de `ctx.body` pelo método mencionado anteriormente, como você pode ver no bloco de código abaixo:

    ```diff
        export async function analytics(ctx: Context, next: () => Promise<any>) {
    +    const {
    +      clients: { analytics },
    +    } = ctx
    +    ctx.status = 200
    -    ctx.body = 'OK'
    +    ctx.body = await analytics.getLiveUsers()
    +    ctx.set('cache-control', 'no-cache')
        await next()
        }
    ```

Agora, vamos testá-lo! É possível utilizar o Postman para enviar um _request_ GET para a seguinte rota:

   `{your workspace}--appliancetheme.myvtex.com/_v/app/analytics/realTime`

   e é esperado que esta responsa com os dados e com status `200`.

![image](https://user-images.githubusercontent.com/19495917/84827089-53c00780-affa-11ea-857f-fdcba0fef7c2.png)
