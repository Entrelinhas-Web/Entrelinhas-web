"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getPerfil, getDesabafos } from "@/src/services/storage";
import { desabafoObject } from "@/src/types/desabafo";
import Header from "@/src/components/header";
import MenuBar from "@/src/components/menuBar";
import ProfileSidebar, { UserProfile } from "./components/ProfileSidebar";
import DesabafoCard from "@/src/components/desabafoCard";

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [activities, setActivities] = useState<desabafoObject[]>([]);

  function formatarDesabafo(registro: any): desabafoObject {
    if (!registro.created_at) return registro;
    const dia = registro.created_at.slice(8, 10);
    const mes = registro.created_at.slice(5, 7);
    const ano = registro.created_at.slice(0, 4);
    return { ...registro, date: `${dia}/${mes}/${ano}` };
  }

  useEffect(() => {
    const carregarDados = async () => {
      try {
        setLoading(true);
        
        const perfil = await getPerfil();
        
        if (perfil) {
          setUserData({
            username: perfil.nome,
            email: perfil.email,
            avatarUrl: perfil.avatar || "/avatar.jpg"
          });

          const resultadoDesabafos = await getDesabafos();
          if (resultadoDesabafos && resultadoDesabafos.data) {
            const formatados = resultadoDesabafos.data.map((item: any) => formatarDesabafo(item));
            setActivities(formatados);
          }
        } else {
          setUserData(null);
        }

      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  const displayedActivities = activities.slice(0, 3);
  const hasMore = activities.length > 3;

  return (
    <div className="font-pixel text-branco w-screen flex flex-col relative bg-transparent min-h-screen md:h-screen md:overflow-hidden">
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="w-full px-4 md:px-8 pt-4 shrink-0">
        <Header />
      </div>

      <hr className="w-full border-t border-zinc-700 mt-2" />

      <main className="flex-1 w-full max-w-none flex flex-col overflow-hidden relative">
        
        {loading ? (
          <div className="w-full h-full flex items-center justify-center text-amarelo">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amarelo"></div>
          </div>
        ) : !userData ? (
          
          <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 animate-fade-in pb-32">
            <div className="text-center space-y-2">
              <h2 className="text-2xl text-amarelo uppercase tracking-widest font-bold">
                Calma Amigão
              </h2>
              <p className="text-branco/60 text-sm max-w-xs md:max-w-md mx-auto font-sans">
                Você precisa estar conectado para visualizar seu perfil e seus desabafos.
              </p>
            </div>

            <Link href="login">
              <button className="px-8 py-3 bg-lilas/20 border-2 border-lilas text-branco text-xs uppercase tracking-widest rounded hover:bg-branco hover:text-roxo hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                Fazer Login
              </button>
            </Link>
          </div>

        ) : (
          
          <div className="flex flex-col md:flex-row w-full h-full items-start">
            <ProfileSidebar user={userData} />

            <section className="flex-1 w-full h-full md:overflow-y-auto no-scrollbar p-4 md:p-8 pb-32">
              <h2 className="text-amarelo text-2xl font-bold mb-6 pl-2">
                Meus Desabafos
              </h2>
              
              <div className="flex flex-col gap-4 w-full max-w-4xl">
                {displayedActivities.length > 0 ? (
                  <>
                    {displayedActivities.map((item) => (
                      <DesabafoCard 
                        key={item.id} 
                        objeto={item}
                        onClick={() => console.log("Clicou no card", item.id)} 
                      />
                    ))}

                    {hasMore && (
                      <div className="w-full flex justify-center mt-4">
                        <Link href="/desabafosFeed" className="group flex items-center gap-2">
                            <span className="text-sm uppercase tracking-widest text-branco/90 group-hover:text-amarelo transition-colors">
                                Ver todos os desabafos
                            </span>
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                   <div className="flex flex-col items-center justify-center pt-10 text-center opacity-60">
                     <p className="text-xl text-branco mb-2">Você ainda não desabafou.</p>
                     <p className="text-sm text-lilas">Seus registros aparecerão aqui.</p>
                   </div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      <div className="fixed bottom-0 w-full z-50 bg-[#050505]">
         <MenuBar />
      </div>
    </div>
  );
}