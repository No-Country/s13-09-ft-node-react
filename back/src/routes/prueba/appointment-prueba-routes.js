import {
  createAppointment,
  getAppointment,
} from "../../controllers/prueba/appointment-prueba-controllers.js";

import { Router } from "express";

const router = Router();

router.get("/", getAppointment);
router.post("/", createAppointment);

export default router;
