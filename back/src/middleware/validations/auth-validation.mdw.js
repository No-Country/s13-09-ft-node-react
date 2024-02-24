import { check } from "express-validator";
import checkValidationResult from "./validator.js";


const validateEmail = check('email')
  .trim()
  .notEmpty().withMessage('Email requerido')
  .isEmail().withMessage('Formato email inválido');

const validatePassword = check('password')
  .trim()
  .notEmpty().withMessage('Clave requerida')
  .isLength({ min: 8 }).withMessage('Clave de al menos 8 caracteres y un número')
  .matches(/^(?=.*[0-9])/).withMessage('Clave debe contener al menos un número y 8 caracteres');


export const validateLogin = [
  validateEmail,
  validatePassword,
  checkValidationResult
]
