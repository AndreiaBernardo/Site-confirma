import { Router } from "express";
import { DashboardController } from "../controllers/dashboard.controller.js";

const router = Router();

const controller = new DashboardController();

router.get(
  "/",
  controller.obterEstatisticas.bind(controller)
);

export default router;