import corsMiddleware from "./middleware/corsOptions.js";
import express from "express";
import logging from "./middleware/logguerMiddleware.js";
import routes from "./routes/index.routes.js";

const server = express();

server.use(express.json());
server.use(logging);
server.use(corsMiddleware);
server.use("/", routes);

export default server;
