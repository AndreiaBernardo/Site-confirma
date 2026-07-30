import type { Convidado } from "./Convidado";

export interface Familia {

  id: number;

  nome: string;

  senha: string;

  convidados: Convidado[];

}