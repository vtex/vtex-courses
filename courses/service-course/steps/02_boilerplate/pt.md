# Visão geral: Entendendo o _Boilerplate_

## Introdução

Fazendo uma breve apresentação do _boilerplate_, há duas pastas (`/node` e `/graphql`) e o arquivo `manifest.json`, que é um arquivo importante para a sua aplicação no VTEX IO, dado que será o primeiro ponto de comunicação da sua _app_ com o VTEX IO.

## Visão geral do `manifest.json`

No arquivo `manifest.json`, você encontrará o nome da _app_, _vendor_, versão e outras informações que você deve prestar atenção: _builders_, _policies_ e _dependencies_. Neste passo inicial, temos as seguintes configurações:

- builders: quais _builders_ sua _app_ precisará. Neste caso, temos até o momento os builders `docs` e `node`, com suas respectivas versões;
- policies: se a _app_ que está sendo implementada necessita acessar serviços externos ou pegar dados de um local específico, é necessário declará-las. Até o momento, não há nenhuma _policy_ declarada.
- dependencies: outras _apps_ do VTEX IO que a sua _app_ depende. Como mostrado abaixo, será necessário também linkar a _app_ `events-example`, e esta é uma depenência que está declarada na aplicação deste curso.

## Visão geral do diretório `/node`

Todas as pastas utilizadas durante este curso já estão no projeto inicial. A maioria dos diretórios está vazio e serão preenchidos com outros arquivos ao longo do curso.

- `/node/clients`: ambos os arquivos estão praticamente em branco e são apenas _placeholders_ para os próximos passos;

- `/node/handlers`: contém um _handler_ que será utilizado nos próximos passos;

- `/node/utils`: você encontrará um aquivo que contém declarações de constantes globais (`/node/constants.ts`);

- `/node/index.ts`: contém as declarações iniciais para as funcionalidades da _app_, como as declarações de serviços e de cache, que serão incrementadas durante o curso. Neste arquivo, também é possível exportar implementações de funções que são _resolvers_;

- `/node/service.json`: Descreve a sua API REST e algumas características que impactam diretamente nos atributos de infrastrutura da sua _app_. Seu

Seu arquivo `service.json` pode ser encontrado dentro da pasta `/node` e será similar a:

```
{
"memory": 256,
"timeout": 2,
"minReplicas": 2,
"maxReplicas": 4,
"routes": {
  "status": {
    "path": "/_v/status/:code",
    "public": true
  }
}
```

| Field       | Type       | Description                                                                                                                            |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| memory      | MegaBytes. | O quanto de memória sua _app_ terá alocada. Este valor será sobrescrito se o IO detectar que sua _app_ está abusando no uso de memória |
| timeout     | Seconds    | A infrastrutura do VTEX IO irá abortar a conexão se o _request_ demora mais do que o valor do \_timeout                                |
| minReplicas | Integer    | Quando sua _app_ estiver rodando, este valor é a quantidade réplicas mínimas estarão disponíveis                                       |
| maxReplicas | Integer    | A máxima quantidade de réplicas a estarem disponíveis                                                                                  |
| routes      | -          | Descreve as rotas REST da sua _app_, dentro deste objeto, você informará o nome, o caminho e se é pública ou privada                   |

## Visão geral do diretório `/graphql`

Neste diretório, você encontrará apenas pastas vazias e o arquivo vazio `/graphql/schema.graphql`. Este também será preenchido ao longo do curso.

## Dependências

A _app_ tem uma dependência, que é a _app_ `events-example`. Esta aplicação, quando linkada em uma conta e _workspace_ específicos, é responsável por prover exemplos de eventos. Durante o curso, conforme nos aproximarmos do assunto de eventos, haverá uma visão mais completa a respeito da _app_ `events-example`.

## Dando início ao curso

Por enquanto, clone (`git clone`) a _app_ `events-example` [deste repositório](https://github.com/vtex-apps/events-example) e rode `vtex link` na pasta onde o repositório foi clonado.

> Sem a aplicação `events-example`, este curso não será linkado com sucesso, dado que a _app_ `events-example` está listada como uma dependência.

Após rodar `vtex link` na _app_ `events-example`, o terminal deve exibir uma rota de _healthcheck_, que será utilizada mais tarde. Ela é similar a imagem abaixo:

![image](https://user-images.githubusercontent.com/43679629/83797811-91777480-a679-11ea-9bc9-9d32ace321d7.png)
