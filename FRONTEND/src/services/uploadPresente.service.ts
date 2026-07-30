import { API } from "../config/api";

export async function uploadImagemPresente(
  arquivo: File
): Promise<string> {

  const formData = new FormData();

  formData.append("imagem", arquivo);

  const response = await fetch(
    `${API}/upload/presentes`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao enviar imagem.");
  }

  const dados = await response.json();

  return dados.imagem;
}