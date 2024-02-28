import "dotenv/config";

import { DataTypes, Sequelize } from "sequelize";
import { basename, dirname } from "path";

import { fileURLToPath } from "node:url";
import path from "path";
import { readdirSync } from "fs";
import config from "../../config/config.js";

const env = process.env.NODE_ENV || 'development';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
const db = {};


const sequelize = new Sequelize(
    config[env].database,
    config[env].username,
    config[env].password,
    {
        host: config[env].host,
        dialect: config[env].dialect,
        dialectOptions: config[env].dialectOptions,
        logging: false,
        native: false
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