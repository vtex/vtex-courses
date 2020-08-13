# Eventos: recebendo e lidando com eventos

## Introdução

Algumas interações no VTEX IO podem gerar eventos e estes podem ser utilizados como gatilhos para ações, como a atividade presente neste passo. Por enquanto, utilizaremos os eventos disparados pela _app_ `events-example`.

## Eventos no VTEX IO

Em _apps_ do VTEX IO, eventos podem ser disparados e utilizados como gatilhos para ações. Por exemplo, uma _app_ que escuta por pedidos e ativa um gatilho de email de confirmação. É importante ressaltar que eventos são dependentes da conta e do _workspace_, o que significa que são apenas visíveis pela conta e pelo _workspace_ de onde foram disparados. Ou seja, eventos disparados no seu _workspace_ pessoal de desenvolvimento serão apenas escutados por _apps_ que estão linkadas no mesmo _workspace_.

Vamos começar?

## Ouvindo eventos na aplicação

1. Em primeiro lugar, vamos começar com o disparo de eventos sendo feito através da _app_ `events-example`. Esta _app_ irá disparar um evento a cada X segundos. Após rodar o comando `vtex link` no diretório de `events-example`,  clique na rota de _healthcheck_ disponível e uma mensagem "ok" deve aparecer no navegador:

    ![image](https://user-images.githubusercontent.com/43679629/83802091-8c69f380-a680-11ea-82af-a438fb73f40b.png)

    > Este acesso a rota de _healthcheck_ cria um context de cache que é necessário para que o VTEX IO dispare eventos. Sem isso, a _app_ `events-example` não será capaz de disparar eventos que sua _app_ irá ouvir.

2. Agora, precisamos adicionar o _handler_ de eventos na declaração de `Service`, que é responsável por definir o que a _app_ vai fazer enquanto estiver ouvindo os eventos que podem chegar. Para fazer isso, no arquivo `/node/index.ts`, incremente a declaração de `Service`: 
    ```diff
    //node/index/ts

    + const TREE_SECONDS_MS = 3 * 1000
    + const CONCURRENCY = 10

    export default new Service<Clients, State, ParamsContext>({
        clients: {
        implementation: Clients,
        options: {
            default: {
                retries: 2,
                timeout: 10000,
            },
    +       events: {
    +           exponentialTimeoutCoefficient: 2,
    +           exponentialBackoffCoefficient: 2,
    +           initialBackoffDelay: 50,
    +           retries: 1,
    +           timeout: TREE_SECONDS_MS,
    +           concurrency: CONCURRENCY,
    +      },
    +    },
    +  },
    })
    ```

    Passando por cada uma das configurações, temos o seguinte:

      | Campo                           | Tipo    | Descrição                                                                     |
      | ------------------------------- | ------- | ------------------------------------------------------------------------------- |
      | `exponentialTimeoutCoefficient` | seconds | fator exponencial em que `timeout` é incrementado a cada tentativa              |
      | `exponentialBackoffCoefficient` | seconds | fator exponencial em que o `backoff delay` será incrementado a cada tentativa   |
      | `initialBackoffDelay`           | seconds | tempo que a _app_ irá esperar até a próxima tentativa                           |
      | `retries`                       | -       | quantidade máxima de tentativas da _app_                                        |
      | `timeout`                       | seconds | _timeout_ até ser considerado como uma tentativa mal sucedida                   |
      | `concurrency`                   | -       | quantidade de processos simultâneos que o evento é capaz de ter                 |

      > Ao adicionar esse código ao `Service`, estamos adicionando ao `Client` de `Service` a capacidade de lidar com eventos. Neste ponto, não estamos utilizando ainda os clientes em si ao lidar com eventos.

    Por enquanto, vamos apenas criar um _log_ de recebimento de eventos. Para criar este _handler_, vá ao arquivo `liveUsersUpdate.ts`, que se encontra na pasta `/node/event` e faça as seguintes alterações:

    ```ts
    //node/event/liveUsersUpdate.ts
    export async function updateLiveUsers() {
        console.log('EVENT HANDLER: received event')
    }
    ```

3. Após adicionar o bloco de código mencionado anteriormente, precisamos declarar em `Service`, a referência para esta função. No arquivo `/node/index.ts`, adicione o seguinte código:

    ```diff
    ...
    + import { updateLiveUsers } from './event/liveUsersUpdate'
    ...

    export default new Service<Clients, State, ParamsContext>({
        ...
    +  events: {
    +    liveUsersUpdate: updateLiveUsers,
    +  },
    })

    ```

4. Também é necessário modificar o arquivo `service.json`. De forma a ouvir os eventos que são enviados, precisamos declarar isto para darmos a _app_ de serviço que estamos desenvolvendo esta capacidade. É possível fazer isso através das seguintes alterações no arquivo `service.json`:

   ```diff
   //node/service.json
   {
     "memory": 128,
     "ttl": 10,
     "timeout": 10,
     "minReplicas": 2,
     "maxReplicas": 10,
     "workers": 4,
   +  "events": {
   +    "liveUsersUpdate": {
   +      "sender": "vtex.events-example",
   +      "keys": ["send-event"]
   +    }
     },
     ...
   }
   ```

   > Note que fazemos esta declaração ao utilizar o _resolver_ de eventos, definir a referência para a _app_ que efetivamente dispara os eventos (declarada como `sender`) e, por fim, adicionar a referência a _key_ do evento (declarada como `keys`).

5. Por fim, rode o comando `vtex link` e espere que os eventos sejam disparados através da _app_ `events-example`. Quando escutados, o _log_ deve aparece no terminal, como na imagem abaixo:

   ![image](https://user-images.githubusercontent.com/43679629/83823425-5f323b00-a6aa-11ea-816a-68525e5800d7.png)
