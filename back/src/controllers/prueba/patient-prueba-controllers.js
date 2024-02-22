import {
  createPatientService,
  getPatientService,
} from "../../services/prueba/patient-prueba-services.js";

export const getPatient = async (req, res) => {
  try {
    const response = await getPatientService();
    res.status(200).json(response);
  } catch (error) {}
};

export const createPatient = async (req, res) => {
  try {
  } catch (error) {}
};
