# Serviços no VTEX IO

## Introdução

A plataforma do VTEX IO permite que desenvolvedores criem experiências de comércio únicas, utilizando tecnologias _Web_. É possível criar blocos de _frontend_ para o Store Framework, serviços de _backend_ que expõem APIs REST ou de GraphQL e combina uma série de módulos da VTEX numa solução completa, juntando-as em uma _app_.

Dado que o VTEX IO alavanca grandes operações de _ecommerce_, é necessário ter seus códigos rodando em um servidor. Serviços são a maneira de rodar códigos em Node.js ou .NET na infraestrutura do VTEX IO, apoiado por abstrações de APIs de forma a melhorar a experiência do desenvolvedor.

## Serviços

Um **Serviço** precisa ser exportado de uma _app_ no VTEX IO, assim como temas ou blocos de loja, utilizando _builders_ `node` ou `dotnet`. Com estes, você está apto a desenvolver uma API REST sem a obrigação de configurar um servidor, APIs de GraphQL e rotas.

Os serviços no VTEX IO suportam _rollbacks_ feitos através de apenas um comando e integração contínua. Podem exportar rotas internas ou externas e rodam em Kubernetes.

Dentro da pasta `/node` de um serviço, há um arquivo chamado `service.json`, onde é possível **declarar rotas que o serviço precisa responder** e outras configurações, como _timeout_ e _memory_.

Durante este curso, você irá implementar alguns serviços no VTEX IO e aprenderá um pouco mais sobre as possibilidades que eles oferecem para desenvolvimento.

## Sobre este curso

Este curso irá guiá-lo no aprendizado de desenvolvimento de aplicações de serviço no VTEX IO. Há alguns pré-requisitos para que você tenha uma experiência gratificante ao fazer esse curso, que são:

- Conceitos básicos de GraphQL
- Entender como desenvolver utilizando Typescript

Se você não está familiarizado com alguma destas ferramentas, nós o encorajamos a dar uma olhada nas seguintes documentações:

- [**Documentação de Typescript**](https://www.typescriptlang.org/)
- [**GraphQL documentation**](https://graphql.org/learn/)

Para começar o curso, você deve utilizar o repositório _template_ que disponibilizamos com todos os arquivos iniciais que você precisa ter para começar. Você encontrará este repositório neste [link](https://github.com/vtex-trainings/service-course-template).

> Se você ainda tem dúvidas em como utilizar um repositório _template_, você pode checar este [artigo](https://developers.vtex.com/vtex-developer-docs/page/como-utilizar-um-reposit%C3%B3rio-template).
