# Instalando uma _app_ no VTEX IO

## Introdução

Uma vez que você publica uma _app_, é possível instalá-la em uma conta VTEX. Em geral, depois de instalar, há um robô chamado _House Keeper_, que se assegura de que todas as contas VTEX se mantenham com as _apps_ atualizadas com a versão mais recente. Versões _minors_ e _patches_ que são lançadas, são automaticamente atualizadas nas contas.

Porém, para instalar uma _app_ pela primeira vez ou uma nova versão _major_, é necessário que seja feito manualmente. Neste passo, você aprenderá como fazer isso.

## Instalando a app

Como no passo anterior, é necessário apenas um único comando para instalar uma _app_ em uma conta específica. Há duas possíveis situações para isso:

- Você não tem o repositório raiz do projeto da _app_, mas você sabe o _vendor_, o nome da _app_ e também a versão que você gostaria de instalar;
- Você tem o projeto da aplicação no seu computador.

No primeiro caso, você pode instalá-la rodando o seguinte comando:

```
vtex install {vendor}.{appName}@{version}
```

Já no caso de ter projeto da _app_, você precisar ir na pasta do projeto e rodar o seguinte comando:

```
vtex install
```

> Em ambos os casos, você precisa ter certeza que está na conta correta, na qual você quer instalar a aplicação.

Considerando o caso que temos neste passo - tendo o projeto da _app_ - é tão simples como rodar o segundo comando que foi mencionado anteriormente.

Em primeiro lugar, tenha certeza de que está na conta correta, utilizando o comando `vtex whoami`; você irá instalar a _app_ na conta `appliancetheme`. Ao rodar o comando, o resultado deve ser similar a imagem abaixo:

![image](https://user-images.githubusercontent.com/19495917/88828271-62750f00-d1a1-11ea-89d0-068340f8b522.png)

Agora, vá até a pasta correta, que é a do projeto da _app_, e rode o seguinte comando:

```
vtex install
```

Após executá-lo, é esperado que você veja uma mensagem que constata que a _app_ foi instalada com sucesso, como a imagem abaixo:

![image](https://user-images.githubusercontent.com/19495917/88828538-c0095b80-d1a1-11ea-86cf-bac9cfdf554e.png)

Dica: se você quer listar as _apps_ que estão atualmente instaladas em uma conta, você pode utilizar o comando `vtex ls`, você verá uma lista semelhante a seguinte imagem:

![image](https://user-images.githubusercontent.com/19495917/88828816-1e363e80-d1a2-11ea-88bb-b3f082b90877.png)

> **Atenção**: Há mais informação ao rodar o comando mencionado acima, mas foi omitida da imagem devido a sua extensão.
