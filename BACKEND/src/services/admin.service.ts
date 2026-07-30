import bcrypt from "bcrypt";
import { AdminRepository } from "../repositories/admin.repository.js";

export class AdminService {

  private repository = new AdminRepository();

  async criar(
    nome: string,
    email: string,
    senha: string
  ) {

    const existe =
      await this.repository.buscarPorEmail(email);

    if (existe) {
      throw new Error("Administrador já cadastrado.");
    }

    const senhaCriptografada =
      await bcrypt.hash(senha, 10);

    return this.repository.criar(
      nome,
      email,
      senhaCriptografada
    );

  }

  async login(
  email: string,
  senha: string
) {

  const admin =
    await this.repository.buscarPorEmail(email);

  if (!admin) {
    throw new Error("E-mail ou senha inválidos.");
  }

  const senhaCorreta =
    await bcrypt.compare(
      senha,
      admin.senha
    );

  if (!senhaCorreta) {
    throw new Error("E-mail ou senha inválidos.");
  }

  return {
    id: admin.id,
    nome: admin.nome,
    email: admin.email,
  };

}

async redefinirSenha(
  email: string,
  novaSenha: string
) {

  const admin =
    await this.repository.buscarPorEmail(email);

  if (!admin) {
    throw new Error("Administrador não encontrado.");
  }

  const senhaCriptografada =
    await bcrypt.hash(novaSenha, 10);

  await this.repository.atualizarSenha(
    email,
    senhaCriptografada
  );

  return {
    mensagem: "Senha alterada com sucesso."
  };

}

}