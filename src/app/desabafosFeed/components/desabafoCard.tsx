export interface desabafoObject {
    id: number;
    titulo: string;
    emocao: keyof typeof emocoes;
    nivel: string;
    descricao: string;
    created_at: string;
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

export default function DesabafoCard({objeto, onClick}: { objeto: desabafoObject; onClick: () => void}) {
    const { bg, border, text } = emocoes[objeto.emocao];

    const dia = objeto.created_at.slice(8, 10);
    const mes = objeto.created_at.slice(5, 7);
    const ano = objeto.created_at.slice(0, 4);

    return (
        <div 
            className="w-[85%] lg:w-[60%] p-4 gap-2"
            onClick={onClick}
        >
            <div className={`flex rounded-2xl border-2 ${border} overflow-hidden cursor-pointer hover:scale-105`}>
                <div className={`lateral ${bg} w-3`}></div>

                <div className="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 className={`${text} font-bold`}>{objeto.titulo}</h1>
            
                        <p>{`${dia}/${mes}/${ano}`}</p>
                    </div>
            
                    <div className="text-sm">
                        {(objeto.descricao.length >= 200) ? (objeto.descricao.slice(0, 200) + "...") : (objeto.descricao)}
                    </div>
                </div>
            </div>
        </div>
    )
}