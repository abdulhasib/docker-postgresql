const dbMigrate = require('./migrate');
const dbImport = require('./import');

const run = async () => {
  try {
    await dbMigrate.run();
    await dbImport.run();
    process.exit(0);
  } catch (e) {
    console.log('error running build', e);
    process.exit(1);
  }
}

run();
