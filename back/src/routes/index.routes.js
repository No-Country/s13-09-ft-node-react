import { Router } from "express";
import authRoutes from "./auth.route.js";
import patientRoutes from "./patients.route.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/patients", patientRoutes);
router.use("/", (req, res) => {
    res.send("hola");
});
export default router;