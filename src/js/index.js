import { menuBar } from "./scripts/menu.js";
import { showRegistros } from "./scripts/registros.js";

const app = document.getElementById("app");

app.insertAdjacentHTML(
  "beforeend",
  `
    <body>
    <div class="header flex items-center p-4">
      <div class="flex w-full justify-between">
        <button id="menu-btn" class="cursor-pointer">
          <img src="/Entrelinhas-web/menu.png" alt="menu" class="pixel h-5" />
        </button>

        <div class="flex items-center gap-3">
          <img src="/Entrelinhas-web/logo.png" alt="" class="pixel h-8" />
          <h1 class="text-sm">Entrelinhas</h1>
        </div>

        <img src="/Entrelinhas-web/pontinhos.png" alt="" class="pixel h-8" />
      </div>
    </div>

    <hr class="border-cinza/40" />

    <!-- Menu -->
    <div
      id="sidebar"
      class="fixed left-0 top-0 z-50 hidden h-full w-64 -translate-x-full transform bg-preto text-branco shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out"
    >
      <button
        id="close-btn"
        class="absolute right-4 top-4 text-xl hover:text-vermelho"
      >
        <img src="/Entrelinhas-web/sair.png" alt="" class="pixel h-8" />
      </button>

      <div class="mt-16 px-6">
        <ul class="flex flex-col gap-6 text-sm">
          <li><a href="/" class="hover:text-amarelo">Início</a></li>
          <li>
            <a href="/" class="hover:text-amarelo"
              >Recomendações do psicólogo</a
            >
          </li>
          <li><a href="/" class="hover:text-amarelo">Conta</a></li>
          <li>
            <a href="/" class="text-vermelho hover:text-rosa">Sair</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="content flex flex-wrap items-center justify-center"></div>
`,
);

menuBar();
showRegistros();
