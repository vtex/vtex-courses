# Enhancing Navegation

## Introduction

`Navigation.json` has a series of features that can improve the relevance and navigation of your application, in this step we will learn how to define a title message and create keywords.

## Activity

1. In the previous step we used `titleId`: ʻadmin-example.navigation.label`. To assign a textual value to this key, we need to write the corresponding value in the messages folder, in the three language files:

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

That done, we can now see a translatable message for the menu we created:

![image](https://user-images.githubusercontent.com/18701182/92776306-85d0d380-f375-11ea-84b1-da5321b89538.png)

2. Add keywords to make your application search easier:

/admin/navigation.json

```diff
{
  ...
+ "searchKeyWordsHelpers": "admin-example.navigation.search.kws"
}
```

3. Similarly, create the messages for the keywords, separated by commas:

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
