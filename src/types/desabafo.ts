import { emocoes } from "./emocoes";

export interface desabafoObject {
    id: number;
    titulo: string;
    emocao: keyof typeof emocoes;
    nivel: string | number;
    descricao: string;
    created_at: string;
    date?: string;
    qtdDesabafos?: number;
}