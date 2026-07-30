import { Request, Response } from "express";
import { FotoService } from "../services/foto.service.js";
import { tratarErro } from "../utils/tratarErro.js";
import fs from "fs";
import { uploadImagem } from "../utils/uploadCloudinary.js";

export class FotoController {

  private service = new FotoService();

  async listar(req: Request, res: Response) {
    try {

      const fotos = await this.service.listar();

      return res.json(fotos);

    } catch (error) {

      return tratarErro(res, error);

    }
  }

  async buscarPorId(req: Request, res: Response) {
    try {

      const { id } = req.params;

      const foto = await this.service.buscarPorId(Number(id));

      return res.json(foto);

    } catch (error) {

      return tratarErro(res, error, 404);

    }
  }

 async criar(req: Request, res: Response) {

  try {

    const { titulo } = req.body;

    let imagem = "";

    if (req.file) {

      console.log("Arquivo recebido:", req.file.path);

      imagem = await uploadImagem(
        req.file.path,
        "fotos"
      );

      fs.unlinkSync(req.file.path);

    }

    const foto = await this.service.criar(
      titulo,
      imagem
    );

    return res.status(201).json(foto);

  } catch (error) {

    return tratarErro(res, error);

  }

}
  async excluir(req: Request, res: Response) {
    try {

      const { id } = req.params;

      await this.service.excluir(Number(id));

      return res.status(204).send();

    } catch (error) {

      return tratarErro(res, error);

    }
  }

}