export interface Presente {
  id: number;
  nome: string;

  tamanho?: string;
  imagem: string;
  linkLoja: string;
  reservado: boolean;
  reservador: string | null;
  createAt?: string
}