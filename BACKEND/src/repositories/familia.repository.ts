import { prisma } from "../config/prisma.js";


export class FamiliaRepository {

  async login(nome: string, senha: string) {
  return prisma.familia.findFirst({
    where: {
      nome,
      senha,
    },
    include: {
      convidados: true,
    },
  });
}

  async listar() {

    return prisma.familia.findMany({
      include: {
        convidados: true,
      },
      orderBy:{
        nome:"asc",
      }
    });

  }

  async buscarPorId(id: number) {

    return prisma.familia.findUnique({

        where: {
            id,
        },

        include: {
            convidados: true,
        },

    });

}

async criar(nome: string, senha: string, convidados: string[]) {

    return prisma.familia.create({

        data: {

            nome,

            senha,

            convidados: {
                create: convidados.map((nome) => ({ nome })),
            },

        },
        include:{
            convidados: true,
        }

    });

}

 async atualizar(id: number, nome: string, senha: string, convidados: string[]) {
    return prisma.familia.update({
      where: {
        id,
      },
      data: {
        
        nome,
        senha,
        
        convidados: {
          deleteMany: {},
          create: convidados.map((nome) => ({ nome })),
        }
      },
      include: {
        convidados: true,
      },
    });
  }

  async salvarConfirmacao(
  familiaId: number,
  convidados: {
    id: number;
    confirmado: boolean;
  }[]
) {

  await prisma.$transaction(

    convidados.map((convidado) =>

      prisma.convidado.update({

        where: {
          id: convidado.id,
        },

        data: {
          confirmado: convidado.confirmado,
          respondidoEm: new Date(),
        },

      })

    )

  );

  return this.buscarPorId(familiaId);

}



async excluir(id: number) {
    return prisma.familia.delete({
      where: {
        id,
      },
    });
  }

}