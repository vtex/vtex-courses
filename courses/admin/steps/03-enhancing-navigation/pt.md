# Melhorando a navegação

## Introdução

O `navigation.json` tem uma série de funcionalidades que podem melhorar a relevância e navegação da sua aplicação, neste passo aprenderemos como definir uma mensagem de título e criar _keywords_.

## Atividade

1. No passo anterior usamos o `titleId`: `admin-example.navigation.label`, para atribuir um valor textual a essa chave, precisamos na pasta messages, nos três arquivos de idioma, escrever o valor correspondente:

/messages/pt.json

```
{
  "admin-example.navigation.label": "Treinamento de IO"
}
```

/messages/en.json

```
{
  "admin-example.navigation.label": "IO Training"
}
```

/messages/es.json

```
{
  "admin-example.navigation.label": "Entrenamiento de IO"
}
```

Feito isso, conseguimos agora ver uma mensagem traduzível para o menu que criamos:

![image](https://user-images.githubusercontent.com/18701182/92776306-85d0d380-f375-11ea-84b1-da5321b89538.png)

2. Adicione keywords para tornar mais simples a busca pela sua aplicação:

/admin/navigation.json

```diff
{
  ...
+ "searchKeyWordsHelpers": "admin-example.navigation.search.kws"
}
```

3. Analogamente, crie as mensagens para as _keywords_, separadas por vírgulas:

/messages/pt.json

```diff
{
  "admin-example.navigation.label": "Treinamento de IO",
+ "admin-example.navigation.search.kws": "mock, test, treinamento, io"
}
```

/messages/en.json

```diff
{
  "admin-example.navigation.label": "IO Training",
+ "admin-example.navigation.search.kws": "mock, test, training, io"
}
```

/messages/es.json

```diff
{
  "admin-example.navigation.label": "Entrenamiento de IO",
+ "admin-example.navigation.search.kws": "mock, test, entrenamiento, io"
}
```

![image](https://user-images.githubusercontent.com/18701182/92777236-65eddf80-f376-11ea-9c07-fac14f5d5172.png)
