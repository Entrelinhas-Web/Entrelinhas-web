"use client"

import { useEffect } from "react"
import { menu } from "@/src/utils/menu"
import Link from "next/link";

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
                    <li><Link href="./" className="hover:text-amarelo">Início</Link></li>
                    <li><Link href="/desabafosFeed" className="hover:text-amarelo">Desabafos</Link></li>
                    <li><Link href="/dashboard" className="hover:text-amarelo">Dashboard</Link></li>
                    <li><Link href="./" className="hover:text-amarelo">Recomendações do psicólogo</Link></li>
                    <li><Link href="./" className="hover:text-amarelo">Conta</Link></li>
                    <li><Link href="./" className="text-vermelho hover:text-rosa">Sair</Link></li>
                </ul>
            </div>
        </div>
    )
}