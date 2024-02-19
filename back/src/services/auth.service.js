import "dotenv/config";

import jwt from "jsonwebtoken";
import { models } from "../models/index.js";

const SECRET_KEY = process.env.SECRET_KEY;

async function login(email) {
  try {
    const user = await models.patient.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: { email: email },
    });

    if (user) return user;

    const employee = await models.doctor.findOne({
      where: { email: email },
    });

    if (employee) return employee;
  } catch (error) {
    return {
      message: error,
    };
  }
}

async function generateToken(user) {
  return jwt.sign({ user }, SECRET_KEY, { expiresIn: "1h" });
}

const authServices = {
  login,
  generateToken,
};

export default authServices;
