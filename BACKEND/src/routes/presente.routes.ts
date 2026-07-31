import { Router } from "express";
import { PresenteController } from "../controllers/presente.controller.js";

import multer from "multer";

const router = Router();

const controller = new PresenteController();




const upload =  multer({
  storage : multer.memoryStorage()
})


router.get("/", (req, res) => controller.listar(req, res));

router.get("/:id", (req, res) => controller.buscarPorId(req, res));

router.post("/", upload.single("imagem"), controller.criar.bind(controller));

router.put(
  "/:id",
  upload.single("imagem"),
  controller.atualizar.bind(controller)
);

router.delete("/:id", (req, res) => controller.excluir(req, res));

router.patch("/:id/reservar", controller.reservar.bind(controller));

export default router;
