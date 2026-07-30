import { prisma } from "../config/prisma.js";

export class DashboardRepository {
  async obterEstatisticas() {
    const familias = await prisma.familia.count();

    const convidados = await prisma.convidado.count();

    const confirmados = await prisma.convidado.count({
      where: {
        confirmado: true,
      },
    });

    const presentesReservados = await prisma.presente.count({
      where: {
        reservado: true,
      },
    });

    const mensagens = await prisma.mensagem.count();

    const foto = await prisma.foto.count();

    return {
      familias,
      confirmados,
      convidados,
      foto,

      presentesReservados,
      mensagens,
    };
  }
}
