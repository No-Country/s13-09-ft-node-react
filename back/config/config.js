import 'dotenv/config'

const config = {
  development: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "localhost",
    "dialect": process.env.DB_DIALECT
  },
  test: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "localhost",
    "dialect": process.env.DB_DIALECT
  },
  production: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "localhost",
    "dialect": process.env.DB_DIALECT
  }
};

export default config;
