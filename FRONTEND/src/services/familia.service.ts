import type { Familia } from "../app/shared/types/Familia";
import { API } from "../config/api";



export async function listarFamilias(): Promise<Familia[]> {
  const response = await fetch(`${API}/familias`);

  if (!response.ok) {
    throw new Error("Erro ao buscar famílias.");
  }

  return response.json();
}

export async function criarFamilia(familia: {
  nome: string;
  senha: string;
  convidados: string[];
}) {
  const response = await fetch("http://localhost:3333/familias", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(familia),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar família.");
  }

  return response.json();
}

export async function editarFamilia(
  id: number,
  familia: {
    nome: string;
    senha: string;
    convidados: string[];
  }
) {
  const response = await fetch(
    (`${API}/familias/${id}`),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(familia),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao editar família.");
  }

  return response.json();
}

export async function salvarConfirmacao(
  familiaId: number,
  convidados: {
    id: number;
    confirmado: boolean;
  }[]
) {

  const response = await fetch(`${API}/familias/confirmacao`, {

    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      familiaId,
      convidados,
    }),

  });

  if (!response.ok) {
    throw new Error("Erro ao salvar confirmação.");
  }

  return response.json();

}

export async function atualizarFamilia(
  id: number,
  familia: {
    nome: string;
    senha: string;
    convidados: string[];
  }
) {
  const response = await fetch(`${API}/familias/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(familia),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar família.");
  }

  return response.json();
}

export async function excluirFamilia(id: number) {
  const response = await fetch(`${API}/familias/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir família.");
  }
}



export async function loginFamilia(
  nome: string,
  senha: string
) {
  const response = await fetch(
    `${API}/familias/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        senha,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Nome ou senha inválidos.");
  }

  return response.json();
}

export async function buscarFamilia(id: number): Promise<Familia> {

  const response = await fetch(`${API}/familias/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar família.");
  }

  return response.json();

}