# Publicando uma _app_ no VTEX IO

## Introdução

Após ser apresentado ao conceitos dos diferentes tipos de _workspaces_, vamos então ensinar como publicar uma aplicação no VTEX IO. Para realizar operações como esta, são utilizados comandos na [CLI da VTEX](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-command-reference), nossa CLI que dá acesso aos recursos da plataforma.

## Usando a CLI do VTEX IO para publicar uma _app_

Para publicar uma _app_ no VTEX IO, é necessário utilizar o seguinte comando da CLI da VTEX, dentro da pasta da aplicação:

```
vtex publish
```

> Qual aplicação vamos publicar?

Ao fim do curso de Store Framework, você desenvolveu uma loja completamente funcional e é justamente essa _app_ que você irá publicar.

> E se eu não fiz o curso de Store Framework?

Não se preocupe, para este passo, você pode pegar qualquer tema que você já tenha e publicá-lo. Caso você ainda não tenha, pode voltar nos nossos cursos para criar um!

Com uma aplicação de um tema qualquer, vá ao arquivo `manifest.json` e mude o nome da _app_ para o seguinte formato:

```
trainingweek-{{devname}}
```

onde `devname` é um nome de sua escolha, que te identifique. Além disso, é necessário mudar o _vendor_ da aplicação, que **precisará** ser `appliancetheme`.

Abaixo, você pode encontrar um exemplo de parte do `manifest.json` feitas as mudanças citadas acima:

```json
{
    "vendor": "appliancetheme",
    "name": "trainingweek-fabiana",
    ...
}
```

Ao fim desses passos, vamos efetivamente publicar a _app_! Dentro do diretório da sua _app_, rode o comando mencionado no início deste passo. Dentro da pasta da aplicação, rode o comando que foi citado anteriormente, no início deste passo. Ao rodar o comando, você precisará confirmar a ação, como você pode ver na imagem abaixo:

![image](https://user-images.githubusercontent.com/19495917/88819289-2d16f400-d196-11ea-8cb6-f86a902c4887.png)

Após a confirmação, o _build_ da _app_ começará e, após ser finalizado, você deverá ver uma mensagem informando que a publicação foi bem sucedida:

![image](https://user-images.githubusercontent.com/19495917/88824809-3061ae00-d19d-11ea-86c1-4118bf609ec3.png)

Pronto! Você acabou de fazer sua primeira publicação!
