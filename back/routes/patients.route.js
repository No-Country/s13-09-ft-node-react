import { Router } from "express";
import patientControllers from "../controllers/patients.controller.js";
const router = Router();

router.post("/register", patientControllers.register);

export default router;