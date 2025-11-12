import sair from '/public/sair.png';

export function menu() {
  const app = document.querySelector("#app");

  const menu = `
    <div id="sidebar" class="bg-preto text-branco border-l-2 border-branco/80 fixed top-0 right-0 z-50 hidden h-full w-64 translate-x-full transform shadow-xl transition-all duration-300 ease-in-out">
        <button
        id="close-btn"
        class="hover:text-vermelho absolute top-6 right-6 cursor-pointer text-xl"
        >
        <img src="${sair}" alt="sair" class="pixel h-8" />
        </button>

        <div class="px-6 pt-8">
        <ul class="flex flex-col gap-6 text-sm leading-relaxed">
            <li><a href="/" class="hover:text-amarelo">Início</a></li>
            <li><a href="/" class="hover:text-amarelo">Recomendações do psicólogo</a></li>
            <li><a href="/" class="hover:text-amarelo">Conta</a></li>
            <li><a href="/" class="text-vermelho hover:text-rosa">Sair</a></li>
        </ul>
        </div>
    </div>
  `;

  app.insertAdjacentHTML("beforeend", menu);
}
