import { models } from "../../models/index.js";

export const getPatientFilesService = async () => {
  const prueba = await models.patientFiles.findAll();

  return prueba;
};

export const createPatientFilesService = async () => {
  const prueba = models;
  return prueba;
};
