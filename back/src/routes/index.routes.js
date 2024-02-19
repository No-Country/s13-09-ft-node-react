import { Router } from "express";
import appointmentRoutes from "./prueba/appointment-prueba-routes.js";
import authRoutes from "./auth.route.js";
import doctorRoutes from "./prueba/doctor-prueba-routes.js";
import patientFileRoutes from "./prueba/patientFiles-prueba-routes.js";
import patientRoutes from "./prueba/patient-prueba-routes.js";
import specialtyRoutes from "./prueba/speacialty-prueba-routes.js";

const router = Router();

router
  .use("/auth", authRoutes)
  .use("/patient", patientRoutes)
  .use("/doctor", doctorRoutes)
  .use("/patientFile", patientFileRoutes)
  .use("/appointment", appointmentRoutes)
  .use("/specialty", specialtyRoutes);

export default router;
