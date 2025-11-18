import{b}from"./bgParticles-Cp8vO3Rx.js";import{e as v,m as x,a as g}from"./menuBar-BdiGnDjp.js";function h(){const e=document.querySelector(".form");e.innerHTML="",e.insertAdjacentHTML("beforeend",`
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
  </div>`),e.classList.remove("hidden"),e.classList.add("flex");const a=document.getElementById("nivel"),o=document.getElementById("valorNivel");a.addEventListener("input",()=>{o.textContent=`${a.value} / 5`})}function y(){const e=document.querySelector(".search");JSON.parse(localStorage.getItem("desabafos")||"[]").length>0&&(e.classList.remove("hidden"),e.classList.add("flex"));const a=e.querySelector("input");a.addEventListener("input",()=>{const o=(a.value||"").trim().toLowerCase(),l=new CustomEvent("state-change",{detail:{searchText:o}});window.dispatchEvent(l)})}const w=e=>{const{bg:t,border:a,text:o}=v[e.emocao];return`<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${a} overflow-hidden cursor-pointer hover:scale-105">
                <div class="lateral ${t} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${o} font-bold">${e.titulo}</h1>
            
                        <p>${e.data}</p>
                    </div>
            
                    <div class="text-sm">
                        ${e.descricao.length>=200?e.descricao.slice(0,200)+"...":e.descricao}
                    </div>
                </div>
            </a>
        </div>`};function E(e,t,a,o){const n=`<img 
                        src="/Entrelinhas-web/star.png" 
                        alt="Estrela de intensidade" 
                        class="w-5 h-5"
                    >`.repeat(t.nivel||0);return`
    <div 
        id="${e}" 
        class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
    >
        <div 
            class="bg-preto p-6 rounded-2xl shadow-xl w-full max-w-5xl relative border-2 ${a}"
        >
            
            <div class="absolute top-3 right-4 flex items-center gap-3 text-center">
                
                <button 
                    title="Editar"
                    class="text-gray-400 hover:opacity-80 transition-opacity edit-popup"
                >
                    <img src="/Entrelinhas-web//edit.png" alt="Editar" class="w-5 h-5">
                </button>
                
                <button 
                    title="Remover"
                    class="text-gray-400 hover:opacity-80 transition-opacity remove-popup"
                >
                    <img src="/Entrelinhas-web/trash.png" alt="Remover" class="w-5 h-5">
                </button>

                <button 
                    title="Fechar"
                    class="text-gray-400 hover:text-white text-2xl font-bold close-popup pt-1"
                >
                    &times;
                </button>
            </div>
            
            <h1 class="${o} font-bold text-2xl mb-2">${t.titulo}</h1>
            
            <div class="flex flex-row gap-x-1 mb-2">
                ${n}
            </div>

            <p class="text-sm text-gray-400 mb-4">${t.data}</p>
            
            <div class="text-base text-white overflow-y-auto max-h-[80vh] px-2 scrollbar-hide">
                <p class="whitespace-pre-wrap">${t.descricao}</p>
            </div>

        </div>
    </div>
    `}function S(e){const{border:t,text:a}=v[e.emocao],o=`modal-${e.id||Date.now()+Math.random()}`;document.body.insertAdjacentHTML("beforeend",E(o,e,t,a));const l=document.getElementById(o),n=l.querySelector(".close-popup"),s=l.querySelector(".edit-popup"),r=l.querySelector(".remove-popup"),p=l.querySelector(".bg-preto");function u(){l.remove()}l.addEventListener("click",u),p.addEventListener("click",d=>{!d.target.closest(".close-popup, .edit-popup, .remove-popup")&&d.stopPropagation()}),n&&n.addEventListener("click",d=>{d.stopPropagation(),u()}),s&&s.addEventListener("click",d=>{d.stopPropagation(),console.log("Editar:",e.id)}),r&&r.addEventListener("click",d=>{d.stopPropagation();let c=JSON.parse(localStorage.getItem("desabafos")||"[]");c=c.filter(f=>f.id!==e.id),localStorage.setItem("desabafos",JSON.stringify(c)),u(),m(c)})}function m(e=null,t=null){const a=document.querySelector(".content");a.innerHTML="";const o=e??JSON.parse(localStorage.getItem("desabafos")||"[]");o.length===0&&a.insertAdjacentHTML("afterbegin",`
        <div class="text-center p-6">
        <p>${t||"Você pode fazer um desabafo agora!"}</p>
        </div>
  `),o.map(l=>{const n=w(l),s=document.createElement("div");s.innerHTML=n.trim();const r=s.firstElementChild;r&&r.addEventListener("click",()=>{S(l)}),a.prepend(r)})}function L(){const e=document.getElementById("desabafoForm"),t=JSON.parse(localStorage.getItem("desabafos")||"[]");e.addEventListener("submit",a=>{a.preventDefault();const o=new Date,l=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),s=o.getFullYear(),r={id:t.length>0?t[t.length-1].id+1:1,titulo:e.titulo.value,emocao:e.emocao.value,nivel:e.nivel.value,descricao:e.descricao.value,data:`${l}/${n}/${s}`};t.push(r),localStorage.setItem("desabafos",JSON.stringify(t)),e.reset(),location.reload()})}function T(){document.querySelector("#app").insertAdjacentHTML("beforeend",`
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
  `)}function q(){const e=document.querySelector(".emocoes-filter"),t=document.querySelector(".data-filter"),a=[...e.querySelectorAll('input[name="emocao"]:checked')].map(r=>r.value),o=t.querySelector("#date-start").value||null,l=t.querySelector("#date-end").value||null,n={emocoes:a,dateStart:o,dateEnd:l},s=new CustomEvent("state-change",{detail:{filter:n}});window.dispatchEvent(s)}function k(){const e=document.getElementById("filter-btn"),t=document.getElementById("filter"),a=document.getElementById("filter-close-btn"),o=document.getElementById("filter-submit");function l(){t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("translate-x-full"),t.classList.add("translate-x-0")},10)}function n(){t.classList.add("translate-x-full"),t.classList.remove("translate-x-0"),setTimeout(()=>{t.classList.add("hidden")},300)}e.addEventListener("click",s=>{s.stopPropagation(),l()}),a.addEventListener("click",n),o.addEventListener("click",()=>{q(),n()}),document.addEventListener("click",s=>{!t.contains(s.target)&&!e.contains(s.target)&&n()})}const i={searchText:"",filter:{emocoes:[],dateStart:null,dateEnd:null}};function I(){let t=JSON.parse(localStorage.getItem("desabafos")||"[]");i.filter.emocoes&&i.filter.emocoes.length>0&&(t=t.filter(a=>i.filter.emocoes.includes(a.emocao))),(i.filter.dateStart||i.filter.dateEnd)&&(t=t.filter(a=>{const[o,l,n]=a.data.split("/").map(Number),s=new Date(n,l-1,o),r=i.filter.dateStart?(()=>{const[u,d,c]=i.filter.dateStart.split("-").map(Number);return new Date(u,d-1,c)})():null,p=i.filter.dateEnd?(()=>{const[u,d,c]=i.filter.dateEnd.split("-").map(Number);return new Date(u,d-1,c)})():null;return(!r||s>=r)&&(!p||s<=p)})),i.searchText&&i.searchText.trim()!==""&&(t=t.filter(a=>a.titulo.toLowerCase().includes(i.searchText.toLowerCase().trim())||a.descricao.toLowerCase().includes(i.searchText.toLowerCase().trim()))),m(t,"Nenhum desabafo encontrado.")}window.addEventListener("state-change",e=>{Object.assign(i,{...i,...e.detail}),I()});document.addEventListener("DOMContentLoaded",()=>{b(),h(),m(),L()});y();x();g();T();k();
