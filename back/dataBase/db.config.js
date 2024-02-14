import "dotenv/config";

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  `${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

export default sequelize;
