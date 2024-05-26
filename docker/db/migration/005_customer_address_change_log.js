exports.up = function(knex) {
  return knex.schema.createTable('customer_address_change_log', function(table) {
    // table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.increments('id').primary();
    table.integer('customer_address_id').unsigned().notNullable().references('id').inTable('customer_address').onDelete('CASCADE');
    table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
    table.jsonb('data').notNullable();
    table.timestamp('date_created').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customer_address_change_log');
};
