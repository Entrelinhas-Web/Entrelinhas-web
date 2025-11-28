import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-pixel relative flex flex-col overflow-x-hidden">

      <div
          className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"
      ></div>
        
        <div className="relative flex w-full min-h-svh flex-col justify-between z-10">
          
          <header className="relative flex w-full items-center justify-between p-4 text-sm sm:px-8 sm:py-6 z-50">
            <a href="#" className="text-foreground text-lg no-underline sm:text-xl">Entrelinhas</a>

            <button id="menu-btn" className="block sm:hidden focus:outline-none">
              <Image
                src="/menu.png"
                alt="Menu"
                width={10}
                height={10}
                className="pixel h-8 w-8 object-contain"
              />
            </button>

            <nav id="mobile-nav" className="hidden absolute right-0 top-full mt-2 min-w-[200px] flex-col items-center gap-4 rounded-xl border-2 border-foreground bg-preto p-4 shadow-xl sm:static sm:mt-0 sm:ml-auto sm:flex sm:w-auto sm:flex-row sm:gap-8 sm:border-none sm:p-0 sm:shadow-none">
              <a href="/desabafosFeed" className="text-foreground p-2 text-base no-underline transition-colors hover:text-gray-500 hover:opacity-80">Pensamentos</a>
              <a href="/pag" className="text-foreground p-2 text-base no-underline transition-colors hover:text-gray-500 hover:opacity-80">Consultar</a>
              <a href="/login" className="bg-branco text-preto font-pixel cursor-pointer rounded-[20px] px-6 py-3 text-xs no-underline transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_var(--foreground)] sm:text-sm">Login</a>
            </nav>
          </header>

          <main className="flex grow flex-col items-center justify-center text-center px-4 z-20 pb-[150px]">
            <Image
              src="/logo.png"
              alt="Estrelas decorativas"
              width={10000}
              height={10000}
              className="pixel animate-float-stars h-auto w-[100px] mb-4 sm:w-[150px] max-w-full object-contain"
            />

            <div className="p-4 px-2 text-base sm:px-0 sm:text-lg md:text-2xl max-w-[800px] mb-6">
              Registre seus sentimentos e desabafos no Entrelinhas
            </div>

            <a href="/cadastro" className="bg-branco text-preto font-pixel cursor-pointer rounded-[20px] px-5 py-3 text-xs no-underline transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_var(--foreground)] sm:px-6 sm:py-3 sm:text-sm">
              Registrar
            </a>
          </main>

          <div className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[200px] z-20 pointer-events-none overflow-hidden">
            <Image
              src="/cloud.png"
              alt=""
              width={10000}
              height={10000}
              className="absolute -left-[10%] top-[20%] w-[60%] max-w-none opacity-90"
            />

            <Image
              src="/cloud.png"
              alt=""
              width={10000}
              height={10000}
              className="absolute left-[20%] top-[40%] w-[50%] max-w-none opacity-50"
            />

            <Image
              src="/cloud.png"
              alt=""
              width={10000}
              height={10000}
              className="absolute -right-[10%] top-[10%] w-[65%] max-w-none opacity-80"
            />

            <Image
              src="/cloud.png"
              alt=""
              width={10000}
              height={10000}
              className="absolute right-[30%] top-[60%] w-[40%] max-w-none opacity-40"
            />
          </div>

        </div>
        
        <footer className="flex w-full flex-col items-center justify-center p-8 text-center sm:p-12 z-30 relative bg-branco text-white min-h-[80vh]">
          
          <div className="absolute -top-32 left-0 w-full h-32 bg-linear-to-b from-transparent to-branco pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <h2 className="mb-4 text-xl font-pixel sm:text-2xl text-preto">
              Bem vindo ao Entrelinhas!!!
            </h2>
            <p className="text-sm leading-relaxed sm:text-base mb-6 text-preto">
              Aqui, você pode registrar seus desabafos diários, expressar o que sente e graduar a intensidade das suas emoções. 
              O Entrelinhas ajuda você a criar um histórico do seu humor, facilitando o cuidado com a sua saúde mental.
            </p>
            <a href="/desabafosFeed" className="text-lilas font-pixel cursor-pointer rounded-[20px] px-5 py-3 text-xs no-underline transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_var(--foreground)] sm:px-6 sm:py-3 sm:text-sm">
                  Criar meu diário
            </a>
          </div>
        </footer>
        
    </div>
  );
}
