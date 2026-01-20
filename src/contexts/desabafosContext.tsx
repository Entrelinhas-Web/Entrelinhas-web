"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode
} from "react";

import { getDesabafos } from "@/src/services/storage";
import { desabafoObject } from "@/src/types/desabafo";

interface Filtros {
  emocoes: string[];
  dataInicio?: string;
  dataFim?: string;
}

interface DesabafosContextData {
  registros: desabafoObject[];
  filtrados: desabafoObject[];
  input: string;
  setInput: (v: string) => void;
  filtros: Filtros;
  setFiltros: React.Dispatch<React.SetStateAction<Filtros>>;
  currentPage: number;
  setCurrentPage: (n: number) => void;
  pages: number;
  recarregar: () => Promise<void>;
}

const DesabafosContext = createContext<DesabafosContextData | null>(null);

export function DesabafosProvider({ children }: { children: ReactNode }) {
  const [registros, setRegistros] = useState<desabafoObject[]>([]);
  const [input, setInput] = useState("");
  const [filtros, setFiltros] = useState<Filtros>({ emocoes: [] });

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  async function carregar(page = currentPage) {
    const res = await getDesabafos(page);
    setRegistros(res.data || []);
    setPages(Math.ceil((res.qtdDesabafos || 0) / 10));
  }

  useEffect(() => {
    carregar(currentPage);
  }, [currentPage]);

  const filtrados = useMemo(() => {
    const q = input.trim().toLowerCase();

    return registros.filter((d) => {
      const titulo = (d.titulo || "").toString().toLowerCase();
      const descricao = (d.descricao || "").toString().toLowerCase();

      const matchBusca = q === "" || titulo.includes(q) || descricao.includes(q);

      const matchEmocao =
        filtros.emocoes && filtros.emocoes.length > 0
          ? filtros.emocoes.includes(d.emocao)
          : true;

      const data = (d.created_at || "").slice(0, 10);

      const matchDataInicio = filtros.dataInicio
        ? data >= filtros.dataInicio
        : true;

      const matchDataFim = filtros.dataFim
        ? data <= filtros.dataFim
        : true;

      return matchBusca && matchEmocao && matchDataInicio && matchDataFim;
    });
  }, [registros, input, filtros]);

  return (
    <DesabafosContext.Provider
      value={{
        registros,
        filtrados,
        input,
        setInput,
        filtros,
        setFiltros,
        currentPage,
        setCurrentPage,
        pages,
        recarregar: async () => await carregar(currentPage)
      }}
    >
      {children}
    </DesabafosContext.Provider>
  );
}

export function useDesabafos() {
  const context = useContext(DesabafosContext);
  if (!context) {
    throw new Error("useDesabafos deve ser usado dentro de DesabafosProvider");
  }
  return context;
}