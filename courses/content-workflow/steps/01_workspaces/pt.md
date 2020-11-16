# Conhecendo mais sobre _workspaces_

## Introdução

Workspaces são geralmente definidos como ambientes que são diferentes versões da mesma conta, de forma que quaisquer mudanças feitas em um _workspace_ não intereferem no trabalho de outros desenvolvedores.

> _Workspaces_ são isolados uns dos outros.


Há três diferentes tipos de _workspaces_:

- Workspace de desenvolvimento: um ambiente onde é possível linkar, desenvolver, instalar e publicar aplicações. É um _workspace_ onde você tem mais liberdade nas configurações que irá fazer. Não lida com o tráfego de clientes de produção, não pode ser promovido a _master_ e nem pode ser utilizado para testes A/B;

- _Workspace_ de produção: lida com tráfego de lojas em produção, pode ser utilizado para testes A/B e pode ser promovido ao _workspace master_. Não é permitido linkar aplicações;

- _Workspace Master_: um _workspace_ de produção **único** em que o conteúdo dele reflete no que é apresentado ao usuário final da loja.

## Criando um _workspace_ de produção

Neste passo, vamos criar um _workspace_ de produção e é tão simples quanto rodar o seguinte comando da nossa CLI:

```
vtex use {WorkspaceName} --production
```

> `WorkspaceName` é o nome que você quer utilizar para identificar seu _workspace_.

Uma vez que você executa o comando, se o nome escolhido não existe, haverá uma pergunta se você deseja criar o _workspace_, como você pode ver na seguinte imagem:

![image](https://user-images.githubusercontent.com/19495917/88816710-0efbc480-d193-11ea-8918-1d595c7595f5.png)

Neste caso, você precisa apenas digitar `y`:

![image](https://user-images.githubusercontent.com/19495917/88816914-4cf8e880-d193-11ea-9676-3647626a3236.png)

Pronto! Seu _workspace_ de produção foi criado! De forma a verificar em que _workspace_ e conta você está, use o seguinte comando:

```
vtex whoami
```