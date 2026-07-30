import { Router } from "express";
import { MensagemController } from "../controllers/mensagem.controller.js";

const router = Router();

const controller = new MensagemController();

router.get("/", (req, res) => controller.listar(req, res));

router.get("/:id", (req, res) => controller.buscarPorId(req, res));

router.post("/", (req, res) => controller.criar(req, res));

router.delete("/:id", (req, res) => controller.excluir(req, res));

export default router;
