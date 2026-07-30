import { Request, Response } from "express";
import { MensagemService } from "../services/mensagem.services.js";
import { tratarErro } from "../utils/tratarErro.js";

export class MensagemController {

  private service = new MensagemService();

   async listar(req: Request, res: Response) {
    try {

      const mensagens = await this.service.listar();

      return res.json(mensagens);

    } catch (error) {

      return tratarErro(res, error);

    }
  }


  async buscarPorId(req: Request, res: Response) {
    try {

      const { id } = req.params;

      const mensagem = await this.service.buscarPorId(Number(id));

      return res.json(mensagem);

    } catch (error: any) {

      return tratarErro(res, error, 404)
      };

    }
  

     async criar(req: Request, res: Response) {
    try {

      const { nome, texto } = req.body;

      const mensagem = await this.service.criar(
        nome,
        texto
      );

      return res.status(201).json(mensagem);

    } catch (error) {

      return tratarErro(res, error);

    }
  }
  
  async excluir(req: Request, res: Response) {
    try {

      const { id } = req.params;

      await this.service.excluir(Number(id));

      return res.status(204).send();

    } catch (error: any) {

      return tratarErro(res, error)
      };

    }
  

}