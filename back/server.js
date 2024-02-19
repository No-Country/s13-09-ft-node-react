import "dotenv/config";

import db from "./src/models/index.js";
import server from "./src/app.js";

(async () => {
  try {
    await db.sequelize.authenticate();
    server.listen(`${process.env.PORT}`, () => {
      console.log(`Server listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
