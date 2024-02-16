import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

function authVerificationMiddleware(req, res, next) {
  const token = req.headers["Authorization"];

  if (!token) res.status(403).send({
    message: "Token not provided"
  });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      res.status(403).json({ message: "Invalid token"});
    };
    next();
  });
};

export default authVerificationMiddleware;