import { API } from "../config/api";

export interface Admin {
  id: number;
  nome: string;
  email: string;
}

export async function cadastrarAdmin(
  nome: string,
  email: string,
  senha: string
) {

  const response = await fetch(
    `${API}/admins`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
      }),
    }
  );

  const dados = await response.json();

  if (!response.ok) {
    throw new Error(
      dados.erro ??
      "Erro ao cadastrar administrador."
    );
  }

  return dados;

}

export async function loginAdmin(
  email: string,
  senha: string
) {
  const response = await fetch(`${API}/admins/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      senha,
    }),
  });

  if (!response.ok) {
    throw new Error("E-mail ou senha inválidos.");
  }

  return response.json();
}

export function salvarAdmin(admin: Admin) {
  localStorage.setItem(
    "admin",
    JSON.stringify(admin)
  );
}

export function obterAdmin() {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    return null;
  }

  return JSON.parse(admin);
}

export function sairAdmin() {
  localStorage.removeItem("admin");
}

export async function redefinirSenhaAdmin(
  email: string,
  novaSenha: string
) {

  const response = await fetch(
    `${API}/admins/redefinir-senha`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        novaSenha,
      }),
    }
  );

  const dados = await response.json();

  if (!response.ok) {
    throw new Error(
      dados.erro || "Erro ao redefinir senha."
    );
  }

  return dados;

}