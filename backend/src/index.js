const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
//* Métodos HTTP:
//* GET: buscar uma informção no backend
//* POST: criar uma informção no backend
//* PUT: alterar uma informação no backend
//* DELETE: deletar uma informação no backend 
*/

 /**
  * Tipos de parametros:
  * 
  * Query params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
  * Route params: Parametros utilizados para identificar recursos
  * request body: corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */