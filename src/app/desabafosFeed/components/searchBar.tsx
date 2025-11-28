"use client"

import search from "@/src/utils/search";
import Image from "next/image";
import { useEffect } from "react";

export default function SearchBar() {
    useEffect(() => {
        search();
    }, [])

    return (
        <div className="flex gap-3 items-center justify-center w-full">
            <div className="searchBar lg:w-[51%] w-[78%] rounded-lg">
                <div className="bg-roxo border-lilas flex items-center gap-3 rounded-3xl border-2 px-3 py-3">
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Buscar desabafos"
                        className="bg-preto text-branco sm:border-lilas placeholder:text-branco/70 lg:text-md border-preto/60 focus:border-amarelo w-full rounded-2xl border-2 px-4 py-2 text-xs outline-none "
                        required
                    />

                    <Image
                        src="/search.png"
                        alt="Pesquisar"
                        width={10}
                        height={10}
                        className="pixel h-5 w-5 cursor-pointer lg:h-7 lg:w-7"
                    />
                </div>
            </div>

            <div className="filter hover:scale-105">
                <button id="filter-btn" className="bg-roxo border-lilas flex items-center gap-3 rounded-3xl border-2 px-4 py-3 hover:bg-lilas/70">
                <Image
                    src="/filter.png"
                    alt="Filter"
                    width={10}
                    height={10}
                    className="pixel h-5 w-5 cursor-pointer lg:h-7 lg:w-7"
                />
                </button>
            </div>
        </div>
    )
}