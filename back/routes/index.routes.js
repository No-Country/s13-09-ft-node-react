import { Router } from "express";
import authRoutes from "./auth.route.js";
import patientRoutes from "./patients.route.js"

const router = Router();

router.use("/", (req, res) => {
    res.send("hola");
});
router.use("/auth", authRoutes);
router.use("/patients", patientRoutes);

export default router;