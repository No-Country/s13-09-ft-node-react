import {
  createSpecialtyService,
  getSpecialtyService,
} from "../../services/prueba/speacialty-prueba-services.js";

export const getSpecialty = async (req, res) => {
  try {
    const response = await getSpecialtyService();
    res.status(200).json(response);
  } catch (error) {}
};

export const createSpecialty = async (req, res) => {
  try {
  } catch (error) {}
};
