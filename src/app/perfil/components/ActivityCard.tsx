import { desabafoObject } from "@/src/types/desabafo";
import { emocoes } from "@/src/types/emocoes";

interface ActivityCardProps {
  data: desabafoObject;
  onClick?: () => void;
}

export default function ActivityCard({ data, onClick }: ActivityCardProps) {
  const { bg, border, text } = emocoes[data.emocao];

  return (
    <div 
        className="w-full p-2" 
        onClick={onClick}
    >
        <div className={`flex rounded-2xl border-2 ${border} overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-lg bg-preto`}>
            <div className={`lateral ${bg} w-3 shrink-0`}></div>

            <div className="content flex flex-col flex-1 gap-2 p-4">
                <div className="flex justify-between items-start">
                    <h1 className={`${text} font-bold text-lg uppercase tracking-wide`}>
                        {data.titulo}
                    </h1>
                    <span className="text-xs text-branco/50 font-sans mt-1">
                        {data.date || data.created_at}
                    </span>
                </div>

                <div className="text-sm text-branco/80 font-sans leading-relaxed">
                    {(data.descricao.length >= 200) 
                        ? (data.descricao.slice(0, 200) + "...") 
                        : (data.descricao)
                    }
                </div>
            </div>
        </div>
    </div>
  );
}