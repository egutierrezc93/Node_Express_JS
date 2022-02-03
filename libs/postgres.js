const { Client } = require('pg');

function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'guti',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
