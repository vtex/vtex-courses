# Utilizando eventos como gatilhos

## Introdução

Com o cliente de _analytics_ implementado, nós queremos utilizar os eventos como gatilhos para os _requests_. Isso significa que, para cada evento escutado, queremos fazer um _request_ para a _app_ de _analytics_, de forma que, a cada X segundos, tenhamos novos dados em **Live Products**.

## Eventos

No VTEX IO, eventos são usualmente utilizados como gatilhos para outras ações, como enviar emails para o cliente final. Para implementar isto, é necessário configurar nossa a _app_ do cliente e o _handler_ de eventos.

## Usando eventos como gatilhos para fazer um _request_

1. Com o lciente de _analytics_ implementado, precisamos apenas utilizá-lo no _handler_ de eventos. Primeiro, no arquivo `node/event/liveusersUpdate.ts`, importe o cliente que implementados no passo anterior:

   ```ts
   import { Clients } from '../clients/index'
   ```

2. Agora, precisamos utilizar o `EventContext` que foi configurado previamente. Importe-o atualizando o método. É possível fazer como abaixo:

   ```diff
   //node/event/liveUsersUpdate.ts
   import { Clients } from './../clients/index'
   +import { EventContext } from '@vtex/api'

   +export async function updateLiveUsers(ctx: EventContext<Clients>) {
   ...
   }
   ```

   > Nota: você também pode declarar globalmente seu contexto de evento, através do arquivo `/node/index.ts`. Se você fizer desta forma, não é necessário importá-lo em cada arquivo que você precise utilizá-lo.

3. Agora, para utilizar o cliente de _analytics_, faça o seguinte:

   ```diff
   //node/event/liveUsersUpdate.ts
   export async function updateLiveUsers(ctx: EventContext<Clients>) {
   +  const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
   +  console.log('LIVE USERS: ', liveUsersProducts)
   +  return true
   }
   ```

4. Finalmente, rode o comando `vtex link` e, para cada evento disparado, você deve ver os dados pegos do _analytics_. O resultado é similar ao da imagem abaixo:
   ![image](https://user-images.githubusercontent.com/43679629/85150833-69ffda80-b229-11ea-9260-b9255adf7d9c.png)
