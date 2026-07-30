import { Request, Response } from "express";
import { ConvidadoService } from "../services/convidado.service.js";
import { tratarErro } from "../utils/tratarErro.js";

export class ConvidadoController {

  private service = new ConvidadoService();

  async confirmarPresenca(
    req: Request,
    res: Response
  ) {

    try {

      const id = Number(req.params.id);

      const { confirmado } = req.body;

      const convidado =
        await this.service.confirmarPresenca(
          id,
          confirmado
        );

      return res.json(convidado);

    } catch (error) {

      return tratarErro(res, error);

    }

  }

}