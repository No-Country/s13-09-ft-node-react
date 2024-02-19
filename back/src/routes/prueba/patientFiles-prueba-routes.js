import {
  createPatientFiles,
  getPatientFiles,
} from "../../controllers/prueba/patientFiles-prueba-controllers.js";

import { Router } from "express";

const router = Router();

router.get("/", getPatientFiles);
router.post("/", createPatientFiles);

export default router;
