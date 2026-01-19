"use client"

import Image from "next/image";
import { desabafoObject, emocoes } from "../page";
import Form from "./form";
import { updateDesabafo } from "@/src/services/storage";
import { useState } from "react";

interface PopUpProps {
  objeto: desabafoObject;
  onClose: () => void;
}

export default function PopUp({ objeto, onClose }: PopUpProps)  {
    const [ viewForm, setViewForm ] = useState(false);
    const { bg, border, text } = emocoes[objeto.emocao];

    const stars = Array(objeto.nivel).fill("").concat(Array(5 - objeto.nivel).fill("."));

    async function editDesabafo(e: React.FormEvent<HTMLFormElement>, desabafo: desabafoObject) {
        e.preventDefault();

        try {
            await updateDesabafo({... desabafo, id: objeto.id});

            location.reload()
        } catch (err: any) {
            alert(err.message ?? "Erro ao editar desabafo.");
        }
    }

    async function onDelete(id: number) {
        console.log("Remoção");
    }

    return (
        <div
            className="fixed inset-0 z-100 p-2 flex items-center justify-center backdrop-blur-sm bg-black/30"
        >
            <div className={`bg-preto p-6 rounded-2xl shadow-xl w-full max-w-5xl relative border-2 ${border}`}>
                <div className="absolute top-3 right-4 flex items-center gap-3 text-center">
                    <button 
                        title="Editar"
                        className="text-gray-400 hover:opacity-80 transition-opacity cursor-pointer"
                        onClick={() => setViewForm(true)}
                    >
                        <Image
                            src="/edit.png"
                            alt="Editar"
                            width={10}
                            height={10}
                            className="pixel w-5 h-5 object-contain"
                        />
                    </button>
                    
                    <button 
                        title="Remover"
                        className="text-gray-400 hover:opacity-80 transition-opacity cursor-pointer"
                        onClick={() => onDelete(objeto.id)}
                    >
                        <Image
                            src="/trash.png"
                            alt="Remover"
                            width={10}
                            height={10}
                            className="pixel w-5 h-5 object-contain"
                        />
                    </button>

                    <button 
                        title="Fechar"
                        className="text-gray-400 hover:text-white text-2xl font-bold pt-1 cursor-pointer"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                
                <h1 className={`${text} font-bold text-2xl pb-2 max-w-[75%] lg:max-w-full`}>{objeto.titulo}</h1>
                
                <div className="flex flex-row gap-x-1 pb-2">
                    {stars.map((item, i) => (
                        (item === "") ? (
                            <Image 
                                key={i} 
                                src="/star.png" 
                                alt="Estrela de intensidade" 
                                width={10} 
                                height={10} 
                                className="pixel w-5 h-5 object-contain"
                            />
                        ) : (
                            <Image 
                                key={i} 
                                src="/star-outline.png" 
                                alt="Estrela de intensidade" 
                                width={10} 
                                height={10} 
                                className="pixel w-5 h-5 object-contain"
                            />
                        )
                    ))}
                </div>

                <p className="text-sm text-gray-400 pb-4">{objeto.date}</p>
                
                <div className="text-base text-white overflow-y-auto max-h-[80vh] py-2 scrollbar-hide">
                    <p className="whitespace-pre-wrap">{objeto.descricao}</p>
                </div>

            </div>

            {(viewForm) && (
                <div className="form m-4 flex flex-col items-center justify-center py-4">
                    <Form handleSubmit={editDesabafo} onClose={() => setViewForm(false)} text="Editar" objeto={objeto} />
                </div>
            )}
        </div>
    );
}
