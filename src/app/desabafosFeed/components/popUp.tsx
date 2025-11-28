import Image from "next/image";

interface desabafoObject {
      id: number,
      titulo: string,
      emocao: string,
      nivel: string,
      descricao: string,
      data: string,
}

export default function PopUp(modalId: string, objeto: desabafoObject, border: string, text: string) {
    const starImg = `<img src="/Entrelinhas-web/star.png" alt="Estrela de intensidade" className="w-5 h-5">`;

    const starsHtml = starImg.repeat(Number(objeto.nivel) || 0);

    return (
        <div 
            id={modalId} 
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
        >
            <div className={`bg-preto p-6 rounded-2xl shadow-xl w-full max-w-5xl relative border-2 ${border}`}>
                <div className="absolute top-3 right-4 flex items-center gap-3 text-center">
                    <button 
                        title="Editar"
                        className="text-gray-400 hover:opacity-80 transition-opacity edit-popup"
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
                    >
                        &times;
                    </button>
                </div>
                
                <h1 className="${text} font-bold text-2xl mb-2">{objeto.titulo}</h1>
                
                <div className="flex flex-row gap-x-1 mb-2">
                    {starsHtml}
                </div>

                <p className="text-sm text-gray-400 mb-4">{objeto.data}</p>
                
                <div className="text-base text-white overflow-y-auto max-h-[80vh] px-2 scrollbar-hide">
                    <p className="whitespace-pre-wrap">{objeto.descricao}</p>
                </div>

            </div>
        </div>
    );
}
