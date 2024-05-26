const knex = require('knex')(require('../../knexfile').development);

// const migrations = [
//   { name: 'user', script: require('./migrations/001_user') },
//   { name: 'customer_name', script: require('./migrations/002_customer_name') },
//   { name: 'customer_name_change_log', script: require('./migrations/003_customer_name_change_log') },
// ];

const run = async () => {
  try {
    // Poll PostgreSQL until it becomes available
    let retries = 5;
    while (retries) {
      try {
        await knex.raw('SELECT 1');
        console.log('PostgreSQL is ready');
        break; // Exit the loop if connection is successful
      } catch (error) {
        console.error('Error connecting to PostgreSQL:', error.message);
        retries -= 1;
        console.log(`Retrying in 5 seconds... (${retries} retries left)`);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
      }
    }

    // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'); // create the extension to generate uuid
    await knex.migrate.latest();

    // // Run each migration script sequentially
    // for (const migration of migrations) {
    //   await migration.script.up(knex);
    //   console.log(`'${migration.name}' table migrated successfully.`);
    // }

    console.log('Migrations completed successfully.');
    // process.exit(0); // Exit with success status
  } catch (error) {
    console.error('Error running migrations:', error);
    // process.exit(1);
  } finally {
    await knex.destroy();
  }
}

module.exports = { run };
