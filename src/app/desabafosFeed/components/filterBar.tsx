"use client"

import { useEffect } from "react";
import { useDesabafos } from "@/src/contexts/desabafosContext";
import { filter } from "@/src/utils/filter";

export default function FilterBar() {
    const { filtros, setFiltros, setInput, setCurrentPage } = useDesabafos();

    useEffect(() => {
        filter();
    }, [])

    function toggleEmocao(valor: string, checked: boolean) {
        setFiltros((prev) => {
            if (checked) {
                return { ...prev, emocoes: [...prev.emocoes, valor] };
            } else {
                return { ...prev, emocoes: prev.emocoes.filter((e) => e !== valor) };
            }
        });
    }

    function limparFiltros() {
        setFiltros({
            emocoes: [],
            dataInicio: undefined,
            dataFim: undefined
        });
        setInput("");
        setCurrentPage(1);
    }

    return (
        <div
            id="filter"
            className="bg-roxo border-lilas border-4 rounded-l-lg text-center p-6 shadow-xl fixed bottom-0 right-0 h-full w-85 hidden translate-x-full transform transition-all duration-300 ease-in-out z-50"
        >
            <button
                id="filter-close-btn"
                className="absolute top-2 right-1 cursor-pointer text-vermelho text-4xl"
            >
                &times;
            </button>

            <h1 className="text-xl font-bold pb-4 text-amarelo">Seleção de Filtros</h1>

            {/* Filtro de Emoções */}
            <div className="emocoes-filter text-left">
                <h2 className="font-semibold mb-2 text-amarelo">Emoções</h2>

                <ul className="flex flex-col gap-2 p-2 pl-4">
                    <li><label><input type="checkbox" value="Felicidade"
                        checked={filtros.emocoes.includes("Felicidade")}
                        onChange={(e) => toggleEmocao("Felicidade", e.target.checked)}
                    /> Felicidade</label></li>

                    <li><label><input type="checkbox" value="Tristeza"
                        checked={filtros.emocoes.includes("Tristeza")}
                        onChange={(e) => toggleEmocao("Tristeza", e.target.checked)}
                    /> Tristeza</label></li>

                    <li><label><input type="checkbox" value="Raiva"
                        checked={filtros.emocoes.includes("Raiva")}
                        onChange={(e) => toggleEmocao("Raiva", e.target.checked)}
                    /> Raiva</label></li>

                    <li><label><input type="checkbox" value="Ansiedade"
                        checked={filtros.emocoes.includes("Ansiedade")}
                        onChange={(e) => toggleEmocao("Ansiedade", e.target.checked)}
                    /> Ansiedade</label></li>

                    <li><label><input type="checkbox" value="Motivação"
                        checked={filtros.emocoes.includes("Motivação")}
                        onChange={(e) => toggleEmocao("Motivação", e.target.checked)}
                    /> Motivação</label></li>

                    <li><label><input type="checkbox" value="Tranquilidade"
                        checked={filtros.emocoes.includes("Tranquilidade")}
                        onChange={(e) => toggleEmocao("Tranquilidade", e.target.checked)}
                    /> Tranquilidade</label></li>

                    <li><label><input type="checkbox" value="Medo"
                        checked={filtros.emocoes.includes("Medo")}
                        onChange={(e) => toggleEmocao("Medo", e.target.checked)}
                    /> Medo</label></li>
                </ul>
            </div>

            {/* Filtro de Datas */}
            <div className="data-filter pt-6 text-left">
                <h2 className="font-semibold mb-2 text-amarelo">Data</h2>

                <div className="flex flex-col gap-4 p-2">
                    <div className="flex flex-col">
                        <span className="text-lilas">Data inicial:</span>
                        <input
                            id="date-start"
                            type="date"
                            className="p-2 rounded bg-branco text-preto"
                            value={filtros.dataInicio || ""}
                            onChange={(e) =>
                                setFiltros((p) => ({ ...p, dataInicio: e.target.value }))
                            }
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-lilas">Data final:</span>
                        <input
                            id="date-end"
                            type="date"
                            className="p-2 rounded bg-branco text-preto"
                            value={filtros.dataFim || ""}
                            onChange={(e) =>
                                setFiltros((p) => ({ ...p, dataFim: e.target.value }))
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-6">
                <button
                    id="filter-submit"
                    onClick={limparFiltros}
                    className="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco border-2 py-2 px-8 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas font-semibold"
                >
                    Limpar Filtros
                </button>
            </div>
        </div>
    )
}