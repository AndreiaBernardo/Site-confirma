import { Router } from "express";
import multer from "multer";
import path from "path";

const router = Router();

const storage = multer.diskStorage({

  destination(req, file, callback) {

    callback(
      null,
      path.resolve("uploads/presentes")
    );

  },

  filename(req, file, callback) {

    const nome =
      Date.now() +
      "-" +
      file.originalname.replace(/\s+/g, "-");

    callback(null, nome);

  },

});

const upload = multer({ storage });

router.post(

  "/",

  upload.single("imagem"),

  (req, res) => {

    if (!req.file) {

      return res.status(400).json({
        erro: "Imagem não enviada.",
      });

    }

    return res.json({

      imagem:
        `http://localhost:3333/uploads/presentes/${req.file.filename}`,

    });

  }

);

export default router;