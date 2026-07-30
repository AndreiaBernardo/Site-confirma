import { FamiliaRepository } from "../repositories/familia.repository.js";

export class FamiliaService {
  private repository = new FamiliaRepository();

  async login(nome: string, senha: string) {

  if (!nome.trim()) {
    throw new Error("Informe o nome da família.");
  }

  if (!senha.trim()) {
    throw new Error("Informe a senha.");
  }

  const familia = await this.repository.login(nome, senha);

  if (!familia) {
    throw new Error("Nome ou senha inválidos.");
  }

  return familia;
}

  async listar() {
    return this.repository.listar();
  }

  async buscarPorId(id: number) {
    const familia = await this.repository.buscarPorId(id);
    if (!familia) {
      throw new Error("Família não encontrada");
    }
    return familia;
  }

  async criar(nome: string, senha: string, convidados: string[]) {

    if (!nome.trim()) {
      throw new Error("Nome obrigatório.");
    }

    if (!senha.trim()) {
      throw new Error("Senha obrigatória");
    }

    const convidadosValidos =
    convidados.filter((nome) => nome.trim() !== "");

    if(convidadosValidos.length === 0){
      throw new Error("Informe pelo menos um convidado.");
    }

    return this.repository.criar(nome, senha, convidadosValidos);
  }

  async atualizar(id: number, nome: string, senha: string, convidados: string[]) {
    
    await this.buscarPorId(id);

   if(!nome.trim()) {
      throw new Error("Nome obrigatório.");
    }
    if(!senha.trim()) {
      throw new Error("Senha obrigatória.");
    }
  

  const convidadosValidos = convidados.filter((nome) => nome.trim() !== "");

  if(convidadosValidos.length === 0) {
    throw new Error("Informe pelo menos um convidado.");
  }

  return this.repository.atualizar(id, nome, senha, convidadosValidos);
  }

  async salvarConfirmacao(
  familiaId: number,
  convidados: {
    id: number;
    confirmado: boolean;
  }[]
) {

  await this.buscarPorId(familiaId);

  return this.repository.salvarConfirmacao(
    familiaId,
    convidados
  );

}



  async excluir(id: number) {
    
    await this.buscarPorId(id);
    
    return this.repository.excluir(id);
  }
}
