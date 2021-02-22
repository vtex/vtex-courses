# Clientes: Usando o Master Data

## Introdução

Agora que estamos utilizando os dados que são consultados através do cliente de _analytics_, precisamos salvar esses dados e atualizá-los. Dessa forma, toda vez que os dados são consultados, queremos atualizá-los utilizando o **Master Data** (uma base de dados como serviço da VTEX).

## Cliente do Master Data

**Master Data** é o serviço da VTEX que torna possível criar arquiteturas de base de dados para uma loja. Em geral, é utilizada para armazenar e organizar dados de clientes, mas também é amplamente utilizada por lojas VTEX para customizações de regras de negócio e para criar aplicações para sua loja virtual. Você pode configurar aplicações que utilizam este módulo como um repositório de dados para criar um sistema em cima do Master Data, sendo necessário apenas a modelagem dos novos dados.

Na versão atual do **Master Data**, utilizamos o conceito de _data entities_ e, para isso, usa-se o [JSON Schema](https://spacetelescope.github.io/understanding-json-schema/) para validar e indexar documentos. Uma entidade de dados pode ter diversos _schemas_, dependendo de como você utiliza os dados armazenados. Você precisará do nome do _JSON Schema_ para implementar a _query_, como você verá neste passo.

> Nota: o _JSON Schema_ não é necessário para todos os _endpoints_. Se você não precisa validar seus dados, você pode salvar seus documentos sem nenhum tipo de configuração, apenas indicando a entidade dos dados e provendo credenciais de acesso. No caso deste passo, como precisaremos de validação, é necessário criar um _JSON Schema_.

**Documentos do Master Data** tem identificadores únicos e podem ter vários campos customizados. No _JSON Schema_, você pode declarar os campos e indicar aqueles que você deseja utilizar para indexação. Campos indexados podem ser utilizados como filtros para _queries_.

Um **cliente do Master Data** já está disponível para ser utilizado, através do VTEX IO Node Runtime. É possível acessá-lo através do `Context`, um parâmetro que contém todos os clientes do IO, na propriedade `clients`.

Neste passo, este cliente será utilizado para pegar informações dos N produtos mais vistos, onde N é um parâmetro que será utilizado para consultar a quantidade desejada de produtos.

> Nota: É importante ressaltar que o cliente do Master Data estará disponível para ser utilizado desde que a versão correta do `@vtex/api` esteja instalada na pasta `node`. Ele poderá ser acessado através de `ctx.clients.masterdata`.

Vamos começar?
## Antes, se você **não está usando** a conta `appliancetheme`

Antes de começar a atividade desse passo, você precisa configurar o seu **Master Data** para poder usar do jeito que a atividade propõe.

Então, você precisa criar uma entidade para salvar a sua lista de produtos. Para fazer isso, usando a nossa [**API do Master Data**](https://developers.vtex.com/vtex-developer-docs/reference/master-data-api-v2-overview), você  vai salvar um novo *schema*.

1. Usando o [Postman](https://www.postman.com/downloads/) ou qualquer outro cliente para APIs que preferir, faça um request `PUT` para esta rota `https://{{nome-da-sua-conta}}.vtexcommercestable.com.br/api/dataentities/course_backend_product_list/schemas/{{nome-do-seu-schema}}` com os seguintes *headers* e *body*:

  > Note que você precisa preencher algumas informações na rota, como o `nome-da-sua-conta` e `nome-do-seu-schema`. Esse último pode ser qualuqer nome, mas recomendamos algo como `v0`. 

  *Headers*: 
  ```json  
      Content-Type: application/json
      VtexIdclientAutCookie: {seu-token}
  ```

  *Body*: 
  ```json  
    {
      "properties": {
          "slug": {
              "type": "string"
          },
          "count": {
              "type": "number"
          }
      },
      "v-indexed": [
          "slug",
          "count"
      ],
      "v-security": {
          "allowGetAll": true,
          "publicRead": [
              "slug",
              "count"
          ],
          "publicWrite": [
              "slug",
              "count"
          ],
          "publicFilter": [
              "slug",
              "count"
          ]
      }
    }
  ```

  > Para pegar um VTEX *local token* para o *header*, basta rodar no seu terminal `vtex local token`. 

Fazendo isso, você não só está criando a entidade mas também criando um novo *schema* que será usado nessa atividade.

Agora você está pronto para começar!

## Utilizando o cliente do Master Data para armazenar informação

1. Em primeiro lugar, precisamos definir as _policies_ da aplicação, para autorizar o uso do **Master Data**. Para fazer isso, altere o arquivo `manifest.json`, como feito abaixo:

   ```diff
   //manifest.json
   {
     ...
     },
     "credentialType": "absolute",
     "policies": [
   +      {
   +        "name": "ADMIN_DS"
   +      },
   +    {
   +      "name": "outbound-access",
   +      "attrs": {
   +        "host": "api.vtex.com",
   +        "path": "/dataentities/*"
   +      }
   +    }
     ],
     "dependencies": {
     ...
   }
   ```

   > Fazendo isso, estamos garantindo que esta _app_ tem autorização para acessar o **Master Data**.

2. Agora, para salvar os dados no **Master Data**, precisamos, em primeiro lugar, checar cada _productSlug_ e ver se já está salvo. Para fazer isso, será utilizado um método do cliente do Master Data chamado `searchDocuments`. Para utilizá-lo, vá ao arquivo `node/event/updateLiveUsers.ts`, e faça alterações como as mostradas abaixo:

   ```diff
   //node/event/updateLiveUsers.ts
   ...
   + import { COURSE_ENTITY } from '../utils/constants'

   export async function updateLiveUsers(ctx: EventContext<Clients>) {
     const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
     console.log('LIVE USERS ', liveUsersProducts)
   +  await Promise.all(
   +    liveUsersProducts.map(async ({ slug, liveUsers }) => {
   +       const [savedProduct] = await ctx.clients.masterdata.searchDocuments<{
   +         id: string
   +         count: number
   +         slug: string
   +       }>({
   +         dataEntity: COURSE_ENTITY,
   +         fields: ['count', 'id', 'slug'],
   +         pagination: {
   +           page: 1,
   +           pageSize: 1,
   +         },
   +         schema: 'v1',
   +         where: `slug=${slug}`,
   +       })
   +    console.log('SAVED PRODUCT', savedProduct)
   +    })
   +  )
     return true
   }
   ```

   > Note que estamos utilizando `COURSE_ENTITY`, das constantes declaradas globalmente, para acessar os dados da entidade desejada.

3. Agora, para nos certificarmos de que estamos lidando corretamente com erros, implemente uma estrutura de `try-catch`. Veja o exemplo abaixo:

   ```diff
   export async function updateLiveUsers(ctx: EventContext<Clients>) {
       const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
       console.log('MOCKED LIVE USERS ', liveUsersProducts)
       await Promise.all(
       liveUsersProducts.map(async ({ slug, liveUsers }) => {
   +      try {
           ...
   +      } catch (e) {
   +        console.log(`failed to update product ${slug}`)
   +        console.log(e)
   +      }
       })
       )
       return true
   }
   ```

4) Se o produto já está salvo, precisamos atualizá-lo, de forma a incrementar seu contador de visualizações. O cliente de **Master Data** tem um método que permite que atualizemos um documento que já existe ou que criemos um novo, no caso do documento não existir - `createOrUpdateEntireDocument`.

   Para utilizar este método e implementar o incremento na entidade do Master Data, no mesmo arquivo que foi alterado anteriormente, logo após a linha de _log_, adicione o seguinte bloco de código:

   ```diff
   //node/event/updateLiveUsers.ts
   export async function updateLiveUsers(ctx: EventContext<Clients>) {
       await Promise.all(
       liveUsersProducts.map(async ({ slug, liveUsers }) => {
           try {
           ...
           console.log({savedProduct})
   +       await ctx.clients.masterdata.createOrUpdateEntireDocument({
   +          dataEntity: COURSE_ENTITY,
   +          fields: {
   +            count: liveUsers,
   +            slug,
   +          },
   +          id: savedProduct?.id,
   +          schema: 'v1'
   +        })
           } catch {
           console.log(`failed to update product ${slug}`)
           console.log(e)
           }
       })
       )
       return true
   }
   ```

   > Nota: se um erro é gerado dentro do _handler_ de eventos, o VTEX IO tentará novamente fazer o envio do evento.

5) Finalmente, rode `vtex link` e espere que um evento seja disparado. Uma vez que isso acontece, cheque o terminal por _logs_ no código. Quebre o `vtex link` através de `ctrl + C` e utilize o seguinte _cURL_ no terminal para checar as atualizações no **Master Data**:

   ```
   curl --location --request GET 'https://api.vtex.com/api/dataentities/course_backend_product_list/search?_fields=slug,count&_schema=v1&an=appliancetheme' \
   --header 'Content-Type: application/json'
   ```

   > **Atenção**: Para rodar o comando _cURL_ no **Windows**, é necessário substituir as aspas simples (`'`) por aspas duplas (`"`).

   O resultado deve ser algo similar a imagem abaixo:

   ![image](https://user-images.githubusercontent.com/43679629/85172472-8579de00-b247-11ea-9758-f34a66df29c7.png)
