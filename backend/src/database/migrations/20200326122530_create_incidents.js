/** 
 * npx knex --> lista os comandos disponíveis
 * npx knex migrate:make create_incidents --> criar a tabela (create_incidents é o nome da tabela)
 * npx knex migrate:latest --> executar o código abaixo e criar as colunas da tabela
 * npx knex migrate:rollback --> desfazer a execução do último migrate:latest
 * npx knex migrate:status --> listar as migrates já executadas
 */
 
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        //chave primária
        table.increments();
        //campos
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        //chave estrangeira
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
