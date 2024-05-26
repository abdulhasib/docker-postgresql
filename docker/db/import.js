require('dotenv').config()

const { Client } = require('pg');
const fs = require('fs');

const getClient = () => {
  return new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
  });
}

const run = async () => {
  const client = getClient();

  try {
    await client.connect();

    // Read SQL commands from data.sql file
    const sqlCommands = fs.readFileSync('./docker/db/import/data.sql', 'utf8');

    // Execute SQL commands
    await client.query(sqlCommands);

    console.log('Data imported successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await client.end();
  }
}

module.exports = { run };
