import { Router } from "express";
import { ConvidadoController } from "../controllers/convidado.controller.js";

const router = Router();

const controller = new ConvidadoController();

router.patch(
  "/:id/confirmar",
  (req, res) => controller.confirmarPresenca(req, res)
);

export default router;