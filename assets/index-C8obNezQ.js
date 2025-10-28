(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();function n(){const t=document.getElementById("menu-btn"),o=document.getElementById("sidebar"),i=document.getElementById("close-btn");function s(){o.classList.remove("hidden"),setTimeout(()=>{o.classList.remove("-translate-x-full"),o.classList.add("translate-x-0")},10)}function e(){o.classList.add("-translate-x-full"),o.classList.remove("translate-x-0"),setTimeout(()=>{o.classList.add("hidden")},300)}t.addEventListener("click",a=>{a.stopPropagation(),s()}),i.addEventListener("click",e),document.addEventListener("click",a=>{!o.contains(a.target)&&!t.contains(a.target)&&e()})}const c=[{emocao:"Felicidade",nivel:5,causa:"Formatura",descricao:"Hoje pude finalmente me formar no curso dos meus sonhos, e ainda fui laureado! A partir de hoje, minha vida mudará completamente.",data:"12/10/2025"},{emocao:"Tristeza",nivel:3,causa:"Saudade",descricao:"Senti muita falta dos meus amigos da faculdade hoje. É estranho pensar que cada um seguirá seu caminho.",data:"14/10/2025"},{emocao:"Ansiedade",nivel:4,causa:"Entrevista de emprego",descricao:"Tenho uma entrevista amanhã em uma empresa que sempre admirei. Estou nervoso, mas esperançoso.",data:"15/10/2025"},{emocao:"Felicidade",nivel:5,causa:"Projeto concluído",descricao:"Consegui finalizar o projeto antes do prazo e o cliente adorou o resultado! Foi muito gratificante.",data:"17/10/2025"},{emocao:"Raiva",nivel:2,causa:"Trânsito",descricao:"O trânsito hoje estava insuportável e acabei me atrasando para uma reunião importante.",data:"18/10/2025"},{emocao:"Felicidade",nivel:5,causa:"Amizade",descricao:"Um amigo me ajudou em um momento difícil, e percebi o quanto sou sortudo por ter pessoas assim por perto.",data:"19/10/2025"},{emocao:"Felicidade",nivel:4,causa:"Presente inesperado",descricao:"Recebi um presente lindo de um colega de trabalho, sem motivo aparente. Fiquei realmente tocado.",data:"20/10/2025"},{emocao:"Medo",nivel:3,causa:"resultado médico",descricao:"Fiquei apreensivo aguardando o resultado de um exame importante. Felizmente, deu tudo certo no fim.",data:"21/10/2025"},{emocao:"Tranquilidade",nivel:4,causa:"Dia na natureza",descricao:"Passei o dia em um parque, lendo e respirando ar puro. Senti uma paz enorme.",data:"22/10/2025"},{emocao:"Motivação",nivel:5,causa:"nova meta pessoal",descricao:"Decidi começar a aprender uma nova língua. Estou empolgado com o desafio e com as possibilidades que virão.",data:"23/10/2025"}];function d(){const t=document.querySelector(".content");c.map(o=>t.insertAdjacentHTML("beforeend",`
        <div class="nuvem">
            <div class="nuvem-texto">${o.descricao}</div>
        </div>
        `))}const l=document.getElementById("app");l.insertAdjacentHTML("beforeend",`
    <body>
    <div class="header flex items-center p-4">
      <div class="flex w-full justify-between">
        <button id="menu-btn" class="cursor-pointer">
          <img src="./public/menu.png" alt="menu" class="pixel h-5" />
        </button>

        <div class="flex items-center gap-3">
          <img src="./public/logo.png" alt="" class="pixel h-8" />
          <h1 class="text-sm">Entrelinhas</h1>
        </div>

        <img src="./public/pontinhos.png" alt="" class="pixel h-8" />
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
        ❌
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
`);n();d();
