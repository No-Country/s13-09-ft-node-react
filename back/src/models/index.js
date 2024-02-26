import "dotenv/config";

import { DataTypes, Sequelize } from "sequelize";
import { basename, dirname } from "path";

import { fileURLToPath } from "node:url";
import path from "path";
import { readdirSync } from "fs";

// import path  here

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
const db = {};

const sequelize = new Sequelize(
    `${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true`, {
        logging: false,
        native: false,
    }
);

const modelsDir = path.resolve(__dirname);

const files = readdirSync(modelsDir).filter(
    (file) =>
    file.indexOf(".") !== 0 &&
    file !== basename(__filename) &&
    file.slice(-3) === ".js"
);

for await (const file of files) {
    // use path here to access your models from models directory then await for it @
    const modelPath = path.resolve(modelsDir, file);
    const model = await
    import (`file://${modelPath}`);
    if (model.default) {
        const namedModel = await model.default(sequelize, DataTypes);
        db[namedModel.name] = namedModel;
    }
}

Object.keys(db).forEach((modelName) => {
    if (modelName) {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export const models = sequelize.models;

export default db;