💳 DevBank — Frontend

Aplicação frontend de um caixa eletrônico digital desenvolvida em React + TypeScript + Vite + Tailwind, com integração de API para operações bancárias.

O sistema permite que o usuário:

Valide o endpoint da API no login
Visualize o saldo da conta em tempo real
Realize depósitos e saques por cédulas
Consulte o histórico de transações

🚀 Tecnologias utilizadas
React 18
TypeScript
Vite
TailwindCSS
React Router DOM
Context API
Fetch API

🧠 Conceitos aplicados

Context API para estado global da aplicação (ApiContext)
Validação do endpoint da API antes de acessar o sistema
Rotas protegidas por contexto
Integração completa com API REST
Atualização dinâmica de saldo após operações
Tradução de termos técnicos da API para linguagem do usuário
Componentização (BankNote, Navbar, Pages)
Fluxo real de aplicação: Login → Conta → Operações → Conta

🔐 Fluxo da aplicação
Login
 ↓ valida API
Home (Conta)
 ↓
Depositar / Sacar / Histórico
 ↓
Retorna para Home com saldo atualizado

🖥️ Telas do sistema
Login (validação do endpoint da API)
Home / Conta (saldo atual + navegação)
Depósito por cédulas
Saque por cédulas
Histórico de transações

⚙️ Como rodar o projeto
1) Instalar dependências
npm install
2) Rodar o projeto
npm run dev


🔗 Integração com API
O sistema depende de uma API que possua os seguintes endpoints:

Método	Rota	Função
GET	/	Retorna saldo
POST	/deposit	Realiza depósito
POST	/withdraw	Realiza saque
GET	/history	Retorna histórico

O endpoint é informado pelo usuário na tela de login.

🗂️ Estrutura do projeto
src/
 ├── components/
 │    ├── BankNote
 │    └── Nav
 ├── context/
 │    └── ApiContext.tsx
 ├── pages/
 │    ├── login.tsx
 │    ├── home.tsx
 │    ├── deposit.tsx
 │    ├── withdraw.tsx
 │    └── transactions.tsx
 ├── services/
 │    └── api.ts

✨ Diferenciais do projeto
O usuário não entra no sistema sem validar a API
O saldo é sempre buscado da API, nunca fixo
Após qualquer operação, o usuário retorna automaticamente para a conta
O histórico é traduzido para pt-BR
Controle total das quantidades de cédulas sem permitir valores negativos

👩‍💻 Autores
Projeto desenvolvido por:

Ana Rita Barontini
João Pedro Guima
Thalles Neto

📌 Observação

Este projeto faz parte do treinamento de desenvolvedores da Dev. Community Mauá, apresenta integração real de API e fluxo de aplicação profissional, simulando o comportamento de um sistema bancário real.
Agradecemos a todos que colaboraram com o projeto e as aulas que nos instruíram para realizá-lo!