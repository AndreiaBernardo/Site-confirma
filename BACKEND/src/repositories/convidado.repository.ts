import { prisma } from "../config/prisma.js";

export class ConvidadoRepository {

  async buscarPorId(id: number) {

    return prisma.convidado.findUnique({
      where: {
        id,
      },
    });

  }

  async confirmarPresenca(
    id: number,
    confirmado: boolean
  ) {

    return prisma.convidado.update({

      where: {
        id,
      },

      data: {
        confirmado,
        respondidoEm: new Date(),
      },

    });

  }

}