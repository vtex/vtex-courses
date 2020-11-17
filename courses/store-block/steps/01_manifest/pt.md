# Conhecendo uma app no VTEX IO

De forma a implementar uma aplicação totalmente customizada no VTEX IO, é necessário entender alguns conceitos que serão apresentados e tudo começa com um arquivo muito importante de uma _app_: o `manifest.json`.

# O arquivo `manifest.json`

Este arquivo define algumas configurações básicas e abstrações que são necessárias para que o _build_ da sua aplicação funcione. Nesta etapa, alguns campos deste arquivo serão explicados, que são:

- vendor
- name
- version
- dependencies

Vamos começar!

### _vendor_

Define o nome da conta VTEX que está desenvolvendo a _app_. Esta conta é responsável por sua manutenção e distribuição (a aplicação pode ser instalada em outras contas ou apenas na própria).

> O vendor `vtex` é utilizado para _apps_ nativas.

### _name_

Identifica o nome da aplicação. Não deve conter nenhum caractere especial (exceto por `-`, que é permitido) ou caracteres maiúsculos.

### _version_

Identifica a versão atual da _app_. Utilizamos a especificação de [Versionamento Semântico 2.0.0](https://semver.org/). O formato é bem definido, dividido em _releases_ de _patch_, _minor_ ou _major_.

Você pode encontrar abaixo um resumo da especificação:

- _Patches_: É utilizado para _bug fixes_ que são retrocompatíveis;
- _Minors_: Deve ser utilizado para _features_ retrocompatíveis;
- _Majors_: Utilizado quando mudanças imcompatíveis de API são feitas (_breaking changes_).

Por exemplo: se uma API está na versão `2.3.2` e uma _feature_ que não é _breaking change_ é adicionada, então a versão pode ser atualizada para `2.4.0`.

No momento em que o _deployment_ é feito, há um _worker_ que chamamos de _housekeeper_, cuja responsabilidade é atualizar automaticamente as aplicações para a nova versão em cada conta VTEX. Dessa forma, irá sempre instalar todas as atualizações que são _minor_ ou _patch_, dada a retrocompatibilidade. Porém, não irá atualizar automaticamente versões _major_, dado que podem vir também com mudanças de dependências.

### _dependencies_

Uma _app_ pode depender de outras aplicações. Este campo listas todas as dependências necessárias para o correto funcionamento da aplicação.

## Exemplo

Neste exemplo de um arquivo `manifest.json`, é possível observar algumas das características mencionadas anteriormente. Em particular, a versão da _app_ é `0.0.1` e estes números correspondem, respectivamente, a _major_, _minor_ e _patch_.

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
