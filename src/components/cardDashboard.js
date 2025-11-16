import emocoes from "../js/models/emocoes.js";

const dashboardCard = (emocao) => {
    const { bg, border, text } = emocoes[emocao];

    return (
        `<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${border} overflow-hidden hover:scale-105">
                <div class="lateral ${bg} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${text} font-bold">0 Registro(s) de emoção</h1>
                    </div>
                </div>
            </a>
        </div>`
    )
}

export default dashboardCard;