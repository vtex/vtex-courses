# Desafio do curso de APIs de Commerce

## Proposta
Agora, ao invés de reutilizar um Client do pacote `@vtex/clients`, **crie o seu próprio Client** seguindo os passos [deste material](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-1dbd20c928c642d0ba059d5efbe7874b).

Você deve criar um Client `Search` que deve conter **apenas um método** chamado `productFullTextSearch` que receba apenas uma _string_ `term`. O Client deve chamar a API de Search, retornando uma lista de produtos advindos da busca por este `term`.

Após isso, implemente uma rota no seu serviço para que seja possível testar seu Client.

**Links Úteis**
- [Documentação da API de Search](https://developers.vtex.com/reference/search-3)
- [Requisição de Exemplo](https://portal.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?&fq=blouse&an=storecomponents)

**Resposta Esperada**
![Exemplo de Requisição](https://user-images.githubusercontent.com/18706156/93603134-f4c3b300-f999-11ea-8c0d-626e01a24e14.png)
