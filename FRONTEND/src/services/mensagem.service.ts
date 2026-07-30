import type { Mensagem } from "../app/shared/types/Mensagem";
import { API } from "../config/api";

export async function listarMensagens(): Promise<Mensagem[]> {
  const response = await fetch(`${API}/mensagens`);

  if (!response.ok) {
    throw new Error("Erro ao buscar mensagens.");
  }

  return response.json();
}

export async function criarMensagem(mensagem: {
  nome: string;
  texto: string;
}) {
  const response = await fetch(`${API}/mensagens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mensagem),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar mensagem.");
  }

  return response.json();
}

export async function excluirMensagem(id: number) {
  const response = await fetch(`${API}/mensagens/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir mensagem.");
  }
}