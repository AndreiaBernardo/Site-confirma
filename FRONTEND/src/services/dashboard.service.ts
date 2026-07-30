import { API } from "../config/api";

export interface Dashboard {
  foto: number;
  confirmados: number;
  convidados: number;
  presentesReservados: number;
  mensagens: number;
}

export async function buscarDashboard(): Promise<Dashboard> {

  const response = await fetch(`${API}/dashboard`);

  if (!response.ok) {
    throw new Error("Erro ao buscar dashboard.");
  }

  return response.json();

}

export function salvarAdmin(admin: any) {
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