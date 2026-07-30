import { Router } from "express";
import { FotoController } from "../controllers/foto.controller.js";

import multer from "multer";
import path from "path";
import fs from "fs";

const router = Router();

const controller = new FotoController();



const pastaUploads =
path.resolve("uploads/fotos");

if (!fs.existsSync(pastaUploads)) {

    fs.mkdirSync(
        pastaUploads,
        { recursive: true }
    );

}

const storage = multer.diskStorage({

  destination(req, file, callback) {

    callback(
      null,
      pastaUploads
    );

  },

  filename(req, file, callback) {

    callback(
      null,
      Date.now() + "-" + file.originalname
    );

  },

});

const uploadFoto = multer({
  storage,
});

router.get("/", (req, res) => controller.listar(req, res));

router.get("/:id", (req, res) => controller.buscarPorId(req, res));

router.post(
  "/",
  uploadFoto.single("imagem"),
  controller.criar.bind(controller)
);

router.delete("/:id", (req, res) => controller.excluir(req, res));

export default router;