import { validationResult } from 'express-validator';
import { default as HttpResponse } from '../../helpers/HttpResponse.js';

function checkValidationResult(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  return HttpResponse.badRequest(res, { errors: result.array() });
};





export default checkValidationResult
