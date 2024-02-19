import { models } from "../../models/index.js";

export const getPatientService = async () => {
  const prueba = await models.patient.findAll();

  return prueba;
};

export const createPatientService = async () => {
  const prueba = models;
  return prueba;
};
