import {
  createAppointmentService,
  getAppointmentService,
} from "../../services/prueba/appointment-prueba-services.js";

export const getAppointment = async (req, res) => {
  try {
    const response = await getAppointmentService();
    return res.status(200).json(response);
  } catch (error) {}
};

export const createAppointment = async (req, res) => {
  try {
  } catch (error) {}
};
