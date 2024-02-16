import { Router } from "express";
import authControllers from "../controllers/auth.controller";

const router = Router();

router.post("/login", authControllers.login);
router.post("/logout", );

export default router;