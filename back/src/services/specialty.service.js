import { models } from "../models/index.js";

export const createSpecialtyService = async (data) => {
  try {
    const newSpecialty = await models.specialty.create(data);
    return newSpecialty;
  } catch (error) {
    if (
      error.name == "SequelizeDatabaseError" ||
      error.name == "SequelizeUniqueConstraintError" ||
      error.name == "SequelizeValidationError"
    )
      return "bad";
  }
};

export const getSpecialtiesService = async (name) => {
  try {
    let specialties;
    if (name) {
      specialties = await models.specialty.findAll({
        where: { name: name },
      });
    } else {
      specialties = await models.specialty.findAll({});
    }
    return specialties;
  } catch (error) {
    if (error.name == "SequelizeDatabaseError") return "bad";
    throw error;
  }
};

export const getSpecialtyIdService = async (id) => {
  try {
    const specialty = await models.specialty.findByPk(id);
    if (!specialty || specialty.length === 0) return null;
    return specialty;
  } catch (error) {
    if (error.name == "SequelizeDatabaseError") return "bad";
    throw error;
  }
};

export const updateSpecialtyService = async (id, data) => {
  try {
    const specialty = await models.specialty.update(data, {
      where: { id },
    });
    return specialty;
  } catch (error) {
    if (error.name == "SequelizeDatabaseError") return "bad";
    throw error;
  }
};

export const deleteSpecialtyService = async (id) => {
  try {
    const specialty = await models.specialty.destroy({ where: { id } });
    return specialty;
  } catch (error) {
    if (error.name == "SequelizeDatabaseError") return "bad";
    throw error;
  }
};
