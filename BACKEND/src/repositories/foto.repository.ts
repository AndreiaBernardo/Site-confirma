import { prisma } from "../config/prisma.js";

export class FotoRepository {

  async listar() {
    return prisma.foto.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async buscarPorId(id: number) {
    return prisma.foto.findUnique({
      where: {
        id,
      },
    });
  }

  async criar(
    titulo: string,
    imagem: string
  ) {
    return prisma.foto.create({
      data: {
        titulo,
        imagem,
      },
    });
  }

  async excluir(id: number) {
    return prisma.foto.delete({
      where: {
        id,
      },
    });
  }

}