import { Request, Response } from "express";
import { PresenteService } from "../services/presente.services.js";
import { tratarErro } from "../utils/tratarErro.js";
import fs from "fs";
import { uploadImagem } from "../utils/uploadCloudinary.js";

export class PresenteController {

  private service = new PresenteService();

  async listar(req: Request, res: Response) {
    try {

      const presentes = await this.service.listar();

      return res.json(presentes);

    } catch (error) {

      return tratarErro(res, error)
      };

    }
  

  async buscarPorId(req: Request, res: Response) {
    try {

      const { id } = req.params;

      const presente = await this.service.buscarPorId(Number(id));

      return res.json(presente);

    } catch (error: any) {

      return tratarErro(res, error, 404)
      };

    }
  

  async criar(req: Request, res: Response) {
    try {

      const {
        nome,
        tamanho,
        
        linkLoja
      } = req.body;

     



      let imagem = "";

if (req.file) {

  imagem = await uploadImagem(
    req.file.path,
    "presentes"
  );

  fs.unlinkSync(req.file.path);

}

     


      const presente = await this.service.criar(
        nome,
        tamanho,
        imagem,
        linkLoja
      );

      return res.status(201).json(presente);

    } catch (error: any) {

      return tratarErro(res, error)
      };

    }
  

  async atualizar(req: Request, res: Response) {
    try {

      const { id } = req.params;

      

      const {
        nome,
        tamanho,
      
        linkLoja,
        reservado,
        reservador
      } = req.body;

     let imagem = req.body.imagem;

if (req.file) {


  imagem = await uploadImagem(
    req.file.path,
    "presentes"
    
  );

  console.log("URL:", imagem);
  fs.unlinkSync(req.file.path);

}
      


      const presente = await this.service.atualizar(
        Number(id),
        nome,
        tamanho,
        imagem,
        linkLoja,
        reservado,
        reservador
      );

      return res.json(presente);

    } catch (error: any) {

      return tratarErro(res, error)
      };

    }
  
    async reservar(req: Request, res: Response) {

  try {

    const id = Number(req.params.id);

    const { reservador } = req.body;

    const presente =
      await this.service.reservarPresente(
        id,
        reservador
      );

    return res.json(presente);

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

      return tratarErro(res,error)
      };

    }
  

}