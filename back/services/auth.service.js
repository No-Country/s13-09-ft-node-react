import patients from "../models/patient.js";
import doctors from  "../models/doctor.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

async function login(email) {
  try {
    const user = await patients.findOne({
      where: {email: email}
    });
    if (user) return user;

    const employee = await doctors.findOne({
      where: { email: email }
    });

    if (employee) return employee;
  } catch (error){
    return {
      message: error
    };
  };
};

async function generateToken(){
  return jwt.sign(JSON.stringify(user), SECRET_KEY, { expiresIn: "1h" });
};

const authServices= {
  login,
  generateToken
};

export default authServices;