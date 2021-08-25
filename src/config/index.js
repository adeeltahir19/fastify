require('dotenv').config();
const db = {
  username: process.env.username || 'username',
  password: process.env.password || 'password',
  database: process.env.database || 'db',
  cluster: process.env.cluster || 'cluster',
};

const connectionString = `mongodb+srv://${db.username}:${db.password}@${db.cluster}/${db.database}?retryWrites=true&w=majority`;

const wistiaApiKey = process.env.wistiaapi || 'wisitiapi';

const authSecret = process.env.auth || '';

module.exports = {
  connectionString,
  wistiaApiKey,
  authSecret
};