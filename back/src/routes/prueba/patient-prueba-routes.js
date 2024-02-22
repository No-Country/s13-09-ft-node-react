import {
  createPatient,
  getPatient,
} from "../../controllers/prueba/patient-prueba-controllers.js";

import { Router } from "express";

const router = Router();

router.get("/", getPatient);
router.post("/", createPatient);

export default router;
