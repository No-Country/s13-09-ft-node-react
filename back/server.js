import "dotenv/config";

import sequelize from "./dataBase/db.config.js";
import server from "./app.js";

const initializeServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }).then(() => {
      server.listen(`${process.env.PORT}`, () => {
        console.log(`Server listening on ${process.env.PORT}`);
      });
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initializeServer();
