# Automation Test - QA

Projeto de automação de testes usando Cypress + Cucumber, cobrindo o fluxo de login, busca, carrinho e checkout do site automationexercise.com, além de um teste de API na Trello.

## Tecnologias

- Cypress
- Cucumber (@badeball/cypress-cucumber-preprocessor)
- esbuild
- Node.js

## Pré-requisitos

- Node.js instalado (versão 18 ou superior)
- npm

Para checar se já tem instalado:

```
node -v
npm -v
```

## Instalação

1. Clone o repositório ou extraia os arquivos do projeto

2. Entre na pasta do projeto:

```
cd automation-test-qa
```

3. Instale as dependências:

```
npm install
```

## Estrutura do projeto


cypress/
  e2e/
    web/
      login.feature
      login.js
      busca.feature
      busca.js
      carrinho.feature
      carrinho.js
      checkout.feature
      checkout.js
    api/
      trello.feature
      trello.js
  support/
    e2e.js
    commands.js
cypress.config.js
package.json


## Como executar os testes

### Modo interativo (abre o navegador)

```
npx cypress open
```

Escolher "E2E Testing", selecionar o navegador e clicar no arquivo .feature que quiser rodar.

### Modo headless (via terminal, sem abrir navegador)

Rodar tudo:

```
npx cypress run
```

Rodar só um arquivo específico:

```
npx cypress run --spec "cypress/e2e/web/login.feature"
```

## Credenciais usadas nos testes

Os testes de login e checkout usam a conta:

```
email: teste2021@teste.com.br
senha: teste
```

Essa conta precisa existir no site. Caso não exista, é só criar pela tela de cadastro (Signup) do próprio automationexercise.com antes de rodar os testes, ou trocar o e-mail/senha direto nos arquivos `login.js` e `checkout.js`.

## Cenários cobertos

**Login**
- Login com usuário e senha válidos
- Login com credenciais inválidas

**Busca**
- Buscar um produto existente e validar retorno na lista de resultados

**Carrinho**
- Adicionar produto ao carrinho e validar que aparece corretamente

**Checkout**
- Login no sistema
- Adicionar produto ao carrinho
- Acessar tela de pagamento
- Validar se o produto adicionado aparece na tela de checkout

**API**
- Fazer um GET na API do Trello (`/1/actions/{id}`)
- Validar status code 200
- Validar o campo `name` dentro da estrutura `list` (retornado em `data.list.name`)

## Observações

- O preprocessor do Cucumber, por padrão, associa cada `.feature` ao `.js` de mesmo nome, na mesma pasta. Por isso alguns steps (como "que acesso a página de produtos") aparecem repetidos em mais de um arquivo — isso é esperado nessa configuração.
- Sempre que alterar o `cypress.config.js` ou renomear/mover arquivos de step, fechar e reabrir o Cypress (não basta clicar em rerun).