exports.up = function(knex) {
  return knex.schema.createTable('customer_address', function(table) {
    // table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.increments('id').primary();
    table.string('address1').notNullable();
    table.string('city').notNullable();
    table.string('postalcode').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customer_address');
};
