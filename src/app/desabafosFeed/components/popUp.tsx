import Image from "next/image";
import { desabafoObject } from "./desabafoCard";

interface PopUpProps {
  objeto: desabafoObject;
  onClose: () => void;
  onDelete: (id: number) => void;
  onEdit: (objeto: desabafoObject) => void;
}

const emocoes = {
  Felicidade: { bg: "bg-amarelo", border: "border-amarelo", text: "text-amarelo" },
  Tristeza: { bg: "bg-azul", border: "border-azul", text: "text-azul" },
  Raiva: { bg: "bg-vermelho", border: "border-vermelho", text: "text-vermelho" },
  Ansiedade: { bg: "bg-laranja", border: "border-laranja", text: "text-laranja" },
  Motivação: { bg: "bg-rosa", border: "border-rosa", text: "text-rosa" },
  Tranquilidade: { bg: "bg-verde", border: "border-verde", text: "text-verde" },
  Medo: { bg: "bg-lilas", border: "border-lilas", text: "text-lilas" },
};

export default function PopUp({ objeto, onClose, onDelete, onEdit }: PopUpProps)  {
    const { border } = emocoes[objeto.emocao];

    const stars = Array(objeto.nivel).fill("");

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
        >
            <div className={`bg-preto p-6 rounded-2xl shadow-xl w-full max-w-5xl relative border-2 ${border}`}>
                <div className="absolute top-3 right-4 flex items-center gap-3 text-center">
                    <button 
                        title="Editar"
                        className="text-gray-400 hover:opacity-80 transition-opacity edit-popup"
                        onClick={() => onEdit(objeto)}
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
                        className="text-gray-400 hover:opacity-80 transition-opacity remove-popup"
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
                        className="text-gray-400 hover:text-white text-2xl font-bold close-popup pt-1"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                
                <h1 className="${text} font-bold text-2xl pb-2">{objeto.titulo}</h1>
                
                <div className="flex flex-row gap-x-1 pb-2">
                    {stars.map((_, i) => (
                        <Image 
                            key={i} 
                            src="/star.png" 
                            alt="Estrela de intensidade" 
                            width={10} 
                            height={10} 
                            className="pixel w-5 h-5 object-contain"
                        />
                    ))}
                </div>

                <p className="text-sm text-gray-400 pb-4">{objeto.data}</p>
                
                <div className="text-base text-white overflow-y-auto max-h-[80vh] py-2 scrollbar-hide">
                    <p className="whitespace-pre-wrap">{objeto.descricao}</p>
                </div>

            </div>
        </div>
    );
}
