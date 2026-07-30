import { prisma } from "../config/prisma.js";

export class MensagemRepository {


   async listar() {
    return prisma.mensagem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async buscarPorId(id: number) {
    return prisma.mensagem.findUnique({
      where: {
        id,
      },
    });
  }

    async criar(
    nome: string,
    texto: string
  ) {
    return prisma.mensagem.create({
      data: {
        nome,
        texto,
      },
    });
  }

  async excluir(id: number) {
    return prisma.mensagem.delete({
      where: {
        id,
      },
    });
  }

}