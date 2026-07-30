import { Request, Response } from "express";
import { DashboardService } from "../services/dashboard.service.js";
import { tratarErro } from "../utils/tratarErro.js";

export class DashboardController {

  private service = new DashboardService();

  async obterEstatisticas(req: Request, res: Response) {

    try {

      const dados =
        await this.service.obterEstatisticas();

      return res.json(dados);

    } catch (error) {

      return tratarErro(res, error);

    }

  }

}