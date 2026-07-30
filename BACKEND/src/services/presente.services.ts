import { PresenteRepository } from "../repositories/presente.repository.js";

export class PresenteService {

  private repository = new PresenteRepository();

  async listar() {
    return this.repository.listar();
  }

  async buscarPorId(id: number) {

    const presente = await this.repository.buscarPorId(id);

    if (!presente) {
      throw new Error("Presente não encontrado.");
    }

    return presente;
  }

  async criar(
    nome: string,
    tamanho: string,
    imagem: string,
    linkLoja: string
  ) {

    if (!nome.trim()) {
      throw new Error("Nome obrigatório.");
    }

  

    return this.repository.criar(
      nome,
      tamanho,
      imagem,
      linkLoja
    );
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

    await this.buscarPorId(id);

    if (!nome.trim()) {
      throw new Error("Nome obrigatório.");
    }

    

    return this.repository.atualizar(
      id,
      nome,
      tamanho,
      imagem,
      linkLoja,
      reservado,
      reservador
    );
  }

  async reservarPresente(
  id: number,
  reservador: string
) {

  const presente =
    await this.buscarPorId(id);

  if (presente.reservado) {
    throw new Error("Presente já reservado.");
  }

  return this.repository.reservarPresente(
    id,
    reservador
  );

}

  async excluir(id: number) {

    await this.buscarPorId(id);

    return this.repository.excluir(id);
  }

}