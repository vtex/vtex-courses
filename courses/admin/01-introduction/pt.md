# Admin framework

# Introdução

Nos cursos anteriores conhecemos o Store Framework, um motor de construção de frente de loja construído usando o VTEX IO. Assim como o Store Framework, o Admin Framework se propõe a resolver um caso de uso específico: extensões para o painel administrativo. 

Operações de comércio complexas quase nunca conseguem funcionar com uma única solução SaaS integrada, são necessários integrações de ERP, personalização, tracking, marketing digital, entre outros. A VTEX entende, no entanto, que ter um único ponto de contato facilitaria muito o trabalho dos operadores, tornando o admin uma ferramenta universal. É com essa premissa que o Admin Framework foi criado, trazendo a possibilidade de extensão de *backoffice* não apenas para criar dashboards que são característicos de um cliente e seu segmento, como para trazer insights e operação de provedores externos.

# Atividade

Uma app de admin, funciona de forma muito parecida com a app de bloco de loja. Vamos iniciar o curso clonando um repositório template de react e evoluiremos para torná-lo uma app de admin: 

1. Clone o react app template:

```
git clone https://github.com/vtex-apps/react-app-template admin-course
```

2. Abra o `admin-course` no seu editor de texto e adicione o builder de admin no `manifest.json`:

```diff
//manifest.json
{
  "vendor": "CHANGE_ME",
  "name": "CHANGE_ME",
  "version": "0.0.0",
  "title": "CHANGE_ME",
  "description": "CHANGE_ME",
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
+   "admin": "0.x" 
  },
  "dependencies": {},
  "registries": [
    "smartcheckout"
  ],
  "policies": [],
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```

3. Edite o `vendor`, `name`, `title` e `description` da aplicação: 

```diff
//manifest.json
{
+ "vendor": "appliancetheme",
+ "name": "admin-sandbox",
  "version": "0.0.0",
  "title": "Admin Sandbox",
  "description": "Admin Sandbox",
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "admin": "0.x" 
  },
  "dependencies": {},
  "registries": [
    "smartcheckout"
  ],
  "policies": [],
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```
**NOTA:** Se estiver fazendo o curso na sua própria loja e desenvolvendo sua própria app, lembre-se de que terá que passar pelo [form de whitelist](https://forms.gle/ovi4h7mnwgUKS2hu5).

5. Adicione o `vtex.styleguide` como dependência, nós vamos utilizá-lo mais a frente no curso: 
```diff
//manifest.json
{
  "vendor": "appliancetheme",
  "name": "admin-sandbox",
  "version": "0.0.0",
  "title": "Admin Sandbox",
  "description": "Admin Sandbox",
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "admin": "0.x" 
  },
  "dependencies": {
+   "vtex.styleguide": "9.x"
  },
  "registries": [
    "smartcheckout"
  ],
  "policies": [],
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-api/master/gen/manifest.schema"
}
```

6. Na raiz do projeto, crie um diretório `/admin`, a sua estrutura deve ficar: 

```diff
|
|_ CHANGELOG.md  
|_ docs/         
|_ messages/
|_ react/
+|_ admin/
|_ package.json
|_ manifest.json  
|_ yarn.lock
```
