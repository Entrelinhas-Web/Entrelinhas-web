import { Emocao } from "./emocoes";

export interface desabafoObject {
    id: number;
    titulo: string;
    emocao: Emocao;
    nivel: number;
    descricao: string;
    created_at: string;
    date?: string;
    qtdDesabafos?: number;
}

export interface emocaoParametro {
    bg: string;
    border: string;
    text: string;
}

export interface desabafoInput {
  titulo: string;
  emocao: Emocao;
  nivel: number;
  descricao: string;
}