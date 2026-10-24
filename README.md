# Projeto Web – Sistema de Login SENAC

## Descrição do Projeto

O projeto consiste em uma interface web de autenticação de usuários, desenvolvida com HTML, CSS e JavaScript. O sistema apresenta telas de login, cadastro e recuperação de senha, com foco na navegação e na experiência do usuário.

## Funcionalidades

**Login:** Interface para inserção de e-mail e senha.

**Cadastro:** Registro de e-mail e senha, com validação de confirmação.

**Recuperação de Senha:** Formulário para informar o e-mail de recuperação.

**Confirmação:** Página que apresenta uma mensagem de confirmação após a solicitação de recuperação.

**Armazenamento Local:** Utilização do localStorage para armazenar informações durante a navegação.

## Tecnologias Utilizadas

HTML5 para estruturação das páginas.

CSS3 para estilização das interfaces.

JavaScript para validação de formulários e interatividade.

LocalStorage para armazenamento de informações no navegador.

## Estrutura do Projeto

```text
ProjetoWeb-main/
│
├── index-login.html
├── cadastro.html
├── recuperarSenha.html
├── email-enviado.html
├── style.css
├── cadastro.css
├── email-enviado.css
├── script.js
├── cadastro.js
├── logo.png
└── imagem-recuperacao.png
```

## Como Executar

Clone ou baixe o repositório, abra a pasta do projeto e execute o arquivo `index-login.html` em um navegador.

Não é necessária a instalação de dependências adicionais.

## Status do Projeto

Projeto acadêmico de desenvolvimento web, com interfaces e funcionalidades básicas de cadastro e recuperação de senha.

**Observação:** O projeto é um protótipo front-end. Ainda não possui autenticação real, banco de dados ou envio de e-mails. O armazenamento de senhas no localStorage é apenas demonstrativo e não é adequado para produção.
