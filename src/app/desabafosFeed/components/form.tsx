"use client"

import { ChangeEvent, useState } from "react";
import { desabafoObject } from "../page";

interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, objeto) => Promise<void>;
    onClose: () => void;
    text: string;
    objeto?: desabafoObject;
}

export default function Form({ handleSubmit, onClose, text, objeto }: FormProps) {
    const [ titulo, setTitulo ] = useState(objeto?.titulo || "");
    const [ emocao, setEmocao ] = useState(objeto?.emocao || "");
    const [ nivel, setNivel ] = useState(objeto?.nivel || 3);
    const [ descricao, setDescricao ] = useState(objeto?.descricao || "");

    const handleNivelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNivel(parseInt(e.target.value));
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-sm bg-black/30">
            <div className="bg-roxo border-lilas border-4 w-[80%] lg:w-[55%] rounded-lg p-6 shadow-md mx-auto">
                <div className="relative flex items-center justify-center text-amarelo">
                    <h1 className="mb-6 pb-5 text-center text-xl font-semibold">
                        {`${text} desabafo`}
                    </h1>

                    <button 
                        title="Fechar"
                        className="absolute right-0 hover:text-white text-2xl font-bold pb-5 cursor-pointer"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                <form id="desabafoForm" className="flex flex-col gap-6 w-full" onSubmit={(e) => handleSubmit(
                    e, {
                        titulo: titulo.trim(),
                        emocao: emocao,
                        nivel: nivel,
                        descricao: descricao.trim(),
                        }
                    )
                }>
                    <div className="lg:flex gap-6">

                        <div className="esquerda flex flex-col lg:w-[30%] gap-12">

                            {/* Título */}
                            <input
                                type="text"
                                name="titulo"
                                value={titulo}
                                placeholder="Título"
                                className="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 p-2 outline-none w-full"
                                required
                                onChange={(e) => setTitulo(e.target.value)}
                            />

                            {/* Emoção */}
                            <select
                                name="emocao"
                                value={emocao}
                                className="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 p-2 outline-none w-full"
                                required
                                onChange={(e) => setEmocao(e.target.value)}
                            >
                                <option value="" disabled selected hidden>Emoção</option>
                                <option value="Felicidade" >Felicidade</option>
                                <option value="Tristeza">Tristeza</option>
                                <option value="Raiva">Raiva</option>
                                <option value="Ansiedade">Ansiedade</option>
                                <option value="Motivação">Motivação</option>
                                <option value="Tranquilidade">Tranquilidade</option>
                                <option value="Medo">Medo</option>
                            </select>

                            {/* Nível */}
                            <div className="flex flex-col gap-2">
                                <span className="text-amarelo font-medium">Nível da emoção:</span>

                                <input
                                    type="range"
                                    id="nivel"
                                    name="nivel"
                                    min="1"
                                    max="5"
                                    onInput={handleNivelChange}
                                    value={nivel}
                                    className="accent-amarelo w-full"
                                    required
                                />

                                <span id="valorNivel" className="text-center text-sm text-amarelo">{nivel} / 5</span>
                            </div>
                        </div>

                        {/* Descrição */}
                        <div className="dir lg:w-[70%] flex flex-col">
                            <textarea
                                id="descricao"
                                name="descricao"
                                value={descricao}
                                rows={10}
                                placeholder="Aqui vai seu desabafo..."
                                className="bg-preto border-lilas focus:border-amarelo focus:ring-rosa resize-none rounded-md border-2 p-2 outline-none w-full h-full"
                                required
                                onChange={(e) => setDescricao(e.target.value)}
                            ></textarea>
                        </div>

                    </div>

                    {/* Botão */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco border-2 py-2 px-8 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas font-semibold"
                        >
                            {text}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
