import { models } from "../models/index.js";

async function createPatientFile(patientFile){
    try {
        const newFile = await models.patientFiles.create({...patientFile});

        if (!newFile) return null;
        return newFile;
    } catch (error) {
        if(error.name == "SequelizeDatabaseError" || error.name == "SequelizeUniqueConstraintError" || error.name == "SequelizeValidationError") return "bad";
        throw error;
    };
};

async function getPatientFiles(patientId){
    try {
        const patientFiles= await models.patientFiles.findAll({ where: {patientId: patientId}});

        if (!patientFiles) return null;
        return patientFiles;
    } catch (error) {

        if(error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    };
};

async function getPatientFileById(ids){
    const {patientId, fileId} = ids;

    try {
        const patientFile = await models.patientFiles.findAll({where: {patientId: patientId, id: fileId}});

        if(!patientFile) return null;
        return patientFile;
    } catch (error) {
        if(error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    };
};

async function updatePatientFile(ids, updates){
    const {patientId, fileId} = ids;

    try {
        const updatedFile = await models.patientFiles.update({...updates}, {where: { patientId, id: fileId}});

        return updatedFile;
    } catch (error) {
        if(error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    };
};

async function deletePatientFile(ids){
    const {patientId, fileId} = ids;

    try {
        const deletedFile = await models.patientFiles.destroy({where: { patientId, id: fileId}});

        return deletedFile;
    } catch (error) {
        if(error.name == "SequelizeDatabaseError") return "bad";
        throw error;
    };
};

const patientFilesServices = {
    createPatientFile,
    getPatientFiles,
    getPatientFileById,
    updatePatientFile,
    deletePatientFile
};

export default patientFilesServices;