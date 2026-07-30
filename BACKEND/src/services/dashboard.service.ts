import { DashboardRepository } from "../repositories/dashboard.repository.js";

export class DashboardService {

  private repository = new DashboardRepository();

  async obterEstatisticas() {

    return this.repository.obterEstatisticas();

  }

}