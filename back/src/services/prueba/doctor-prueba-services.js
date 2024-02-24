import { models } from "../../models/index.js";

export const getDoctorService = async () => {
  console.log("entre");
  const prueba = await models.doctor.findAll();

  return prueba;
};

export const createDoctorService = async () => {
  const prueba = models;
  return prueba;
};
