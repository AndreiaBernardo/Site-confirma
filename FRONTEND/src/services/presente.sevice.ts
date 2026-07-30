import type { Presente } from "../app/shared/types/Presente";
import { API } from "../config/api";



export async function listarPresentes(): Promise<Presente[]> {
  const response = await fetch(`${API}/presentes`);

  if (!response.ok) {
    throw new Error("Erro ao buscar os presentes.");
  }

  return response.json();
}

export async function atualizarPresente(
  presente: Presente
): Promise<Presente> {
  const response = await fetch(
    `${API}/presentes/${presente.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(presente),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao atualizar presente.");
  }

  return response.json();
}

export async function criarPresente(dados: {
  nome: string;
  tamanho?: string;
  linkLoja: string;
  arquivoImagem?: File | null;
}) {

  const formData = new FormData();

  formData.append("nome", dados.nome);

  formData.append(
    "tamanho",
    dados.tamanho ?? ""
  );

  formData.append(
    "linkLoja",
    dados.linkLoja
  );

  if (dados.arquivoImagem) {

    formData.append(
      "imagem",
      dados.arquivoImagem
    );

  }

  const response = await fetch(
    `${API}/presentes`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {

    throw new Error(
      "Erro ao cadastrar presente."
    );

  }

  return response.json();

}

export async function editarPresenteAPI(
  id: number,
  dados: {
    nome: string;
    tamanho?: string;
    linkLoja: string;
    reservado: boolean;
    reservador?: string | null;
    arquivoImagem?: File | null;
  }
) {

  const formData = new FormData();

  formData.append("nome", dados.nome);

  formData.append(
    "tamanho",
    dados.tamanho ?? ""
  );

  formData.append(
    "linkLoja",
    dados.linkLoja
  );

  formData.append(
    "reservado",
    String(dados.reservado)
  );

  formData.append(
    "reservador",
    dados.reservador ?? ""
  );

  if (dados.arquivoImagem) {

    formData.append(
      "imagem",
      dados.arquivoImagem
    );

  }

  const response = await fetch(
    `${API}/presentes/${id}`,
    {
      method: "PUT",
      body: formData,
    }
  );

  if (!response.ok) {

    throw new Error(
      "Erro ao editar presente."
    );

  }

  return response.json();

}

export async function excluirPresenteAPI(id: number) {
  const response = await fetch(`${API}/presentes/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir presente.");
  }
}

