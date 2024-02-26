import HttpResponse from "../helpers/HttpResponse.js";
import { patientFilesServices } from "../services/index.services.js";

async function createPatientFile(req, res){
    const patientFile = req.body;
    try {
        const newPatientFile = await patientFilesServices.createPatientFile(patientFile);

        if (!newPatientFile) return HttpResponse.conflict(res);
        if (newPatientFile === "bad") return HttpResponse.badRequest(res);

        return HttpResponse.created(res, { newPatientFile });
    } catch (error) {
        return HttpResponse.serverError(res, {error: "Could not upload file"});
    };
};

async function getPatientFiles(req, res){
    const patientId = req.params.patientId;
    try {
        const patientFiles = await patientFilesServices.getPatientFiles(patientId);

        if (!patientFiles) return HttpResponse.notFound(res);
        if (patientFiles === "bad") HttpResponse.badRequest(res);

        return HttpResponse.success(res, { patientFiles });
    } catch (error) {
        return HttpResponse.serverError(res, {error: "Could not fetch patient's files"});
    };
};

async function getPatientFileById(req, res){
    const {patientId, fileId} = req.params;

    try {
        const patientFiles = await patientFilesServices.getPatientFileById({patientId, fileId});

        if (!patientFiles) return HttpResponse.notFound(res);
        if (patientFiles === "bad") HttpResponse.badRequest(res);

        return HttpResponse.success(res, { patientFiles });
    } catch (error) {
        return HttpResponse.serverError(res, {error: "Could not fetch patient's file"});
    };
};

async function updatePatientFile(req, res){
    const updates= req.body;
    const { patientId, fileId } = req.params;

    try {
        const updatedFile = await patientFilesServices.updatePatientFile({patientId, fileId}, updates);

        if(!updatedFile) return HttpResponse.conflict(res);
        if(updatedFile === "bad") return HttpResponse.badRequest(res);

        return HttpResponse.noContent(res);
    } catch (error) {
        return HttpResponse.serverError(res);
    };
};

async function deletePatientFile(req, res){
    const { patientId, fileId } = req.params;

    try {
        const deletedFile = await patientFilesServices.deletePatientFile({ patientId, fileId });

        if(!deletedFile) return HttpResponse.conflict(res);
        if(deletedFile === "bad") return HttpResponse.badRequest(res);

        return HttpResponse.noContent(res);
    } catch (error) {
        return HttpResponse.serverError(res);
    };
};

const patientFilesController = {
    createPatientFile,
    getPatientFiles,
    getPatientFileById,
    updatePatientFile,
    deletePatientFile
};

export default patientFilesController;