import emocoes from "../js/models/emocoes.js";

const desabafoCard = (objeto) => {
    const { bg, border, text } = emocoes[objeto.emocao];

    return (
        `<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${border} overflow-hidden cursor-pointer hover:scale-105" href="/">
                <div class="lateral ${bg} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${text} font-bold">${objeto.titulo}</h1>
            
                        <p>${objeto.data}</p>
                    </div>
            
                    <div class="text-sm">
                        ${(objeto.descricao.length >= 200) ? (objeto.descricao.slice(0, 200) + "...") : (objeto.descricao)}
                    </div>
                </div>
            </a>
        </div>`
    )
}

export default desabafoCard;