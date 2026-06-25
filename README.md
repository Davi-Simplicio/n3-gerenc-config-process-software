# Projeto E-Commerce (Avaliação N3)

Este repositório contém a entrega final da avaliação N3 desenvolvida para a disciplina de **Gerenciamento, Configuração e Processos de Software**, parte da grade do curso de **Engenharia de Software**.

O projeto consiste em uma aplicação web full-stack para gestão de um cenário de E-Commerce, contemplando desde a criação e modelagem da API RESTful até o consumo via Front-end e a automação do ciclo de vida com CI/CD.

## Tecnologias Utilizadas

- **Back-end:** NestJS, TypeScript, Prisma ORM e SQLite
- **Front-end:** React, TypeScript, Vite e Vanilla CSS
- **CI/CD:** Drone CI integrado com Gogs
- **Documentação:** OpenAPI (Swagger)

## Como Executar Localmente

Antes de iniciar o servidor, execute os comandos do Prisma para estruturar as tabelas localmente e atualizar as tipagens do client:

npx prisma db push
npx prisma generate

### 1. Back-end (API)
Navegue até a pasta `backend`, instale as dependências e inicie o servidor em modo de desenvolvimento:
```bash
cd backend
npm install
npm run start:dev
```
A API estará rodando na porta 3000. A documentação interativa do Swagger ficará disponível em: `http://localhost:3000/api`

### 2. Front-end (Interface Web)
Abra um novo terminal, navegue até a pasta `frontend` e rode a aplicação:
```bash
cd frontend
npm install
npm run dev
```

### 3. CI/CD (Testes Locais com Drone CLI)
Para executar e validar localmente as esteiras de CI/CD definidas no arquivo `.drone.yml`, certifique-se de que o **Docker** está rodando no seu computador e utilize o **Drone CLI** (presente na raiz do projeto):

No terminal (na raiz do projeto), execute o pipeline do Back-end:
```bash
./drone.exe exec --pipeline backend-ci
```

Para executar o pipeline do Front-end:
```bash
./drone.exe exec --pipeline frontend-ci
```

## Integrantes da Equipe

- Arthur Bretzke
- Davi Simplício
- Gabriel Koehler
- Geison Carlos Melo
- Jonatas Jackson Gonçalves
- Kaique Fernandes
- Wesley Diorrani Ferreira
