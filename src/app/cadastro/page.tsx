"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import storage from "@/src/services/storage"

export default function Cadastro() {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ avatar, setAvatar ] = useState("/avatar.jpg");

    type Status = "idle" | "loading" | "error" | "success";
    const [status, setStatus] = useState<Status>("idle");
    const [message, setMessage] = useState<string | null>(null);

    const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = (ev: ProgressEvent<FileReader>) => {
            const result = ev.target?.result;
            
            if (typeof result === "string") {
                setAvatar(result);
            }
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (status === "loading" || status === "success") return;

        setMessage(null);
        setStatus("loading");

        //pelo menos 8 caracteres, pelo menos uma letra maiuscula e minuscula, pelo menos um num, pelo menos um caractere especial    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setMessage("A senha deve ter 8+ caracteres, incluindo maiúsculas, números e símbolos.");
            setStatus("error");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("As senhas não coincidem!");
            setStatus("error");
            return;
        }

        try {
            await storage.createUser(username, email, password, avatar);

            setMessage("Cadastro realizado com sucesso! Redirecionando...");
            setStatus("success");

            setTimeout(() => {
                window.location.href = "/login";
            }, 2500);

        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Erro ao cadastrar";
            setMessage(message);
            setStatus("error");
        }
    };

    return (
        <div className="font-pixel text-branco min-h-screen flex flex-col">
            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            {/* Header */}
            <header className="flex top-0 w-full gap-4 p-4 text-sm flex-row justify-between items-center sm:px-8 sm:py-6">
                <Link href="./" className="text-foreground text-lg no-underline sm:text-xl">Entrelinhas</Link>
                <Link 
                    href="/login"
                    className="bg-branco text-preto font-pixel cursor-pointer rounded-[20px] px-5 py-3 text-xs no-underline transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_var(--foreground)] sm:px-6 sm:py-3 sm:text-sm">
                        Login
                </Link>
            </header>

            <div className="form flex-1 flex flex-col justify-center items-center gap-4 px-2">
                {/* Mensagem de sucesso */ }
                {status === "success" && (
                <div className={`lg:fixed lg:z-50 lg:top-20 rounded border-2 px-3 py-2 text-sm border-verde bg-verde/20 text-verde text-center lg:text-md`}>
                    {message}
                </div>
                )}

                <div className="border-lilas shadow-pixel bg-roxo w-fit border-4 p-6 text-center space-y-6 rounded-lg lg:p-10 lg:w-110">
                    <h1 className="text-amarelo">Cadastre-se</h1>
                    <h2 className="text-amarelo pb-5 text-xs">e registre seus sentimentos</h2>

                    <form 
                        id="cadastroForm" 
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
                        {/* Nome */}
                        <div className="text-left space-y-1">
                            <label className="block text-xs pb-1">Nome</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value.trim())}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value.trim())}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="bg-preto border-lilas rounded-[5px] text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                                placeholder="Confirme sua senha"
                            />
                        </div>

                        {/* Avatar */}
                        <div className="flex items-center justify-between mt-2 gap-3">
                            <Image
                                id="peview"
                                src={avatar}
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

                        {/* Mensagem de erro */ }
                        {status === "error" && (
                        <div
                            className={`rounded border-2 px-3 py-2 text-[10px] border-vermelho bg-vermelho/20 text-vermelho
                            }`}
                        >
                            {message}
                        </div>
                        )}

                        {/* Botão */}
                        <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className="bg-lilas border-lilas rounded-[5px] text-branco text-sm lg:text-lg hover:bg-branco w-full border-2 py-2 mt-4 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas disabled:opacity-50 disabled:pointer-events-none"
                        >
                            {status === "loading"
                            ? "Cadastrando..."
                            : status === "success"
                            ? "Cadastro realizado"
                            : "Cadastrar"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}