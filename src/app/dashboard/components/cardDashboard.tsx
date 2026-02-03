import { desabafoObject } from "@/src/types/desabafo";
import { emocoes } from "@/src/types/emocoes";

export default function DashboardCard( {objeto}: { objeto: desabafoObject}) {
    const { bg, border, text } = emocoes[objeto.emocao];
    const quant = 1;
    return (
        <div 
            className="w-[85%] lg:w-[60%] p-4 gap-2"
        >
            <div className={`flex rounded-2xl border-2 ${border} overflow-hidden cursor-pointer hover:scale-105`}>
                <div className={`lateral ${bg} w-3`}></div>

                <div className="content bg-preto flex flex-col flex-1 gap-3 p-2">

                    <h1 className={`${text} font-bold`}>${quant} Registro de ${objeto.emocao}</h1>

                </div>
            </div>
        </div>
    )
}