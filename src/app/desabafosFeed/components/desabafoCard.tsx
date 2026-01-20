import { desabafoObject } from "@/src/types/desabafo";
import { emocoes } from "../page";

export default function DesabafoCard({objeto, onClick}: { objeto: desabafoObject; onClick: () => void}) {
    const { bg, border, text } = emocoes[objeto.emocao];

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
            
                        <p>{objeto.date}</p>
                    </div>
            
                    <div className="text-sm">
                        {(objeto.descricao.length >= 200) ? (objeto.descricao.slice(0, 200) + "...") : (objeto.descricao)}
                    </div>
                </div>
            </div>
        </div>
    )
}