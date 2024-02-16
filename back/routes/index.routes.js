import { Router } from "express";
import authRoutes from "./auth.route";

const router = Router();

router.use("/", (req, res) => {
  res.send("hola");
});
router.use("/auth", authRoutes);

export default router;