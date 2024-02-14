import { Router } from "express";

const router = Router();

router.use("/", (req, res) => {
  res.send("hola");
});

export default router;
