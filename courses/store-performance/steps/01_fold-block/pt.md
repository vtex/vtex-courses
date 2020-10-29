# Melhorando load inicial

## Introdução 

A performance é um ponto cada vez mais crítico na criação de uma loja e, para garantir que seu tema está dentro das nossas melhores práticas de otimização, criamos este curso totalmente voltado para pontos de melhoria em um tema. 

Para este curso, podemos usar um tema já completo para focarmos apenas em pontos de melhoria. 

Clone o repositório:
[https://github.com/vtex-apps/demostore-theme](https://github.com/vtex-apps/demostore-theme)

```
git clone https://github.com/vtex-apps/demostore-theme
```

## Bloco de fold

Nem todo conteúdo de uma página precisa ser carregado de primeira. Inicialmente quando um usuário entra na loja existe um limite do quanto este consegue ver. É por isso que com o bloco de `__fold__` você consegue controlar o que inicialmente será visto, diminuindo assim a necessidade de carregamento de dados no *load* inicial. Automaticamente, o que fica abaixo do `__fold__` é então carregado depois que o essencial já estiver disponível e o usuário começar a *scroll*ar para baixo. 



## Atividade

1. Rode um `vtex workspace reset` garantindo que nenhum outro tema está linkado na loja

2. Vá até o diretório do repositório clonado e *link*e, então, o tema oferecido: 

    ```
    vtex link
    ```

    Você deve ver a seguinte loja:

    ![screencapture-savioperformance-appliancetheme-myvtex-2020-09-21-19_42_00](https://user-images.githubusercontent.com/18701182/93828834-91a87980-fc42-11ea-9f84-dd3053822621.png)


3. O conteúdo abaixo da prateleira de *Clearance* não pode ser visto pelo usuário, vamos então otimizar o primeiro carregamento, postergando o *fetching* deste. Para isso, no arquivo `home.jsonc` no diretório `/store/blocks/home/` adicione o bloco `__fold__` logo abaixo do `"shelf#clearance"`: 

    ```diff
    "store.home": {
        "blocks": [
          "flex-layout.row#slider",
          "shelf#new-arrivals",
          "shelf#clearance",
    +     "__fold__",
          "flex-layout.row#newsletter",
          "rich-text#brands",
          "flex-layout.row#brands",
          "rich-text#instagram",
          "flex-layout.row#instagram"
        ]
      }
    ```

No seu navegador, então, rode um CTRL(Cmd) + `-` (dando um zoom out para conseguir enxergar toda a página) e perceba que tudo que está abaixo da `Clearance` é carregado posteriormente (assim que o *scroll* é executado) ao que está acima: 

![image](https://user-images.githubusercontent.com/18701182/93830718-5fe5e180-fc47-11ea-9caf-f7b8a10b0a23.png)


