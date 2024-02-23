import { check, query } from "express-validator";
import checkValidationResult from "./validator.js";

/**Create appointment */

const validatePatientId = check('patientId')
  .trim()
  .notEmpty().withMessage('ID paciente requerido')
  .isUUID().withMessage('Id incorrecto')

const validateDoctorId = check('doctorId')
  .trim()
  .notEmpty().withMessage('ID doctor requerido')
  .isUUID().withMessage('Id incorrecto')

const validateObservations = check('observations')
  .isObject().withMessage('Observations tiene que ser un JSON');

const validateDay = check('day')
  .isISO8601().withMessage('Formato dia inválido. ISO 8601 (YYYY-MM-DD)');

const validateTime = check('time')
  .custom((value) => {
    const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/; 
    if (!timeRegex.test(value)) {
      throw new Error('Formato hora inválido. HH:mm:ss');
    }
    return true;
  });

export const createAppointmentValidation = [
    validatePatientId,
    validateDoctorId,
    validateObservations,
    validateDay,
    validateTime,
    checkValidationResult
  ]

/* GET appointment queries */

function checkAllowedQueryParams(req, res, next) {
  const allowedParams = ['id', 'patientId', 'doctorId'];
  const queryParams = Object.keys(req.query);
  
  const invalidParams = queryParams.filter(param => !allowedParams.includes(param));
  if (invalidParams.length > 0) {
    return res.status(400).json({ errors: [{ msg: `Query inválida ${invalidParams}` }] });
  }
  
  next();
}

export const getAppointmentsQuery = [
  checkAllowedQueryParams,
  query('id').optional().isUUID().withMessage("Id incorrecto"),
  query('patientId').optional().isUUID().withMessage("Id incorrecto"),
  query('doctorId').optional().isUUID().withMessage("Id incorrecto"),
  checkValidationResult
];


