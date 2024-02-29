import { models } from "../models/index.js";
import { encrypt } from "../helpers/handleBcrypt.js"

export const createDoctorService = async(data) => {
    try {
        const { password, ...dataFields } = data;
        const specialty = await models.specialty.findOne({
            where: { name: data.specialty },
        });
        if (!specialty) return null;
        const hashedPassword = await encrypt(data.password);
        const newDoctor = await models.doctor.create({
            password: hashedPassword,
            ...dataFields,
        });
        await specialty.addDoctor(newDoctor);
        return newDoctor;
    } catch (error) {
        if (
            error.name == "SequelizeDatabaseError" ||
            error.name == "SequelizeUniqueConstraintError" ||
            error.name == "SequelizeValidationError"
        )
            return "bad";
    }
};

export const getDoctorsService = async(name) => {
    try {
        let doctors;
        if (name) {
            doctors = await models.doctor.findAll({
                where: { name: name },
                include: {
                    model: models.specialty,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
            });
        } else {
            doctors = await models.doctor.findAll({
                include: {
                    model: models.specialty,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
            });
        }
        return doctors;
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    }
};

export const getDoctorIdService = async(id) => {
    try {
        const doctor = await models.doctor.findByPk(id, {
            include: {
                model: models.specialty,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        if (!doctor || doctor.length === 0) return null;
        return doctor;
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    }
};

export const updateDoctorService = async(id, data) => {
    try {
        const doctor = await models.doctor.update(data, {
            where: { id },
        });
        return doctor;
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    }
};

export const deleteDoctorService = async(id) => {
    try {
        const doctor = await models.doctor.destroy({ where: { id } });
        return doctor;
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    }
};