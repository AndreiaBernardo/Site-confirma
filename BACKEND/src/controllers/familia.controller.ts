import { Request, Response } from "express";
import { FamiliaService } from "../services/familia.service.js";
import { tratarErro } from "../utils/tratarErro.js";

export class FamiliaController {
  private service = new FamiliaService();


  async login(req: Request, res: Response) {
  try {

    const { nome, senha } = req.body;

    const familia = await this.service.login(
      nome,
      senha
    );

    return res.json(familia);

  } catch (error) {

    return tratarErro(res, error, 401);

  }
}

  async listar(req: Request, res: Response) {
    try {
      const familias = await this.service.listar();

      return res.json(familias);
    } catch (error) {
      return tratarErro(res, error, 500)
      };
    }
  
  async buscarPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const familia = await this.service.buscarPorId(id);

      return res.json(familia);
    } catch (error) {
      return tratarErro(res, error, 404)
      };
    }
  

  async criar(req: Request, res: Response) {
    try {
      const { nome, senha, convidados } = req.body;

      const familia = await this.service.criar(nome, senha, convidados);

      return res.status(201).json(familia);
    } catch (error) {
      return tratarErro(res, error)
      };
    }
  

  async atualizar(req: Request, res: Response) {

  console.log("Entrou no atualizar");

  console.log(req.body);

  try {

    const id = Number(req.params.id);

    const {
      nome,
      senha,
      convidados,
    } = req.body;

    const familia = await this.service.atualizar(
      id,
      nome,
      senha,
      convidados
    );

    return res.json(familia);

  } catch (error) {

  console.error("ERRO AO ATUALIZAR FAMÍLIA:");

  console.error(error);

  return tratarErro(res, error);

}}

    async salvarConfirmacao(req: Request, res: Response) {
  try {

    const { familiaId, convidados } = req.body;

    const familia = await this.service.salvarConfirmacao(
      familiaId,
      convidados
    );

    return res.json(familia);

  } catch (error) {

    return tratarErro(res, error);

  }
}



  async excluir(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      await this.service.excluir(id);

      return res.status(204).send();
    } catch (error) {
      return tratarErro(res, error)
      };
    }
  }
