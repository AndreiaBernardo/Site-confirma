import { prisma } from "../config/prisma.js";

export class AdminRepository {

  async buscarPorEmail(email: string) {
    return prisma.admin.findUnique({
      where: {
        email,
      },
    });
  }

  async criar(
    nome: string,
    email: string,
    senha: string
  ) {
    return prisma.admin.create({
      data: {
        nome,
        email,
        senha,
      },
    });
  }

  async atualizarSenha(
  email: string,
  senha: string
) {
  return prisma.admin.update({
    where: {
      email,
    },
    data: {
      senha,
    },
  });
}

}