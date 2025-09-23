# Configurando seu ambiente de desenvolvimento

> 🚧 **Você é cliente ou parceiro VTEX?**  
> Para realizar este treinamento, você precisará ter acesso a uma conta VTEX.  
> Estamos trabalhando em alternativas para que desenvolvedores não afiliados possam usar contas de teste, mas, por enquanto, é necessário fazer parte de uma empresa que já integre o nosso ecossistema.  

> 📘 **Sobre o uso de `appliancetheme`**  
> Ao longo deste guia, usamos `appliancetheme` apenas como exemplo. Substitua-o pelo nome da conta VTEX à qual você tem acesso.  

---

## Configurações para usar o VTEX IO

Para utilizar o VTEX IO, é necessário configurar seu computador. O processo varia de acordo com o sistema operacional.  
Siga o passo a passo referente ao seu caso:  

### Windows

1. Baixe e instale o **Git**: [Download Git](https://git-scm.com/download/win)  
2. Baixe e instale o **Node.js**: [Download Node.js](https://nodejs.org/pt-br/download/)  
3. Baixe e instale o **Yarn**: [Download Yarn](https://classic.yarnpkg.com/en/docs/getting-started)  
4. Abra o CMD (pressione a tecla **Windows** e digite `cmd`).  
5. Instale a CLI do VTEX IO com o comando:  
   ```bash
   yarn global add vtex
   ```

### **Debian/Ubuntu**

1. Instale o **Git** através do seguinte comando: `sudo apt-get install git-all`;
2. Instale o **Node.js** utilizando o seguinte comando: `sudo apt install nodejs`;
3. Instale a CLI do VTEX IO com o comando:  
   ```bash
   yarn global add vtex
   ```
   
### macOs

1. Vá até a [página](https://brew.sh/index) do **Homebrew**;
2. Copie o link fornecido logo abaixo de **Install Homebrew**;
    ![](https://user-images.githubusercontent.com/19495917/91765945-283bca80-ebb0-11ea-943d-4d71db627768.png)
3. Abre um terminal, digitando `Command + Space` e digitando `terminal`;
4. No seu terminal, cole o link do **Homebrew** e tecle `Return` (Enter);
5. Após a instalação do Homebrew finalizar, rode o comando `brew install node`;
6. Agora, **instale o Yarn** rodando `brew install yarn`;
7. Instale a CLI do VTEX IO com `yarn global add vtex`.

## Logando em uma conta

Depois de concluir a instalação do VTEX Toolbelt, faça o seguinte:

1. Agora, no Terminal, rode `vtex login appliancetheme`.
2. Você deve ver uma página de login da VTEX sendo aberta no seu navegador. Faça o login com **o e-mail fornecido para a assinatura do treinamento.**
3. Volte ao CMD/Terminal, execute o comando `vtex whoami` e verifique se a mensagem de retorno é como essa:
    ```jsx
    info: Logged into appliancetheme as {your email} at production workspace master
    ```
4. Crie **um workspace** com o comando `vtex use {your workspace name}`. Note que o nome do workspace deve ser único, então use algo como o seu usuário no Github!
    ```jsx
    14:39:26.044 - info: You're now using the workspace vtextraining on account appliancetheme!
    ```
