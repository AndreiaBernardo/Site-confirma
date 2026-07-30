import { Router } from "express";
import { PresenteController } from "../controllers/presente.controller.js";
import multer from "multer";
import path from "path";

const router = Router();

const controller = new PresenteController();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve("uploads/presentes"));
  },

  filename(req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

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
