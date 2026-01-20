"use client"

import SearchBar from "./components/searchBar";
import MenuBar from "@/src/components/menuBar";
import FilterBar from "./components/filterBar";
import Header from "@/src/components/header";
import Form from "./components/form";
import DesabafoCard from "./components/desabafoCard";
import { useState } from "react";
import PopUp from "./components/popUp";
import { createDesabafo } from "@/src/services/storage";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { useDesabafos } from "@/src/contexts/desabafosContext";
import { desabafoInput, desabafoObject } from "@/src/types/desabafo";

export default function DesabafosFeed() {
    const { filtrados, currentPage, setCurrentPage, pages, recarregar } = useDesabafos();

    const start = (currentPage - 1) * 10;
    const end = start + 10;

    const [ viewForm, setViewForm ] = useState(false);
    const [ popUpData, setPopUpData ] = useState<desabafoObject | null>(null);

    function rangePages(current: number, steps = 1) { 
        const range: (number | string)[] = [];

        for (let i = 1; i <= pages; i++) {
            if(i === 1 || i === pages || (i >= current - steps && i <= current + steps)) {
                range.push(i);
            } else if(range[range.length - 1] !== '...') {
                range.push('...');
            }
        }

        return range;
    }

    function desabafo(registro: desabafoObject) {
        const dia = registro.created_at.slice(8, 10);
        const mes = registro.created_at.slice(5, 7);
        const ano = registro.created_at.slice(0, 4);

        return {
            ...registro,
            date: `${dia}/${mes}/${ano}`
        }
    }

    async function addDesabafo(e: React.FormEvent<HTMLFormElement>, desabafo: desabafoInput) {
        e.preventDefault();

        try {
            await createDesabafo(desabafo);
            
            setCurrentPage(1);
            setViewForm(false);
            await recarregar();
        } catch (err: unknown) {
            const message = (err instanceof Error) ? (err.message) : ("Erro ao adicionar desabafo.");

            alert(message);
        }
    }

    return (
        <>
            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            <div id="app">
                <Header />

                <hr className="border-branco/60" />

                <div className="search py-4">
                    <SearchBar />
                </div>

                {(viewForm) && (
                    <div className="form m-4 flex flex-col items-center justify-center py-4">
                        <Form handleSubmit={addDesabafo} onClose={() => setViewForm(false)} text="Adicionar" />
                    </div>
                )}

                <div className="">
                    <div className="cards flex flex-wrap items-center justify-center">
                        {filtrados.length > 0 ? (
                            filtrados.slice(start, end).map((registro) => (
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

                    {(pages > 0) && (
                        <div className="pagination flex flex-col justify-center items-center gap-5 p-10 text-sm lg:text-lg">
                            <div className="flex flex-wrap items-center">
                                {(currentPage !== 1) ? (
                                    <IoIosArrowBack 
                                        className="cursor-pointer"
                                        onClick={() => setCurrentPage(currentPage - 1)} 
                                    />
                                ) : (
                                    <IoIosArrowBack 
                                        className="text-gray-500" 
                                    />
                                )}

                                <div className="flex flex-wrap items-center justify-center gap-1.5 p-3">
                                    {rangePages(currentPage).map((n, i) => (
                                        n === '...' ? (
                                            <p key={i} className="px-3 py-1 text-branco/70">...</p>
                                        ) : (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentPage(n as number)}
                                                className={`
                                                    px-2 py-1 rounded-md border text-sm font-medium cursor-pointer
                                                    transition-all duration-200
                                                    ${
                                                        (n === currentPage)
                                                        ? ("bg-roxo text-branco border-roxo cursor-default")
                                                        : ("bg-transparent text-branco border-branco/40 hover:bg-branco/10")
                                                    }`
                                                }
                                            >
                                                {n}
                                            </button>
                                        )
                                    ))}
                                </div>

                                {(currentPage !== pages) ? (
                                    <IoIosArrowForward 
                                        className="cursor-pointer"
                                        onClick={() => setCurrentPage(currentPage + 1)} 
                                    />
                                ) : (
                                    <IoIosArrowForward 
                                        className="text-gray-500" 
                                    />
                                )}
                            </div>

                            <p>Página {currentPage} de {pages}</p>
                        </div>
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
                        title="Adicionar desabafo"
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