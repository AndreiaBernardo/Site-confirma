import { Request, Response } from "express";
import { AdminService } from "../services/admin.service.js";
import { tratarErro } from "../utils/tratarErro.js";

export class AdminController {

  private service = new AdminService();

  async criar(req: Request, res: Response) {

    try {

      const {
        nome,
        email,
        senha
      } = req.body;

      const admin =
        await this.service.criar(
          nome,
          email,
          senha
        );

      return res.status(201).json(admin);

    } catch (error) {

      return tratarErro(res, error);

    }

  }

  async login(req: Request, res: Response) {

  try {

    const {
      email,
      senha
    } = req.body;

    const admin =
      await this.service.login(
        email,
        senha
      );

    return res.json(admin);

  } catch (error) {

    return tratarErro(res, error, 401);

  }

}

async redefinirSenha(
  req: Request,
  res: Response
) {

  try {

    const {
      email,
      novaSenha
    } = req.body;

    const resultado =
      await this.service.redefinirSenha(
        email,
        novaSenha
      );

    return res.json(resultado);

  } catch (error) {

    return tratarErro(res, error);

  }

}
}