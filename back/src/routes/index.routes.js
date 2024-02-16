import { Router } from "express";
import authRoutes from "./auth.route.js";

const router = Router();

router.use("/auth", authRoutes);
// router.use("/", (req, res) => {
//   res.send("hola");
// });

export default router;
