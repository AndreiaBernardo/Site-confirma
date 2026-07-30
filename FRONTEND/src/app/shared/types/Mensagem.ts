export interface Mensagem {
  id: number;
  nome: string;
  texto: string;
  createAt?: string;
  sucesso?: boolean;
  erro?: string;
}