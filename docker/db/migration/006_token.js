exports.up = function(knex) {
  return knex.schema.createTable('token', function(table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
    table.string('refresh_token').notNullable();
    table.timestamp('expires_at').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('token');
};