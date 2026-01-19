"use client"

import { filter } from "@/src/utils/filter";
import { useEffect } from "react";

export default function FilterBar() {
    useEffect(() => {
            filter();
        }, [])
    
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
                    <li><label><input type="checkbox" name="emocao" value="Felicidade"/> Felicidade</label></li>
                    <li><label><input type="checkbox" name="emocao" value="Tristeza"/> Tristeza</label></li>
                    <li><label><input type="checkbox" name="emocao" value="Raiva"/> Raiva</label></li>
                    <li><label><input type="checkbox" name="emocao" value="Ansiedade"/> Ansiedade</label></li>
                    <li><label><input type="checkbox" name="emocao" value="Motivação"/> Motivação</label></li>
                    <li><label><input type="checkbox" name="emocao" value="Tranquilidade"/> Tranquilidade</label></li>
                    <li><label><input type="checkbox" name="emocao" value="Medo"/> Medo</label></li>
                </ul>
            </div>

            {/* Filtro de Datas */}
            <div className="data-filter pt-6 text-left">
                <h2 className="font-semibold mb-2 text-amarelo">Data</h2>

                <div className="flex flex-col gap-4 p-2">
                    <div className="flex flex-col">
                        <span className="text-lilas">Data inicial:</span>
                        <input id="date-start" type="date" className="p-2 rounded bg-branco text-preto"/>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-lilas">Data final:</span>
                        <input id="date-end" type="date" className="p-2 rounded bg-branco text-preto"/>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-6">
                <button
                    id="filter-submit"
                    className="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco border-2 py-2 px-8 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas font-semibold"
                >
                    Filtrar
                </button>
            </div>
        </div>
    )
}