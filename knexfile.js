require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      port: 5432
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './docker/db/migration'
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './migration'
  //   }
  // }
};
