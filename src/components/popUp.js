export default function popUp(modalId, objeto, border, text) {
  const starImg = `<img 
                        src="/Entrelinhas-web/star.png" 
                        alt="Estrela de intensidade" 
                        class="w-5 h-5"
                    >`;

  const starsHtml = starImg.repeat(objeto.nivel || 0);

  return `
    <div 
        id="${modalId}" 
        class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
    >
        <div 
            class="bg-preto p-6 rounded-2xl shadow-xl w-full max-w-5xl relative border-2 ${border}"
        >
            
            <div class="absolute top-3 right-4 flex items-center gap-3 text-center">
                
                <button 
                    title="Editar"
                    class="text-gray-400 hover:opacity-80 transition-opacity edit-popup"
                >
                    <img src="/Entrelinhas-web//edit.png" alt="Editar" class="w-5 h-5">
                </button>
                
                <button 
                    title="Remover"
                    class="text-gray-400 hover:opacity-80 transition-opacity remove-popup"
                >
                    <img src="/Entrelinhas-web/trash.png" alt="Remover" class="w-5 h-5">
                </button>

                <button 
                    title="Fechar"
                    class="text-gray-400 hover:text-white text-2xl font-bold close-popup pt-1"
                >
                    &times;
                </button>
            </div>
            
            <h1 class="${text} font-bold text-2xl mb-2">${objeto.titulo}</h1>
            
            <div class="flex flex-row gap-x-1 mb-2">
                ${starsHtml}
            </div>

            <p class="text-sm text-gray-400 mb-4">${objeto.data}</p>
            
            <div class="text-base text-white overflow-y-auto max-h-[80vh] px-2 scrollbar-hide">
                <p class="whitespace-pre-wrap">${objeto.descricao}</p>
            </div>

        </div>
    </div>
    `;
}
