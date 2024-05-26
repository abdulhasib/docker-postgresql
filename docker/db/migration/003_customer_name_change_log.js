exports.up = function(knex) {
  return knex.schema.createTable('customer_name_change_log', function(table) {
    // table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.increments('id').primary();
    table.integer('customer_name_id').unsigned().notNullable().references('id').inTable('customer_name').onDelete('CASCADE');
    table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
    table.jsonb('data').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customer_name_change_log');
};
