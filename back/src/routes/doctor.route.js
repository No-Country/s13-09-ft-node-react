import {
  createDoctor,
  deleteDoctor,
  getDoctorId,
  getDoctors,
  updateDoctor,
} from "../controllers/doctor.controller.js";

import { Router } from "express";

const router = Router();

router
  .get("/", getDoctors)
  .post("/", createDoctor)
  .get("/:id", getDoctorId)
  .patch("/:id", updateDoctor)
  .delete("/:id", deleteDoctor);

export default router;
