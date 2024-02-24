import { models } from "../../models/index.js";

export const getAppointmentService = async () => {
  const prueba = await models.appointment.findAll();

  return prueba;
};

export const createAppointmentService = async () => {
  const prueba = models;
  return prueba;
};
