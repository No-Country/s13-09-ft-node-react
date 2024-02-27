import HttpResponse from "../helpers/HttpResponse.js";
import { Router } from "express";
import appointmentRoutes from "./appointment.route.js";
import authRoutes from "./auth.route.js";
import doctorRoutes from "./doctor.route.js";
import patientFilesRouter from "./patientFile.route.js";
import patientRoutes from "./patient.route.js";
import specialtyRoutes from "./specialty.route.js";

const router = Router();

router
  .use("/auth", authRoutes)
  .use("/appointment", appointmentRoutes)
  .use("/patients", patientRoutes)
  .use("/patient-files", patientFilesRouter)
  .use("/doctor", doctorRoutes)
  .use("/specialty", specialtyRoutes)
  .use("/*", (req, res) => {
    return HttpResponse.notFound(res, { url: req.baseUrl });
  });

export default router;
