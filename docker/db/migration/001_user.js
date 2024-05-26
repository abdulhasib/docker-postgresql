exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    // table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable(); // Passwords should be hashed
    table.string('refresh_token').notNullable(); // Assuming you store refresh tokens
    // Add other columns as needed for OAuth 2
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};