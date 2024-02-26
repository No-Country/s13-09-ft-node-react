import jwt from "jsonwebtoken";
import "dotenv/config";
import HttpResponse from "../helpers/HttpResponse.js";

const SECRET_KEY = process.env.SECRET_KEY;

function authVerificationMiddleware(roles){
  return (req, res, next) => {
    try {
      const token = req.headers["authorization"];

      if (!token) return HttpResponse.unauthorized(res, {message: "Token not provided"});
  
      jwt.verify(token, SECRET_KEY, (err, {user}) => {
        if (err || !roles.includes(user.role)) {
          return HttpResponse.unauthorized(res);
        };
        next();
      });
    } catch (error) {
      return HttpResponse.serverError(res);
    };
  };
};

export default authVerificationMiddleware;