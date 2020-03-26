/** Métodos HTTP
 * GET: Buscar/Listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */
/** Conceito de Rota/Recursos
/**Tipos de Parâmetros 
 * Query Params: parâmetros enviados na rota após "?"(Filtros, paginação)
 * Route Params: pararâmetros utilizados para identificar recursos
 * Request Body; corpo da requisiçao, utilizado para criar ou alterar recursos
 */
/** Bancos de Dados
 * SQL: MySQL, SQLite, ProstgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
*/
/** Execução de Querys
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

/** npm start --> executa a aplicação */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
