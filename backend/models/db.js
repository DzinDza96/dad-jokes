const sql = require('mssql');

// Load environment variables
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
  },
};

let pool;

async function db() {
  if (!pool) {
    try {
      pool = await sql.connect(config);
      console.log('Connected to the database.');
    } catch (err) {
      console.error('Database connection failed:', err);
      process.exit(1);
    }
  }
  return pool;
}

module.exports = db;
