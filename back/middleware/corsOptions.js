import "dotenv/config";

import cors from "cors";

const ACCEPTED_ORIGINS = [process.env.CORS];

const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  });

export default corsMiddleware;
