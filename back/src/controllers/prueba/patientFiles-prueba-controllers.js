import {
  createPatientFilesService,
  getPatientFilesService,
} from "../../services/prueba/patientFiles-prueba-services.js";

export const getPatientFiles = async (req, res) => {
  try {
    const response = await getPatientFilesService();
    res.status(200).json(response);
  } catch (error) {}
};

export const createPatientFiles = async (req, res) => {
  try {
  } catch (error) {}
};
