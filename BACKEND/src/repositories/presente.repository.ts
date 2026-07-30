import { prisma } from "../config/prisma.js";

export class PresenteRepository {

  async listar() {
    return prisma.presente.findMany({
      orderBy: {
        nome: "asc",
      },
    });
  }

  async buscarPorId(id: number) {
    return prisma.presente.findUnique({
      where: {
        id,
      },
    });
  }

  async criar(
    nome: string,
    tamanho: string,
    imagem: string,
    linkLoja: string
  ) {
    return prisma.presente.create({
      data: {
        nome,
        tamanho,
        imagem,
        linkLoja,
      },
    });
  }

  async atualizar(
    id: number,
    nome: string,
    tamanho: string,
    imagem: string,
    linkLoja: string,
    reservado: boolean,
    reservador: string | null
  ) {
    return prisma.presente.update({
      where: {
        id,
      },

      data: {
        nome,
        tamanho,
        imagem,
        linkLoja,
        reservado,
        reservador,
      },
    });
  }

  async reservarPresente(
  id: number,
  reservador: string
) {

  return prisma.presente.update({

    where: {
      id,
    },

    data: {

      reservado: true,

      reservador,

    },

  });

}

  async excluir(id: number) {
    return prisma.presente.delete({
      where: {
        id,
      },
    });
  }

}