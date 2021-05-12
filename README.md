## Cadastro de anúncios

App desenvolvido para cadastro de anúncios e relatório dos anúncios cadastrados:

- Ao acessar a página principal o usuário visualiza a listagem de todos os anúncios cadastrados no período
- Na área de busca é possível filtrar os dados do relatório por datas e clientes
- Ao clicar no botão "cadastrar anúncio" o usuário poderá inserir um novo anúncio na base de dados
- Todos os campos são de preenchimento obrigatório e a data de término não deve ser inferior a data de início do anúncio
- Ao receber os inputs do usuário, o sistema calcula "Valor total investido(R$)", "Visualizações(máx)", "Cliques(máx)" e "Compartilhamentos(máx)" com base nas regras de negócio aplicáveis para calculadora de alcance de anúncios.


### Tecnologias utilizadas

- aplicação desenvolvida em [Node.js](https://nodejs.org/en/) com servidor [Express](https://expressjs.com/pt-br/);
- banco de dados [PostgreSQL](https://www.postgresql.org/);
- ORM [Sequelize](https://sequelize.org/master/);
- estruturação das views com o [EJS](https://ejs.co/); 
- [Bootstrap](https://getbootstrap.com/) para estilização das views;
- [Jest](https://jestjs.io/pt-BR/) para implementação de testes unitários;


### Requisitos

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

### Como executar a aplicação

1. No terminal, clonar o projeto: `git clone https://github.com/malufell/cadastro-anuncios.git`
2. Entrar na pasta do projeto: `cd cadastro-anuncios`
3. Instalar as dependências: `npm install`
4. Configurar o banco de dados PostgreSQL: no arquivo `src/config/config.json` é necessário atualizar as informações abaixo conforme o PostgreSQL local
```
{
  "development": {
    "username": "postgres",
    "password": "admin",
    "database": "anuncios",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```
5. Rodar as migrações do Sequelize para criar as tabelas no banco de dados: `npx sequelize-cli db:migrate`
6. Rodar a aplicação: `npm start`
7. Acessar `http://localhost:3000/` no navegador


