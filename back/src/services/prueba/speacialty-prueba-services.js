import { models } from "../../models/index.js";

export const getSpecialtyService = async () => {
  const prueba = await models.specialty.findAll();

  return prueba;
};

export const createSpecialtyService = async () => {
  const prueba = models;
  return prueba;
};
