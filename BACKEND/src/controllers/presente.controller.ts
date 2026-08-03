import { Request, Response } from "express";
import { PresenteService } from "../services/presente.services.js";
import { tratarErro } from "../utils/tratarErro.js";

import { uploadImagemBuffer } from "../utils/uploadCloudinary.js";
console.log("PRESENTE CONTROLLER CARREGADO");
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

    imagem = await uploadImagemBuffer(
        req.file.buffer,
        "presentes"
    );

}
     
console.log("Imagem recebida da Cloudinary:", imagem);

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
  
    

  async atualizar(req: Request, res: Response) 
  
  
  {

     console.log("CHEGOU NO UPDATE");
  console.log(req.body);
  console.log(req.file);
    try {

      const { id } = req.params;
      console.log("===== UPDATE PRESENTE =====");
console.log("BODY:", req.body);
console.log("FILE:", req.file);


      const {
        nome,
        tamanho,
        linkLoja,
        reservador
      } = req.body;

      const reservado =
  req.body.reservado === "true";
  
    const presenteAtual =
  await this.service.buscarPorId(Number(id));
console.log("PRESENTE ATUAL:", presenteAtual);
let imagem = presenteAtual.imagem;

if (req.file) {
  imagem = await uploadImagemBuffer(
    req.file.buffer,
    "presentes"
  );
}
      
console.log("Imagem antes de atualizar:", imagem);

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