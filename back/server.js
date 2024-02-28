import "dotenv/config";

import db, { models } from "./src/models/index.js";

import server from "./src/app.js";

(async () => {
  try {
    await db.sequelize.authenticate();
    if(process.env.NODE_ENV!='development') await db.sequelize.sync()
    server.listen(`${process.env.PORT}`, () => {
      console.log(`Server listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
