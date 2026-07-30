import { API } from "../config/api";

export async function confirmarPresenca(
  id: number,
  confirmado: boolean
) {
  const response = await fetch(
    `${API}/convidados/${id}/confirmar`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        confirmado,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao confirmar presença.");
  }

  return response.json();
}