"use client"

import Link from "next/link";
import { useState } from "react";
import storage from "@/src/services/storage"

export default function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);
        setError(false);
        setLoading(true);

        try {
            await storage.loginUser(email, password);

            setError(false);
            
            window.location.href = "/desabafosFeed";
            return;
        } catch (err: unknown) {
            const message = (err instanceof Error) ? (err.message) : ("Email ou senha inválidos");

            setMessage(message);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-pixel text-branco flex min-h-screen items-center justify-center flex-col">
            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            {/* Header */}
            <header className="absolute flex top-0 w-full gap-4 p-4 text-sm flex-row justify-between items-center sm:px-8 sm:py-6">
                <Link href="./" className="text-foreground text-lg no-underline sm:text-xl">Entrelinhas</Link>
                <Link 
                    href="/cadastro"
                    className="bg-branco text-preto font-pixel cursor-pointer rounded-[20px] px-5 py-3 text-xs no-underline transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_var(--foreground)] sm:px-6 sm:py-3 sm:text-sm">
                        Cadastro
                </Link>
            </header>
            
            <div
                className="border-lilas shadow-pixel bg-roxo w-fit border-4 p-6 text-center space-y-6 rounded-lg lg:p-10 lg:w-110"
            >
                <h1 className="text-amarelo">Faça seu login</h1>
                <h2 className="text-amarelo pb-5 text-xs">suas Entrelinhas te esperam</h2>

                <form 
                    id="cadastroForm" 
                    className="flex flex-col gap-6 pb-2" 
                    onSubmit={handleSubmit}
                >

                    {/* Email */}
                    <div className="text-left space-y-1">
                        <label className="block text-xs pb-1">E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
                            required
                            className="bg-preto rounded-[5px] border-lilas text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                        />
                    </div>

                    {/* Senha */}
                    <div className="text-left space-y-1">
                        <label className="block text-xs pb-1">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-preto rounded-[5px] border-lilas text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                        />
                    </div>


                    {/* Mensagem de erro */ }
                    {message && (
                    <div className="rounded border-2 px-3 py-2 text-[12px] border-vermelho bg-vermelho/20 text-vermelho">
                        {message}
                    </div>
                    )}

                    {/* Botão */}
                    <button
                    type="submit"
                    disabled={loading}
                    className="bg-lilas border-lilas rounded-[5px] text-branco text-sm lg:text-lg hover:bg-branco w-full border-2 py-2 mt-4 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas disabled:opacity-50 disabled:pointer-events-none"
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </button>
                </form>

                <Link href="#" className="text-branco hover:underline text-xs cursor-pointer">
                    Esqueceu sua senha?
                </Link>

                <div className="pt-6 text-[10px] flex flex-row justify-center">
                    <p>Não tem uma conta? <Link href="/cadastro" className="hover:underline cursor-pointer"><strong>Cadastre-se</strong></Link></p>
                </div>
            </div>
        </div>
    )
}