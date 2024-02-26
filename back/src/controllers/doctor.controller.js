import {
  createDoctorService,
  deleteDoctorService,
  getDoctorIdService,
  getDoctorsService,
  updateDoctorService,
} from "../services/doctor.service.js";

import HttpResponse from "../helpers/HttpResponse.js";
import validateDoctors from "../middleware/validations/doctor-validation.mdw.js";

export const createDoctor = async (req, res) => {
  try {
    validateDoctors(req.body);
    const doctor = await createDoctorService(req.body);
    if (!doctor) return HttpResponse.conflict(res);
    if (doctor == "bad") return HttpResponse.badRequest(res);
    return HttpResponse.created(res, { doctor });
  } catch (error) {
    return HttpResponse.serverError(res, { error: "Could not create doctor" });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const { name } = req.query;
    const doctors = await getDoctorsService(name);
    if (doctors == "bad") return HttpResponse.badRequest(res);
    if (!doctors) return HttpResponse.notFound(res);
    return HttpResponse.success(res, { doctors });
  } catch (error) {
    return HttpResponse.serverError(res);
  }
};

export const getDoctorId = async (req, res) => {
  try {
    const doctor = await getDoctorIdService(req.params.id);
    if (!doctor) return HttpResponse.notFound(res);
    if (doctor == "bad") return HttpResponse.badRequest(res);
    return HttpResponse.success(res, { doctor });
  } catch (error) {
    return HttpResponse.serverError(res, { error: "Could not fetch doctor" });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const update = await updateDoctorService(req.params.id, req.body);

    if (!update) return HttpResponse.conflict(res);

    if (update == "bad") return HttpResponse.badRequest(res);

    return HttpResponse.noContent(res);
  } catch (error) {
    return HttpResponse.serverError(res);
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const remove = await deleteDoctorService(req.params.id);

    if (!remove) return HttpResponse.conflict(res);

    if (remove == "bad") return HttpResponse.badRequest(res);

    return HttpResponse.noContent(res);
  } catch (error) {
    return HttpResponse.serverError(res);
  }
};
