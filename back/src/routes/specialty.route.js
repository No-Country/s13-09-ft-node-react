import {
  createSpecialty,
  deleteSpecialty,
  getSpecialties,
  getSpecialtyId,
  updateSpecialty,
} from "../controllers/specialty.controller.js";

import { Router } from "express";

const router = Router();

router
  .get("/", getSpecialties)
  .post("/", createSpecialty)
  .get("/:id", getSpecialtyId)
  .patch("/:id", updateSpecialty)
  .delete("/:id", deleteSpecialty);

export default router;
