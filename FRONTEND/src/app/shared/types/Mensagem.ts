export interface Mensagem {
  id: number;
  nome: string;
  texto: string;
  createdAt?: string;
  sucesso?: boolean;
  erro?: string;
}