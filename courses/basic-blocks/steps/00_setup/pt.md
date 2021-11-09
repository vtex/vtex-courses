# Configurações

## Introdução

Antes de colocar as mãos na massa e aprender mais sobre o Store Framework no VTEX IO, você precisará definir algumas configurações básicas, como:

- Instalação do **Git**;
- Instalação da **CLI do VTEX IO**;
- **Login em** uma conta VTEX;
- Criação de um **workspace** de desenvolvimento;
- **Vinculando** seus arquivos locais à plataforma.

Dê uma olhada no passo a passo abaixo para cada uma dessas configurações:

## Instalando o Git

Instale o Git em seu computador clicando no link abaixo e selecionando seu sistema operacional (Windows, MAC ou Linux):

[https://git-scm.com/downloads](https://git-scm.com/downloads)

## Instalando a CLI do VTEX IO

**A CLI do VTEX IO** é uma ferramenta VTEX **de linha de comando**. Ele permite que você execute qualquer atividade na plataforma, como criar um novo _workspace_ de desenvolvimento, fazer login em uma conta VTEX, desenvolver novas aplicações ou gerenciar os já existentes, etc.

Uma vez que é a CLI do VTEX IO que estabelece a comunicação entre o desenvolvedor e a plataforma, você precisará dele para realizar todas as atividades propostas durante esse e os outros cursos.

1. Instale o [**Node.js**](https://nodejs.org/). Se você estiver usando um MAC, instale também [**Yarn**](https://yarnpkg.com/);
2. Execute `npm i -g vtex` em seu terminal se estiver usando Windows ou `yarn global add vtex` se estiver usando MAC;

Você pode executar `vtex` para confirmar se a instalação da CLI da VTEX ocorreu conforme o esperado.

Depois de instalado com sucesso, a próxima etapa é _fazer login_ em uma conta VTEX.

## Fazendo login

1. Execute `vtex login appliancetheme` em seu terminal, durante esse treinamento, usaremos essa conta para o desenvolvimento.

2. Depois de _fazer login_, execute `vtex whoami` para confirmar a conta e a área de trabalho em que você se encontra.

Os _workspaces_ nada mais são do que o que o homônimo sugere. No VTEX IO, as contas têm três tipos principais de _workspace_, a saber [master](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-promoting-a-workspace-to-master), [produção](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-production-workspace) e desenvolvimento.

O próximo passo é criar um _workspace_ de desenvolvimento, que permitirá que você brinque com as configurações ao longo do curso sem alterar a versão pública final da loja.

## Criação de um _workspace_ de desenvolvimento

1. Execute `vtex use workspace-name`, substituindo `workspace-name` pelo nome desejado. Use um nome único para seu _workspace_.

### Acessando seu _workspace_

Depois de criar o _workspace_, você poderá acessá-lo neste link: `https://{workspace}--{conta}.myvtex.com`, substituindo`{workspace}`e`{conta}`com o nome do _workspace_ e conta criados anteriormente. Por exemplo, `https://devworkspace--appliancetheme.myvtex.com`

---

Depois de definir as configurações básicas, você está pronto para iniciar o curso!
