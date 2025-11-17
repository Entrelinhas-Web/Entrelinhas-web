import{b as f}from"./bgParticles-DnaNUedT.js";function x(){const t=document.querySelector(".form");t.innerHTML="",t.insertAdjacentHTML("beforeend",`
  <div class="bg-roxo border-lilas border-4 w-[80%] lg:w-[55%] rounded-lg p-6 shadow-md mx-auto">
    <h1 class="mb-6 text-amarelo pb-5 text-center text-xl font-semibold">
      Adicionar desabafo
    </h1>

    <form id="desabafoForm" class="flex flex-col gap-6 w-full">
      <div class="lg:flex gap-6">

        <div class="esquerda flex flex-col lg:w-[30%] gap-12">

          <!-- Título -->
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 p-2 outline-none w-full"
            required
          />

          <!-- Emoção -->
          <select
            name="emocao"
            required
            class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 p-2 outline-none w-full"
          >
            <option value="" disabled selected hidden>Emoção</option>
            <option value="Felicidade" >Felicidade</option>
            <option value="Tristeza">Tristeza</option>
            <option value="Raiva">Raiva</option>
            <option value="Ansiedade">Ansiedade</option>
            <option value="Motivação">Motivação</option>
            <option value="Tranquilidade">Tranquilidade</option>
            <option value="Medo">Medo</option>
          </select>

          <!-- Nível -->
          <div class="flex flex-col gap-2">
            <span class="text-amarelo font-medium">Nível da emoção:</span>
            <input
              type="range"
              id="nivel"
              name="nivel"
              min="1"
              max="5"
              value="3"
              class="accent-amarelo w-full"
              required
            />
            <span id="valorNivel" class="text-center text-sm text-amarelo">3 / 5</span>
          </div>
        </div>

        <!-- Descrição -->
        <div class="dir lg:w-[70%] flex flex-col">
          <textarea
            id="descricao"
            name="descricao"
            rows="10"
            placeholder="Aqui vai seu desabafo..."
            class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa resize-none rounded-md border-2 p-2 outline-none w-full h-full"
            required
          ></textarea>
        </div>

      </div>

      <!-- Botão -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco border-2 py-2 px-8 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas font-semibold"
        >
          Adicionar
        </button>
      </div>
    </form>
  </div>`),t.classList.remove("hidden"),t.classList.add("flex");const a=document.getElementById("nivel"),o=document.getElementById("valorNivel");a.addEventListener("input",()=>{o.textContent=`${a.value} / 5`})}function g(){document.querySelector("#app").insertAdjacentHTML("beforeend",`
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
            <li><a href="/" class="hover:text-amarelo">Recomendações do psicólogo</a></li>
            <li><a href="/" class="hover:text-amarelo">Conta</a></li>
            <li><a href="/" class="text-vermelho hover:text-rosa">Sair</a></li>
        </ul>
        </div>
    </div>
  `)}function h(){const t=document.querySelector(".search");JSON.parse(localStorage.getItem("desabafos")||"[]").length>0&&(t.classList.remove("hidden"),t.classList.add("flex"));const a=t.querySelector("input");a.addEventListener("input",()=>{const o=(a.value||"").trim().toLowerCase(),l=new CustomEvent("state-change",{detail:{searchText:o}});window.dispatchEvent(l)})}const v={Felicidade:{bg:"bg-amarelo",border:"border-amarelo",text:"text-amarelo"},Tristeza:{bg:"bg-azul",border:"border-azul",text:"text-azul"},Raiva:{bg:"bg-vermelho",border:"border-vermelho",text:"text-vermelho"},Ansiedade:{bg:"bg-laranja",border:"border-laranja",text:"text-laranja"},Motivação:{bg:"bg-rosa",border:"border-rosa",text:"text-rosa"},Tranquilidade:{bg:"bg-verde",border:"border-verde",text:"text-verde"},Medo:{bg:"bg-lilas",border:"border-lilas",text:"text-lilas"}},y=t=>{const{bg:e,border:a,text:o}=v[t.emocao];return`<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${a} overflow-hidden cursor-pointer hover:scale-105">
                <div class="lateral ${e} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${o} font-bold">${t.titulo}</h1>
            
                        <p>${t.data}</p>
                    </div>
            
                    <div class="text-sm">
                        ${t.descricao.length>=200?t.descricao.slice(0,200)+"...":t.descricao}
                    </div>
                </div>
            </a>
        </div>`};function w(t,e,a,o){const s=`<img 
                        src="../../public/star.png" 
                        alt="Estrela de intensidade" 
                        class="w-5 h-5"
                    >`.repeat(e.nivel||0);return`
    <div 
        id="${t}" 
        class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
    >
        <div 
            class="bg-preto p-6 rounded-2xl shadow-xl w-full max-w-5xl relative border-2 ${a}"
        >
            
            <div class="absolute top-3 right-4 flex items-center gap-x-3">
                
                <button 
                    title="Editar"
                    class="text-gray-400 hover:opacity-80 transition-opacity edit-popup"
                >
                    <img src="../../public/edit.png" alt="Editar" class="w-5 h-5">
                </button>
                
                <button 
                    title="Remover"
                    class="text-gray-400 hover:opacity-80 transition-opacity remove-popup"
                >
                    <img src="../../public/trash.png" alt="Remover" class="w-5 h-5">
                </button>

                <button 
                    title="Fechar"
                    class="text-gray-400 hover:text-white text-2xl font-bold close-popup"
                >
                    &times;
                </button>
            </div>
            
            <h1 class="${o} font-bold text-2xl mb-2">${e.titulo}</h1>
            
            <div class="flex flex-row gap-x-1 mb-2">
                ${s}
            </div>

            <p class="text-sm text-gray-400 mb-4">${e.data}</p>
            
            <div class="text-base text-white overflow-y-auto max-h-[80vh] px-2 scrollbar-hide">
                <p class="whitespace-pre-wrap">${e.descricao}</p>
            </div>

        </div>
    </div>
    `}function E(t){const{border:e,text:a}=v[t.emocao],o=`modal-${t.id||Date.now()+Math.random()}`;document.body.insertAdjacentHTML("beforeend",w(o,t,e,a));const l=document.getElementById(o),s=l.querySelector(".close-popup"),r=l.querySelector(".edit-popup"),i=l.querySelector(".remove-popup"),m=l.querySelector(".bg-preto");function u(){l.remove()}l.addEventListener("click",u),m.addEventListener("click",d=>{!d.target.closest(".close-popup, .edit-popup, .remove-popup")&&d.stopPropagation()}),s&&s.addEventListener("click",d=>{d.stopPropagation(),u()}),r&&r.addEventListener("click",d=>{d.stopPropagation(),console.log("Editar:",t.id)}),i&&i.addEventListener("click",d=>{d.stopPropagation();let c=JSON.parse(localStorage.getItem("desabafos")||"[]");c=c.filter(b=>b.id!==t.id),localStorage.setItem("desabafos",JSON.stringify(c)),u(),p(c)})}function p(t=null,e=null){const a=document.querySelector(".content");a.innerHTML="";const o=t??JSON.parse(localStorage.getItem("desabafos")||"[]");o.length===0&&a.insertAdjacentHTML("afterbegin",`
        <div class="text-center p-6">
        <p>${e||"Você pode fazer um desabafo agora!"}</p>
        </div>
  `),o.map(l=>{const s=y(l),r=document.createElement("div");r.innerHTML=s.trim();const i=r.firstElementChild;i&&i.addEventListener("click",()=>{E(l)}),a.prepend(i)})}function L(){const t=document.getElementById("desabafoForm"),e=JSON.parse(localStorage.getItem("desabafos")||"[]");t.addEventListener("submit",a=>{a.preventDefault();const o=new Date,l=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0"),r=o.getFullYear(),i={id:e.length>0?e[e.length-1].id+1:1,titulo:t.titulo.value,emocao:t.emocao.value,nivel:t.nivel.value,descricao:t.descricao.value,data:`${l}/${s}/${r}`};e.push(i),localStorage.setItem("desabafos",JSON.stringify(e)),t.reset(),location.reload()})}function S(){const t=document.getElementById("menu-btn"),e=document.getElementById("sidebar"),a=document.getElementById("close-btn");function o(){e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("translate-x-full"),e.classList.add("translate-x-0")},10)}function l(){e.classList.add("translate-x-full"),e.classList.remove("translate-x-0"),setTimeout(()=>{e.classList.add("hidden")},300)}t.addEventListener("click",s=>{s.stopPropagation(),o()}),a.addEventListener("click",l),document.addEventListener("click",s=>{!e.contains(s.target)&&!t.contains(s.target)&&l()})}function T(){document.querySelector("#app").insertAdjacentHTML("beforeend",`
    <div
      id="filter"
      class="bg-roxo border-lilas border-4 rounded-l-lg text-center p-6 shadow-xl fixed bottom-0 right-0 h-full w-85 hidden translate-x-full transform transition-all duration-300 ease-in-out z-50"
    >
        <button
          id="filter-close-btn"
          class="absolute top-2 right-1 cursor-pointer text-vermelho text-4xl"
        >
          &times;
        </button>

        <h1 class="text-xl font-bold pb-4 text-amarelo">Seleção de Filtros</h1>

        <!-- Filtro de Emoções -->
        <div class="emocoes-filter text-left">
            <h2 class="font-semibold mb-2 text-amarelo">Emoções</h2>

            <ul class="flex flex-col gap-2 p-2 pl-4">
                <li><label><input type="checkbox" name="emocao" value="Felicidade"> Felicidade</label></li>
                <li><label><input type="checkbox" name="emocao" value="Tristeza"> Tristeza</label></li>
                <li><label><input type="checkbox" name="emocao" value="Raiva"> Raiva</label></li>
                <li><label><input type="checkbox" name="emocao" value="Ansiedade"> Ansiedade</label></li>
                <li><label><input type="checkbox" name="emocao" value="Motivação"> Motivação</label></li>
                <li><label><input type="checkbox" name="emocao" value="Tranquilidade"> Tranquilidade</label></li>
                <li><label><input type="checkbox" name="emocao" value="Medo"> Medo</label></li>
            </ul>
        </div>

        <!-- Filtro de Datas -->
        <div class="data-filter pt-6 text-left">
            <h2 class="font-semibold mb-2 text-amarelo">Data</h2>

            <div class="flex flex-col gap-4 p-2">
                <div class="flex flex-col">
                    <span class="text-lilas">Data inicial:</span>
                    <input id="date-start" type="date" class="p-2 rounded bg-branco text-preto">
                </div>

                <div class="flex flex-col">
                    <span class="text-lilas">Data final:</span>
                    <input id="date-end" type="date" class="p-2 rounded bg-branco text-preto">
                </div>
            </div>
        </div>

        <div class="flex justify-center pt-6">
            <button
              id="filter-submit"
              class="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco border-2 py-2 px-8 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas font-semibold"
            >
                Filtrar
            </button>
        </div>
    </div>
  `)}function q(){const t=document.querySelector(".emocoes-filter"),e=document.querySelector(".data-filter"),a=[...t.querySelectorAll('input[name="emocao"]:checked')].map(i=>i.value),o=e.querySelector("#date-start").value||null,l=e.querySelector("#date-end").value||null,s={emocoes:a,dateStart:o,dateEnd:l},r=new CustomEvent("state-change",{detail:{filter:s}});window.dispatchEvent(r)}function k(){const t=document.getElementById("filter-btn"),e=document.getElementById("filter"),a=document.getElementById("filter-close-btn"),o=document.getElementById("filter-submit");function l(){e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("translate-x-full"),e.classList.add("translate-x-0")},10)}function s(){e.classList.add("translate-x-full"),e.classList.remove("translate-x-0"),setTimeout(()=>{e.classList.add("hidden")},300)}t.addEventListener("click",r=>{r.stopPropagation(),l()}),a.addEventListener("click",s),o.addEventListener("click",()=>{q(),s()}),document.addEventListener("click",r=>{!e.contains(r.target)&&!t.contains(r.target)&&s()})}const n={searchText:"",filter:{emocoes:[],dateStart:null,dateEnd:null}};function I(){let e=JSON.parse(localStorage.getItem("desabafos")||"[]");n.filter.emocoes&&n.filter.emocoes.length>0&&(e=e.filter(a=>n.filter.emocoes.includes(a.emocao))),(n.filter.dateStart||n.filter.dateEnd)&&(e=e.filter(a=>{const[o,l,s]=a.data.split("/").map(Number),r=new Date(s,l-1,o),i=n.filter.dateStart?(()=>{const[u,d,c]=n.filter.dateStart.split("-").map(Number);return new Date(u,d-1,c)})():null,m=n.filter.dateEnd?(()=>{const[u,d,c]=n.filter.dateEnd.split("-").map(Number);return new Date(u,d-1,c)})():null;return(!i||r>=i)&&(!m||r<=m)})),n.searchText&&n.searchText.trim()!==""&&(e=e.filter(a=>a.titulo.toLowerCase().includes(n.searchText.toLowerCase().trim())||a.descricao.toLowerCase().includes(n.searchText.toLowerCase().trim()))),p(e,"Nenhum desabafo encontrado.")}window.addEventListener("state-change",t=>{Object.assign(n,{...n,...t.detail}),I()});document.addEventListener("DOMContentLoaded",()=>{f(),x(),p(),L()});h();g();S();T();k();
