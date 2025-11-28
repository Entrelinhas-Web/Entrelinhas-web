"use client"

import { useEffect } from "react"
import { menu } from "@/src/utils/menu"

export default function MenuBar() {
    useEffect(() => {
        menu();
    }, [])

    return (
        <div 
            id="sidebar" 
            className="bg-preto text-branco border-l-2 border-branco/80 fixed top-0 right-0 z-50 hidden h-full w-64 translate-x-full transform shadow-xl transition-all duration-300 ease-in-out"
        >
            <button
                id="close-btn"
                className="text-vermelho absolute top-6 right-6 cursor-pointer text-4xl"
            >
                &times;
            </button>

            <div className="px-6 pt-8">
                <ul className="flex flex-col gap-6 text-sm leading-relaxed">
                    <li><a href="./" className="hover:text-amarelo">Início</a></li>
                    <li><a href="/desabafosFeed" className="hover:text-amarelo">Desabafos</a></li>
                    <li><a href="/dashboard" className="hover:text-amarelo">Dashboard</a></li>
                    <li><a href="./" className="hover:text-amarelo">Recomendações do psicólogo</a></li>
                    <li><a href="./" className="hover:text-amarelo">Conta</a></li>
                    <li><a href="./" className="text-vermelho hover:text-rosa">Sair</a></li>
                </ul>
            </div>
        </div>
    )
}