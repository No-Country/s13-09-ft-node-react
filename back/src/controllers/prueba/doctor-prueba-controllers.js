import {
  createDoctorService,
  getDoctorService,
} from "../../services/prueba/doctor-prueba-services.js";

export const getDoctor = async (req, res) => {
  try {
    const response = await getDoctorService();
    res.status(200).json(response);
  } catch (error) {}
};

export const createDoctor = async (req, res) => {
  try {
  } catch (error) {}
};
