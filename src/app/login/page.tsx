export default function Login() {
    return (
        <div className="font-pixel text-branco flex min-h-screen items-center justify-center">
            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            {/* Header */}
            <header className="absolute flex top-0 w-full flex-col gap-4 p-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
                <a href="./" className="text-foreground text-lg no-underline sm:text-xl">Entrelinhas</a>
                    <a href="/cadastro"
                    className="bg-branco text-preto font-pixel cursor-pointer rounded-[20px] px-5 py-3 text-xs no-underline transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_var(--foreground)] sm:px-6 sm:py-3 sm:text-sm">
                    Cadastro
                </a>
            </header>
            
            <div
                className="border-lilas shadow-pixel bg-roxo w-fit border-4 p-8  text-center space-y-6 rounded-lg lg:w-110"
            >
                <h1 className="text-amarelo">Faça seu login</h1>
                <h2 className="text-amarelo pb-5 text-xs">suas Entrelinhas te esperam</h2>

                <form id="cadastroForm" className="flex flex-col gap-6 pb-2">

                    {/* Email */}
                    <div className="text-left space-y-1">
                        <input
                            type="email"
                            required
                            className="bg-preto rounded-[5px] border-lilas text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                            placeholder="E-mail"
                        />
                    </div>

                    {/* Senha */}
                    <div className="text-left space-y-1">
                        <input
                            type="password"
                            id="senha"
                            required
                            className="bg-preto rounded-[5px] border-lilas text-branco focus:border-amarelo w-full border-2 px-2 py-2 text-[10px] focus:bg-[#221B2F] focus:outline-none"
                            placeholder="Senha"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        className="bg-lilas border-lilas text-branco rounded-[5px] hover:bg-branco w-full border-2 py-2 mt-4 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas"
                    >
                        Entrar
                    </button>
                </form>

                <a href="#" className="text-branco hover:underline text-xs cursor-pointer">
                    Esqueceu sua senha?
                </a>

                <div className="pt-6 text-[10px] flex flex-row justify-center">
                    <p>Não tem uma conta? <a href="#" className="hover:underline cursor-pointer"><strong>Cadastre-se</strong></a></p>
                </div>
            </div>
        </div>
    )
}