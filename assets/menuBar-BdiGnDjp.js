function l(){document.querySelector("#app").insertAdjacentHTML("beforeend",`
    <div id="sidebar" class="bg-preto text-branco border-l-2 border-branco/80 fixed top-0 right-0 z-50 hidden h-full w-64 translate-x-full transform shadow-xl transition-all duration-300 ease-in-out">
        <button
        id="close-btn"
        class="text-vermelho absolute top-6 right-6 cursor-pointer text-4xl"
        >
          &times;
        </button>

        <div class="px-6 pt-8">
        <ul class="flex flex-col gap-6 text-sm leading-relaxed">
            <li><a href="../../" class="hover:text-amarelo">Início</a></li>
            <li><a href="/Entrelinhas-web/src/pages/desabafosFeed.html" class="hover:text-amarelo">Desabafos</a></li>
            <li><a href="/Entrelinhas-web/src/pages/dashboard.html" class="hover:text-amarelo">Dashboard</a></li>
            <li><a href="/" class="hover:text-amarelo">Recomendações do psicólogo</a></li>
            <li><a href="/" class="hover:text-amarelo">Conta</a></li>
            <li><a href="/" class="text-vermelho hover:text-rosa">Sair</a></li>
        </ul>
        </div>
    </div>
  `)}const n={Felicidade:{bg:"bg-amarelo",border:"border-amarelo",text:"text-amarelo"},Tristeza:{bg:"bg-azul",border:"border-azul",text:"text-azul"},Raiva:{bg:"bg-vermelho",border:"border-vermelho",text:"text-vermelho"},Ansiedade:{bg:"bg-laranja",border:"border-laranja",text:"text-laranja"},Motivação:{bg:"bg-rosa",border:"border-rosa",text:"text-rosa"},Tranquilidade:{bg:"bg-verde",border:"border-verde",text:"text-verde"},Medo:{bg:"bg-lilas",border:"border-lilas",text:"text-lilas"}};function d(){const a=document.getElementById("menu-btn"),e=document.getElementById("sidebar"),o=document.getElementById("close-btn");function s(){e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("translate-x-full"),e.classList.add("translate-x-0")},10)}function r(){e.classList.add("translate-x-full"),e.classList.remove("translate-x-0"),setTimeout(()=>{e.classList.add("hidden")},300)}a.addEventListener("click",t=>{t.stopPropagation(),s()}),o.addEventListener("click",r),document.addEventListener("click",t=>{!e.contains(t.target)&&!a.contains(t.target)&&r()})}export{d as a,n as e,l as m};
