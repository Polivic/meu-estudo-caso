📘 Projeto – Estudo de Caso com Rotas, Consumo de API e CRUD (Web + Mobile)

Este projeto foi desenvolvido como atividade prática, seguindo o roteiro solicitado em aula.
O objetivo é construir duas aplicações que simulam um CRUD de Produtos utilizando consumo de API REST e navegação entre telas.

✔ Aplicação Web: React + Vite + React Router + Material UI
✔ Aplicação Mobile: React Native + Expo + React Native Paper + Expo Router
✔ API: Fornecida pelo professor (Produtos)

🎯 Objetivo Geral

Criar um sistema completo composto por:

📌 1. Aplicação Web (React + Vite):

Listagem de produtos

Cadastro de novo produto

Edição

Exclusão

Página de detalhes

Navegação entre rotas

Consumo da API via Axios

📌 2. Aplicação Mobile (React Native + Expo):

Listagem de produtos

Cadastro

Edição

Exclusão

Navegação entre telas com Expo Router

Interface responsiva e moderna

🗂 Estrutura do Projeto
/meu-estudo-caso
│── web/        → Projeto React com Vite
│── mobile/     → Projeto Expo com React Native


Cada pasta possui seu próprio ambiente, dependências e scripts.

🚀 Como rodar o projeto
📌 1. Rodando a Aplicação Web
Acesse a pasta:
cd web

Instale as dependências:
npm install

Execute o projeto:
npm run dev

Acesse no navegador:

http://localhost:5173

📱 Como rodar a Aplicação Mobile
Acesse a pasta:
cd mobile

Instale as dependências:
npm install

Execute o app:
npx expo start

Você pode abrir o app em:

Celular com Expo Go

Emulador Android/iOS

Navegador (modo web)

🔗 API utilizada

A API REST utilizada é a fornecida pelo professor:

https://proweb.leoproti.com.br/produtos

Endpoints:

GET /produtos — listar

GET /produtos/:id — obter

POST /produtos — criar

PUT /produtos/:id — atualizar

DELETE /produtos/:id — excluir

🧩 Tecnologias utilizadas
🌐 WEB

React

Vite

React Router DOM

Axios

Material UI (MUI)

JavaScript (ESModules)

📱 MOBILE

React Native

Expo

Expo Router

React Native Paper

Axios

📄 Funcionalidades Implementadas (Web + Mobile)
✔ Listagem de Produtos
✔ Cadastro
✔ Edição
✔ Exclusão
✔ Detalhes
✔ Navegação entre telas/rotas
✔ Interface moderna
📸 Estrutura de Telas
WEB

/ → Lista de Produtos

/novo → Novo Produto

/editar/:id → Editar

/detalhes/:id → Detalhes

MOBILE

/ → Tela inicial

/produtos → Lista

/produtos/novo → Novo

/produtos/[id] → Editar

👩‍💻 Autora

Projeto desenvolvido por Poliana Vitória como parte da atividade prática do módulo.

🎉 Conclusão

O estudo de caso cumpre todos os requisitos solicitados, incluindo rotas, API, CRUD, interface moderna e aplicações completas web + mobile.
