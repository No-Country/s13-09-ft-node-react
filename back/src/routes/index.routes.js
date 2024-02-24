import { Router } from "express";
import authRoutes from "./auth.route.js";
import appointmentRoutes from "./appointment.route.js"
import patientRoutes from "./patient.route.js"
import HttpResponse from "../helpers/HttpResponse.js";

const router = Router();


router
    .use("/auth", authRoutes)
    .use('/appointment', appointmentRoutes)
    .use("/patients", patientRoutes)
    .use("/*", (req, res) => {
        return HttpResponse.notFound(res, { url: req.baseUrl })
    });

export default router;