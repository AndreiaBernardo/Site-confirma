import { FotoRepository } from "../repositories/foto.repository.js";
import { prisma } from "../config/prisma.js";

export class FotoService {

  private repository = new FotoRepository();

  async listar() {
    return this.repository.listar();
  }

  async buscarPorId(id: number) {

    const foto = await this.repository.buscarPorId(id);

    if (!foto) {
      throw new Error("Foto não encontrada.");
    }

    return foto;
  }

  async criar(
  titulo: string,
  imagem: string
) {

  return this.repository.criar(
  titulo,
  imagem
);

}

  async excluir(id: number) {

    await this.buscarPorId(id);

    return this.repository.excluir(id);
  }

}