import {
  createSpecialty,
  getSpecialty,
} from "../../controllers/prueba/speacialty-prueba-controllers.js";

import { Router } from "express";

const router = Router();

router.get("/", getSpecialty);
router.post("/", createSpecialty);

export default router;
