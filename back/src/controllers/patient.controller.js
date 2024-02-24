import HttpResponse from "../helpers/HttpResponse.js";
import patientServices from "../services/patient.service.js";
import { models } from "../models/index.js";

async function register(req, res) {
    try {
        const { data } = req.body;
        const newUser = await patientServices.register(data);
        if (newUser === "ALREADY PATIENT") return HttpResponse.badRequest(res, { error: 'User already registered' });
        return HttpResponse.created(res, { newUser });
    } catch (error) {
        return HttpResponse.serverError(res, { error: 'Could not register' });
    }
}

async function getPatients(req, res) {
    try {
        const patientList = await patientServices.getPatients();
        if (patientList == "bad") return HttpResponse.badRequest(res);
        if (!patientList) return HttpResponse.notFound(res);
        return HttpResponse.success(res, { patientList });

    } catch (error) {
        return HttpResponse.serverError(res, { error: 'Could not fetch patients' });
    }
}

async function getPatient(req, res) {
    const id = req.params.id;
    try {
        const patient = await patientServices.getPatient(id);
        if (!patient) return HttpResponse.notFound(res);
        if (patient == "bad") return HttpResponse.badRequest(res);
        return HttpResponse.success(res, { patient });
    } catch (error) {
        return HttpResponse.serverError(res, { error: 'Could not fetch patient data' });
    }
}

async function updatePatient(req, res) {
    const id = req.params.id;
    try {
        const updatePatient = await patientServices.updatePatient(id, req.body);
        if (!updatePatient) return HttpResponse.conflict(res);
        if (updatePatient == "bad") return HttpResponse.badRequest(res);
        return HttpResponse.noContent(res);
    } catch (error) {
        return HttpResponse.serverError(res);
    }
}

async function deletePatient(req, res) {
    const id = req.params.id;
    try {
        const removedPatient = await patientServices.deletePatient(id);
        if (!removedPatient) return HttpResponse.conflict(res);
        if (removedPatient == "bad") return HttpResponse.badRequest(res);
        return HttpResponse.noContent(res);
    } catch (error) {
        return HttpResponse.serverError(res);
    }
}

const patientControllers = {
    register,
    getPatients,
    getPatient,
    updatePatient,
    deletePatient
};

export default patientControllers;