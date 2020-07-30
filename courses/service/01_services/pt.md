# Serviços no VTEX IO

## Introdução

A plataforma do VTEX IO permite que desenvolveores criem experiências de comércio únicas, utilizando tecnologias _Web_. É possível criar blocos de _frontend_ para o Store Framework, serviços de _backend_ que expõem APIS REST ou de GraphQL e combina uma série de módulos da VTEX numa solução completa, juntando-as em uma _app_.

Dado que o VTEX IO alavanca grandes operações de _e-commerce_, é necessário ter seus códigos rodando em um servidor. Serviços são a maneira de rodar códigos em Node.js ou .NET na infrastrutura do VTEX IO, apoiado por abstrações de APIs de forma a melhorar a experiência do desenvolvedor.

## Serviços

Um **Serviço** precisa ser exportado de uma _app_ no VTEX IO, assim como temas ou blocos de loja, utilizando _builders_ `node` ou `dotnet`. Com estes, você está apto a desenvolver uma API REST sem a obrigação de configurar um servidor, APIs de GraphQL e rotas.

Os serviços no VTEX IO suportam _rollbacks_ feitos através de apenas um comando e integração contínua. Podem exportar rotas internas ou externas e rodam em Kubertnets.

Dentro da pasta `/node` de um serviço, há um arquivo chamado `service.json`, onde é possível **declarar rotas que o serviço precisa responder** e outras configurações, como _timeout_ e _memory_.

Durante este curso, você irá implementar alguns serviços no VTEX IO e aprenderá um pouco mais sobre as possibilidades que eles oferecem para desenvolvimento.