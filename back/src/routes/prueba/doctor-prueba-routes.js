import {
  createDoctor,
  getDoctor,
} from "../../controllers/prueba/doctor-prueba-controllers.js";

import { Router } from "express";

const router = Router();

router.get("/", getDoctor);
router.post("/", createDoctor);

export default router;
