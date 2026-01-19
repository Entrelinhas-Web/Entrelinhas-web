"use client"

import SearchBar from "./components/searchBar";
import MenuBar from "@/src/components/menuBar";
import FilterBar from "./components/filterBar";
import Header from "@/src/components/header";
import Form from "./components/form";
import DesabafoCard from "./components/desabafoCard";
import { useEffect, useState } from "react";
import PopUp from "./components/popUp";
import { createDesabafo, getDesabafos } from "@/src/services/storage";
import Image from "next/image";

export interface desabafoObject {
    id: number;
    titulo: string;
    emocao: keyof typeof emocoes;
    nivel: string | number;
    descricao: string;
    created_at: string;
    date?: string;
}

export const emocoes = {
  Felicidade: { bg: "bg-amarelo", border: "border-amarelo", text: "text-amarelo" },
  Tristeza: { bg: "bg-azul", border: "border-azul", text: "text-azul" },
  Raiva: { bg: "bg-vermelho", border: "border-vermelho", text: "text-vermelho" },
  Ansiedade: { bg: "bg-laranja", border: "border-laranja", text: "text-laranja" },
  Motivação: { bg: "bg-rosa", border: "border-rosa", text: "text-rosa" },
  Tranquilidade: { bg: "bg-verde", border: "border-verde", text: "text-verde" },
  Medo: { bg: "bg-lilas", border: "border-lilas", text: "text-lilas" },
};

export default function DesabafosFeed() {
    const [registros, setRegistros] = useState<desabafoObject[]>([]);
    const [ viewForm, setViewForm ] = useState(false);
    const [popUpData, setPopUpData] = useState<desabafoObject | null>(null);

    useEffect(() => {
        async function loadDesabafos() {
            const data = await getDesabafos();
            setRegistros(data);
        }

        loadDesabafos();
    }, []);

    function desabafo(registro: desabafoObject) {
        const dia = registro.created_at.slice(8, 10);
        const mes = registro.created_at.slice(5, 7);
        const ano = registro.created_at.slice(0, 4);

        const objeto = {
            ...registro,
            date: `${dia}/${mes}/${ano}`
        }

        return objeto
    }

    async function addDesabafo(e: React.FormEvent<HTMLFormElement>, desabafo: desabafoObject) {
        e.preventDefault();

        try {
            await createDesabafo(desabafo);

            location.reload()
        } catch (err: any) {
            alert(err.message ?? "Erro ao adicionar desabafo.");
        }
    }

    return (
        <>
            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            <div id="app">
                <Header />

                <hr className="border-branco/60" />

                <div className={`search py-4 ${registros.length === 0 ? "hidden" : ""}`}>
                    <SearchBar />
                </div>

                {(viewForm) && (
                    <div className="form m-4 flex flex-col items-center justify-center py-4">
                        <Form handleSubmit={addDesabafo} onClose={() => setViewForm(false)} text="Adicionar" />
                    </div>
                )}

                <div className="content flex flex-wrap items-center justify-center">
                    {registros.length > 0 ? (
                        registros.map((registro) => (
                            <DesabafoCard 
                                key={registro.id}
                                objeto={desabafo(registro)}
                                onClick={() => setPopUpData(desabafo(registro))} 
                            />
                        ))
                    ) : (
                        <p className="text-branco text-2xl p-10 text-center">
                            Faça seu desabafo!
                        </p>
                    )}
                </div>

                {popUpData && (
                    <PopUp 
                        objeto={popUpData}
                        onClose={() => setPopUpData(null)}
                    />
                )}

                <div className="fixed z-50 right-4 bottom-4">
                    <button 
                        title="Editar"
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                        onClick={() => setViewForm(true)}
                    >
                        <Image
                            src="/plus.png"
                            alt="Adicionar desabafo"
                            width={30}
                            height={30}
                            className="pixel w-15 h-15 object-contain p-3 border border-lilas bg-roxo rounded-full"
                        />
                    </button>
                </div>

                <MenuBar />
                <FilterBar />
            </div>
        </>
    );
}