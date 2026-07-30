import { ConvidadoRepository } from "../repositories/convidado.repository.js";

export class ConvidadoService {

  private repository = new ConvidadoRepository();

  async confirmarPresenca(
    id: number,
    confirmado: boolean
  ) {

    const convidado =
      await this.repository.buscarPorId(id);

    if (!convidado) {
      throw new Error("Convidado não encontrado.");
    }

    return this.repository.confirmarPresenca(
      id,
      confirmado
    );

  }

}