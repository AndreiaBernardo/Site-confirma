import { Router } from "express";
import { AdminController } from "../controllers/admin.controller.js";

const router = Router();

const controller = new AdminController();

router.post("/", controller.criar.bind(controller));

router.post("/login", controller.login.bind(controller));

router.patch(
  "/redefinir-senha",(req, res) =>
  controller.redefinirSenha(req, res)
);

export default router;