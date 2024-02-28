import corsMiddleware from "./middleware/corsOptions.js";
import express from "express";
import logging from "./middleware/logguerMiddleware.js";
import router from "./routes/index.routes.js";
import swaggerDocs from "./config/swagger.js";

const server = express();

server.use(express.json());
server.use(corsMiddleware());
swaggerDocs(server, process.env.PORT);
server.use(logging);
server.use(router);

export default server;