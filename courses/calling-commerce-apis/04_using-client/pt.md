# Usando o Client Catalog para fazer requisições

## Introdução

Neste passo você aprenderá como usar o Client que você acabou de configurar em um _middleware_ da app `service-example`. Iremos usar o método `getSkuById` para retornar informações de um SKU (Stock Keeping Unit) no Catálogo da VTEX.

> O termo Stock Keeping Unit (SKU), em português Unidade de Manutenção de Estoque, está ligado à logística de armazém e designa os diferentes itens do estoque, estando normalmente associado a um código identificador. _(Wikipedia)_

## Rota de Testes

Já que o app `service-example` já exporta uma rota pública para testes (`https://{workspace}--{account}.myvtex.com/_v/status/:code`), iremos utilizá-la para testar realizar uma chamada utilizando o Client de Catalog. Iremos usar o parâmetro `code` como o nosso "ID do Sku" para rapidamente testarmos o nosso Client.

Para verificar se tudo está bem com sua aplicação, rode `vtex link` para iniciar o desenvolvimento. Você pode manter este processo rodando, já que a CLI da VTEX **atualiza automaticamente sua aplicação com mudanças no código.**

## Modificando o _middleware_

Como vimos no passo anterior, agora já temos disponível os métodos do nosso Client em `ctx.clients.catalog`. Para utilizá-lo, precisaremos chamar os métodos em algum _middleware_ de nossa app.

Vamos alterar o arquivo `node/middlewares/status.ts` para usar o `ctx.clients.catalog`. Cole lá o seguinte código:

```typescript
export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { catalog },
  } = ctx

  const data = await catalog.getSkuById(code.toString())
  ctx.body = data

  await next()
}
```

**O que estamos fazendo?**
- Extraindo `catalog` do contexto que é recebido nas funções de middleware. Isso é um atalho para não precisarmos chamar `ctx.clients.catalog`. Saiba mais sobre Destructuring [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
- Extraindo a variável `code`, que virá como parâmetro da URL da nossa rota (`/_v/status/:code`). Usaremos este dado para representar o ID do SKU que iremos testar na chamada ao Catálogo.
- Chamando o método `getSkuById` do Client Catalog. Este método irá, internamente, chamar o endpoint relativo no módulo do catálogo, repassando o parâmetro que estamos passando (`code`) como o ID do SKU a ser buscado. Lembrando que esta é uma chamado assíncrona, então precisamos adicionar o `await` logo antes para esperá-la.

Porém, ainda precisamos configurar um último passo para testar!

## Autorização

Geralmente, os Clients do `commerce-clients` já são configurados automaticamente para fazerem chamadas autenticadas, por padrão **usando o token da app**. Porém, mesmo assim, ainda precisamos **declarar que nossa aplicação estará fazendo requisições para algum serviço**, e isso é feito no arquivo `manifest.json`. 

Para o nosso caso especificamente, precisamos adicionar a seguinte sessão no campo `policies` deste arquivo:

```json
    {
      "name": "outbound-access",
      "attrs": {
        "host": "portal.vtexcommercestable.com.br",
        "path": "/api/catalog/*"
      }
    },
```

Isso permitirá que sua app faça chamadas para essa URL, especificamente. Por mais que você não tenha precisado colocá-la em seu código, é ela que é usada internamente pelo Catalog Client.

> Essa declaração é necessária e importante para apps distribuídas na [App Store da VTEX](https://apps.vtex.com). No processo de instalação, o responsável pela conta deve ler e aceitar todas as permissões que a app está solicitando.

## Testando

Após finalizar os passos anteriores, vamos testar o que fizemos! O processo do `vtex link` já deve ter atualizado, e poderemos copiar a URL pública que nosso serviço está expondo: 
![Exemplo](https://user-images.githubusercontent.com/18706156/93384506-4d306e80-f83b-11ea-9cec-0e1b23f23a48.png)

Neste caso, a app está sendo desenvolvida na conta `marinbrasil` e no workspace `trainingweek`, mas no seu Terminal você deverá copiar o link fornecido para seu ambiente.

Como o nosso _middleware_ é ativado por uma requisição GET, podemos testar a funcionalidade no nosso próprio navegador. Cole na barra de endereços `https://{workspace}--{account}.myvtex.com/_v/status/1` para buscarmos informações sobre o SKU de ID 1.

O resultado abaixo deve ser esperado: 

![image](https://user-images.githubusercontent.com/18706156/93388848-b87d3f00-f841-11ea-8d2e-bed1c14d355d.png)

> Lembrando que esta informação dependerá **do catálogo da conta sendo utilizada**.
