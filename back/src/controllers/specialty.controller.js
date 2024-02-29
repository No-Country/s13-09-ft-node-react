import {
  createSpecialtyService,
  deleteSpecialtyService,
  getSpecialtiesService,
  getSpecialtyIdService,
  updateSpecialtyService,
} from "../services/specialty.service.js";

import HttpResponse from "../helpers/HttpResponse.js";

export const createSpecialty = async (req, res) => {
  try {
    const specialty = await createSpecialtyService(req.body);
    if (!specialty) return HttpResponse.conflict(res);
    if (specialty == "bad") return HttpResponse.badRequest(res);
    return HttpResponse.created(res, { specialty });
  } catch (error) {
    return HttpResponse.serverError(res, {
      error: "Could not create specialty",
    });
  }
};

export const getSpecialties = async (req, res) => {
  try {
    const { name } = req.query;
    const specialty = await getSpecialtiesService(name);
    if (specialty == "bad") return HttpResponse.badRequest(res);
    if (!specialty) return HttpResponse.notFound(res);
    return HttpResponse.success(res, { specialty });
  } catch (error) {
    return HttpResponse.serverError(res);
  }
};

export const getSpecialtyId = async (req, res) => {
  try {
    const specialty = await getSpecialtyIdService(req.params.id);
    if (!specialty) return HttpResponse.notFound(res);
    if (specialty == "bad") return HttpResponse.badRequest(res);
    return HttpResponse.success(res, { specialty });
  } catch (error) {
    return HttpResponse.serverError(res, {
      error: "Could not fetch Specialty",
    });
  }
};

export const updateSpecialty = async (req, res) => {
  try {
    const update = await updateSpecialtyService(req.params.id, req.body);

    if (!update) return HttpResponse.conflict(res);

    if (update == "bad") return HttpResponse.badRequest(res);

    return HttpResponse.noContent(res);
  } catch (error) {
    return HttpResponse.serverError(res);
  }
};

export const deleteSpecialty = async (req, res) => {
  try {
    const remove = await deleteSpecialtyService(req.params.id);

    if (!remove) return HttpResponse.conflict(res);

    if (remove == "bad") return HttpResponse.badRequest(res);

    return HttpResponse.noContent(res);
  } catch (error) {
    return HttpResponse.serverError(res);
  }
};
