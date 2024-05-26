exports.up = function(knex) {
  return knex.schema.createTable('customer_name', function(table) {
    // table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.increments('id').primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customer_name');
};
