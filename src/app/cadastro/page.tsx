"use client"

import Image from "next/image";
import { useState } from "react";

export default function Cadastro() {
    const [preview, setPreview] = useState("/avatar.jpg");

    const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const senha = form.get("senha") as string;
        const confirmar = form.get("confirmar") as string;

        if (senha.length < 8)
        return alert("Sua senha deve possuir no mínimo 8 caracteres!");
        if (senha !== confirmar)
        return alert("As senhas não coincidem!");

        alert("Cadastro realizado com sucesso!");
    };

    return (
        <div className="font-pixel text-branco flex min-h-screen items-center justify-center">

            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            {/* Header */}
            <header className="absolute flex top-0 w-full flex-col gap-4 p-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
                <a href="./" className="text-foreground text-lg no-underline sm:text-xl">Entrelinhas</a>
                    <a href="/login"
                    className="bg-branco text-preto font-pixel cursor-pointer rounded-[20px] px-5 py-3 text-xs no-underline transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_var(--foreground)] sm:px-6 sm:py-3 sm:text-sm">
                    Login
                </a>
            </header>

            <div
                className="border-lilas shadow-pixel bg-roxo w-fit border-4 p-8  text-center space-y-6 rounded-lg lg:w-110"
            >
                <h1 className="text-amarelo">Cadastre-se</h1>
                <h2 className="text-amarelo pb-5 text-xs">e registre seus sentimentos</h2>

                <form 
                    id="cadastroForm" 
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmit}
                >
                    {/* Nome */}
                    <div className="text-left space-y-1">
                        <label className="block text-xs pb-1">Nome de usuário</label>
                        <input
                            type="text"
                            name="username"
                            required
                            className="bg-preto border-lilas rounded-[5px] text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                            placeholder="Digite seu usuário"
                        />
                    </div>

                    {/* Email */}
                    <div className="text-left space-y-1">
                        <label className="block text-xs pb-1">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="bg-preto border-lilas rounded-[5px] text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                            placeholder="Ex: email@exemplo.com"
                        />
                    </div>

                    {/* Senha */}
                    <div className="text-left space-y-1">
                        <label className="block text-xs pb-1">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            required
                            className="bg-preto border-lilas rounded-[5px] text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                            placeholder="Digite sua senha (8+ dígitos)"
                        />
                    </div>

                    {/* Confirmação */}
                    <div className="text-left space-y-1 ">
                        <label className="block text-xs pb-1">Confirmação de senha</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            required
                            className="bg-preto border-lilas rounded-[5px] text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                            placeholder="Confirme sua senha"
                        />
                    </div>

                    {/* Avatar */}
                    <div className="flex items-center justify-between mt-2 gap-3">
                        <Image
                            id="peview"
                            src={preview}
                            alt="Avatar"
                            width={10000}
                            height={10000}
                            className="pixel border-lilas bg-preto h-16 w-16 border-2 object-cover"
                        />

                        <label
                            className="bg-lilas text-branco rounded-[5px] hover:bg-branco hover:text-lilas cursor-pointer px-3 py-2 text-[10px] transition border-2 border-lilas hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423]"
                        >
                            Escolher avatar
                            <input
                            type="file"
                            id="avatarInput"
                            name="avatarInput"
                            accept="image/*"
                            className="hidden"
                            onChange={handleAvatar}
                            />
                        </label>
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        className="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco w-full border-2 py-2 mt-4 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}