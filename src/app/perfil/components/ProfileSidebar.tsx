"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { logOutUser } from "@/src/services/storage"; 

export interface UserProfile {
  username: string;
  email: string;
  avatarUrl: string;
}

interface ProfileSidebarProps {
  user: UserProfile | null;
}

export default function ProfileSidebar({ user }: ProfileSidebarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOutUser();
      router.push("/");
      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao sair:", error);
      alert("Erro ao tentar sair. Tente novamente.");
    }
  };

  if (!user) return null;

  return (
    <aside className="w-full md:w-[350px] shrink-0 p-6 md:p-10 no-scrollbar overflow-y-auto">
      <div className="border-lilas shadow-pixel bg-roxo/90 border-4 p-8 rounded-lg text-center flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 bg-branco/10 rounded-full blur-xl animate-pulse"></div>
          <Image
            src={user.avatarUrl || "/avatar.jpg"}
            alt={user.username}
            width={150}
            height={150}
            className="pixel border-lilas bg-preto h-32 w-32 md:h-40 md:w-40 border-4 object-cover rounded-full relative z-10"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-1xl text-amarelo tracking-widest uppercase">
            {user.username}
          </h1>
          <p className="text-[10px] lg:text-[7px] text-branco/60 lowercase font-sans">
            {user.email}
          </p>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full bg-lilas/20 border-2 border-lilas text-branco text-[10px] py-3 rounded hover:bg-branco hover:text-roxo transition-all uppercase cursor-pointer"
        >
          Sair
        </button>
      </div>
    </aside>
  );
}