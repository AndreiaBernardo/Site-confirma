import { MensagemRepository } from "../repositories/mensagem.repository.js";

export class MensagemService {

  private repository = new MensagemRepository();

  async listar() {
    return this.repository.listar();
  }

  async buscarPorId(id: number) {

    const presente = await this.repository.buscarPorId(id);

    if (!presente) {
      throw new Error("Mensagem não encontrada.");
    }

    return presente;
  }

   async criar(
    nome: string,
    texto: string
  ) {

    if (!nome.trim()) {
      throw new Error("Nome obrigatório.");
    }

    if (!texto.trim()) {
      throw new Error("Mensagem obrigatória.");
    }

    return this.repository.criar(
      nome,
      texto
    );
  }

  
  async excluir(id: number) {

    await this.buscarPorId(id);

    return this.repository.excluir(id);
  }

}