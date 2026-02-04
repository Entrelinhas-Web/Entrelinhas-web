import { emocaoParametro } from "@/src/types/desabafo";


export default function DashboardCard( {nome, objeto, quantidade}: {nome: string, objeto: emocaoParametro, quantidade: number}) {
    const { bg, border, text } = objeto;
    
    return (
        <div className="w-[85%] lg:w-[60%] p-4 gap-2">
            <div className={`flex rounded-2xl border-2 ${border} overflow-hidden hover:scale-105`}>
                <div className={`lateral ${bg} w-3`}></div>

                <div className="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    {
                        quantidade == 1 
                        ? <h1 className={`${text} font-bold`}>{quantidade} Registro de {nome}</h1>
                        : <h1 className={`${text} font-bold`}>{quantidade} Registros de {nome}</h1>
                    }
                </div>
            </div>
        </div>
    )
}