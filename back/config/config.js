import 'dotenv/config'

const config = {
    development: {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        "dialectOptions": {
          ssl: false
      }
    },
    test: {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.TEST_HOST,
        "dialect": process.env.TEST_DIALECT,
        "dialectOptions": {
          ssl: false
      }
    },
    production: {
        "username": process.env.PGUSER,
        "password": process.env.PGPASSWORD,
        "database": process.env.PGDATABASE,
        "host": process.env.PGHOST,
        "dialect": process.env.DB_DIALECT,
        "dialectOptions": {
          ssl: true
      }
    }
};

export default config;