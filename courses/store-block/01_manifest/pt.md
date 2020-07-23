# Conhecendo uma *app* VTEX IO

## Introdução
Antes de começar, é necessário relembrar alguns conceitos importantes para uma maior compreensão do fluxo lógico ao desenvolver uma *app*.

## manifest.json

### *vendor*
  Define o nome da conta VTEX que está desenvolvendo a *app*. Essa conta é responsável pela manutenção e distribuição da *app* (pode ser instalada em outras contas ou somente na própria) 
  
  >O *vendor* `vtex` é utilizado em casos de *apps* nativas.

### *name*

Identifica o nome da aplicação. Não deve ter caracteres especiais - exceto `-` - ou caracteres maiúsculos. 

### *version*

Identifica a versão atual da *app*. Para versionamento, utilizamos a especificação [Semantic Versioning 2.0.0](https://semver.org/). O formato do versionamento é bem definido, com o uso de *patches*, *minors* e *majors*. 

Abaixo um resumo da especificação:

- *Patches*: você deve criar um *patch* quando está consertando um bug de forma retrocompatível
- *Minors*: você deve criar uma versão *minor* quando adicionar funcionalidade de forma retrocompatível.
- *Majors*: você deve criar uma versão *major* quando você realiza mudanças incompatíveis de API (o que costumamos chamar de ***breaking changes***)

Exemplo: Se uma API que está na versão `2.3.2` e uma nova funcionalidade não tiver *breaking changes*, você pode atualizar a versão para `2.4.0`.

No momento que o *deploy* é feito, há um *worker* chamado *housekeeper* responsável por atualizar a versão automaticamente para todas as contas.  No caso de *minors* e *patches*, o *housekeeper* atualiza a app automaticamente em todas as contas, já que as mudanças são retrocompatíveis. Atualizações de *majors*, no entanto, possuem *breaking changes*, por isso o *housekeeper* não atualiza a *app* em todas as contas; sendo assim, a atualização deve ser feita manualmente.

### *builders*

O desenvolvimento de apps no VTEX IO utiliza o conceito de [*Code as Configuration (CaC)*](https://www.locallyoptimistic.com/post/code-as-configuration/). Este paradigma é abstraído através do campo de `builders` que facilita o desenvolvimento, abstraindo a configuração de serviços. 

Exemplo: para criar uma extensão no painel administrativo criam-se apps que utilizam o builder de `admin`. 

![image](https://user-images.githubusercontent.com/18701182/76098199-c9eab200-5fa7-11ea-949d-6ac16ebb837a.png)

Ao linkar a app, portanto, uma pasta de nome correspondente é enviada ao seu *builder*, que, por sua vez, transforma cada arquivo em configuração para o serviço competente.

### *dependencies*

Uma *app* pode depender de outras aplicações. Esse campo lista todas as dependências necessárias para o correto funcionamento da *app*.

## Exemplo

No exemplo da estrutura do `manifest.json` abaixo, é possível observar características mencionadas acima. Em particular, a versão é `0.0.1`, onde os números são, respectivamente, *major*, *minor* e *patch*.

```json
{
  "vendor": "vtex",
  "name": "countdown",
  "version": "0.0.1",
  "title": "Countdown",
  "description": "Countdown component",
  "defaultLocale": "pt-BR",
  "builders": {
    "messages": "1.x",
    "store": "0.x",
    "react": "3.x"
  },
  "mustUpdateAt": "2019-04-02",
  "scripts": {
    "postreleasy": "vtex publish --verbose"
  },
  "dependencies": {
    "vtex.styleguide": "9.x",
    "vtex.css-handles": "0.x"
  },
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-a pi/master/gen/manifest.schema"
}
```
