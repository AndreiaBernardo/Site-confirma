import type { Foto } from "../app/shared/types/Foto";
import { API } from "../config/api";


export async function listarFotos(): Promise<Foto[]> {
  const response = await fetch(`${API}/fotos`);

  if (!response.ok) {
    throw new Error("Erro ao buscar fotos.");
  }

  return response.json();
}

export async function criarFoto(dados: {
  titulo: string;
  arquivoImagem?: File |null;
}) {

  const formData = new FormData();

  formData.append("titulo", dados.titulo);

  if (dados.arquivoImagem) {

    formData.append(
      "imagem",
      dados.arquivoImagem
    );

  }

  const response = await fetch(
    `${API}/fotos`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {

  

  throw new Error("Erro ao cadastrar foto.");

}

  return response.json();

}

export async function excluirFoto(id: number) {
  const response = await fetch(`${API}/fotos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir foto.");
  }
}