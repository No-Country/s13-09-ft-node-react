import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

async function verifyUser(token){
    try {  
      const id = await jwt.verify(token, SECRET_KEY, (err, {user}) => {
        if (err) {
          return null
        };
        return user.id
      });
      return id
    } catch (error) {
      return null
    };
  };


export default verifyUser;