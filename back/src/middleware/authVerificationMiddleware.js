import jwt from "jsonwebtoken";
import "dotenv/config";
import HttpResponse from "../helpers/HttpResponse";

const SECRET_KEY = process.env.SECRET_KEY;

function authVerificationMiddleware(req, res, next) {
  try {
    const token = req.headers["Authorization"];

    if (!token) HttpResponse.unauthorized(res, {message: "Token not provided"});
  
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return HttpResponse.unauthorized(res);
      };
      next();
    });
  } catch (error) {
    return HttpResponse.serverError(res);
  };
};

export default authVerificationMiddleware;