/** 
 * npx knex --> lista os comandos disponíveis
 * npx knex migrate:make create_ongs --> criar a tabela (create_ongs é o nome da tabela)
 * npx knex migrate:latest --> executar o código abaixo e criar as colunas da tabela
 * npx knex migrate:rollback --> desfazer a execução do último migrate:latest
 * npx knex migrate:status --> listar as migrates já executadas
 */
 
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    //chave primaria
    table.string('id').primary();
    //campos
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
    //método para dropar a tabela caso dê errado.
    return knex.schema.dropTable('ongs');
};
