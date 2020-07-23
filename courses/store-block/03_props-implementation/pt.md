# Tornando o bloco countdown customizável

## Introdução
Agora que temos um elemento `h1` renderizado, é possível utilizá-lo para mostrar informações que dependam de uma *prop* do componente. Para isso, alguns conceitos serão apresentados, já que são necessários para desenvolver uma aplicação.

## Conceitos
* **Hook**

    *Hooks* são APIs que permitem utilizar funcionalidades do React dentro de componentes funcionais. Sem os *hooks*, um componente funcional em React só consegue renderizar elementos de UI. *Hooks* permitem, entre outras coisas, armazenar estado entre diferentes renderizações e executar efeitos colaterais no ciclo de vida de um componente. Obs.: eles não funcionam dentro de classes.
    
    Exemplo:
    ```typescript
    const [count, setCount] = useState(0)
    ```

* **Interface para *props***
    
    Define os tipos *Typescript* das props que o componente poderá receber, permitindo o *Intelissense*  da IDE sobre o componente que você criou.
    ```typescript
    interface CountdownProps {
      exampleProp: string
    }
    ```

* **Schema do bloco**

    No VTEX IO, oferecemos uma ferramenta de gestão de conteúdo da loja chamada **Site Editor**. Com essa ferramenta, acessada através do *Admin VTEX*, podemos alterar imagens e texto dos blocos sem precisar modificar o código da loja.

    Para que o seu bloco possa **aceitar configurações do usuário**, é preciso exportar um `schema` no componente React responsável por aquele bloco utilizando [JSON *schema*](https://json-schema.org/). Isso irá, automaticamente, gerar um formulário para o Site Editor relativo ao bloco que você está desenvolvendo. Abaixo é possível ver um exemplo de *schema*:
    ```js
    // react/Countdown.tsx
    Countdown.schema = {
        title: 'editor.countdown.title',
        description: 'editor.countdown.description',
        type: 'object',
        properties: {},
    }
    ```
    O *schema* também é responsável por definir os textos que serão vistos pelo usuário do admin no formulário.

## Atividade

1. Na interface definida no `Countdown.tsx`, adicione uma *prop* chamada `targetDate`, ela é do tipo *string*. Com isso, estamos definindo uma *prop* do componente que será utilizada para inicializar o contador.

    A definição da *prop* em si é feita através da declaração dela na interface `CountdownProps` no arquivo `Countdown.tsx`, mostrada anteriormente. Assim, adicione uma linha que defina uma *prop* chamada `targetDate`, do tipo *string*.
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
Pronto! Agora você pode alterar o conteúdo do texto através do *Site Editor*. Vamos ver como ficou? Vá até o *Site Editor* e clique em `Countdown` no menu lateral, isso abrirá o menu de edição da *app*, que será como a imagem abaixo.

![image](https://user-images.githubusercontent.com/19495917/80977387-0cd7d300-8dfb-11ea-87e4-35218eab524b.png)

Agora, no campo abaixo do título, digite uma data no formato `AAAA-MM-DD` e veja a alteração, que passará a exibir o texto que você digitou. 

![image](https://user-images.githubusercontent.com/19495917/80977331-f6ca1280-8dfa-11ea-81f6-b7b551a8c41f.png)


