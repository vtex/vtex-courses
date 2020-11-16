# Tornando o bloco countdown customizável

## Introdução
Agora que temos um elemento `h1` renderizado, é possível utilizá-lo para mostrar informações que dependam de uma *prop* do componente. Para isso, alguns conceitos serão apresentados, já que são necessários para desenvolver uma aplicação.

## Alterando o conteúdo renderizado do componente

1. Na interface definida no `Countdown.tsx`, adicione uma *prop* chamada `targetDate`, ela é do tipo *string*. Com isso, estamos definindo uma *prop* do componente que será utilizada para inicializar o contador.

    ```diff
    // react/Countdown.tsx
    interface CountdownProps {
    +   targetDate: string    
    }
    ```

2. Feito isso, é preciso utilizá-la no componente, substituindo o texto de antes, "Teste Countdown" por um outro texto, através do *Site Editor*. 

    >No futuro, esse targetDate será utilizado para definir a data de término para o contador. Porém, por enquanto, esse campo pode ser genérico.

    Primeiramente, é preciso alterar o componente para utilizar a *prop* `targetDate` definida anteriormente. Para isso, é preciso adicionar dentro do componente React a variável a ser utilizada no `h1`. Você lembra do bloco de código do componente na etapa anterior? Vamos utilizá-lo novamente para fazer as alterações.

    ```tsx
    // react/Countdown.tsx
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
      return (
        <div>
          <h1>{ targetDate }</h1>
        </div>
      ) 
    }
    ```

3. Além disso, para alterar essa propriedade através do *Site Editor*, é necessário adicionar essa mesma *prop* ao *schema*. Isso é feito através da adição de um objeto com chave `targetDate` dentro do objeto `properties` no *schema*. Ou seja:

    ```diff
    // react/Countdown.tsx
    Countdown.schema = {
      title: 'editor.countdown.title',
      description: 'editor.countdown.description',
      type: 'object',
      properties: {
    +   targetDate: {
    +      title: 'Data final',
    +      description: 'Data final utilizada no contador',
    +      type: 'string',
    +      default: null,
    +   },
      },
    }
    ```

Pronto! Agora você pode alterar o conteúdo do texto através do *Site Editor*. Vamos ver como ficou? 

> Você pode acessar o _Site Editor_ através do seguinte _link_: `{yourWorkspace}--appliancetheme.myvtex.com/admin/cms/site-editor`.

Vá até o *Site Editor* e clique em `Countdown` no menu lateral, isso abrirá o menu de edição da *app*, que será como a imagem abaixo.

![image](https://user-images.githubusercontent.com/19495917/80977387-0cd7d300-8dfb-11ea-87e4-35218eab524b.png)

Agora, no campo abaixo do título, digite uma data no formato `AAAA-MM-DD` e veja a alteração, que passará a exibir o texto que você digitou. 

![image](https://user-images.githubusercontent.com/19495917/80977331-f6ca1280-8dfa-11ea-81f6-b7b551a8c41f.png)


