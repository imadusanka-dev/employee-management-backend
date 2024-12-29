import 'dotenv/config';
import { Pool } from 'pg';

const main = async () => {
  const adminPool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres', // Use the default `postgres` database for admin tasks
  });

  try {
    const dbName = process.env.DB_NAME;

    // Check if the database exists
    const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = $1`;
    const result = await adminPool.query(checkDbQuery, [dbName]);

    if (result.rowCount === 0) {
      console.log(`Database "${dbName}" does not exist. Creating...`);
      await adminPool.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database "${dbName}" created successfully.`);
    } else {
      console.log(`Database "${dbName}" already exists.`);
    }
  } catch (error) {
    console.error('Error while checking/creating the database:', error);
  } finally {
    await adminPool.end(); // Ensure the pool is closed properly
    process.exit(0);
  }
};

main();
