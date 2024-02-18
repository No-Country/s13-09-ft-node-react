import express from "express";
import authRoutes from "./auth.route.js";
import patientRoutes from "./patients.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/patients", patientRoutes);

export default router;