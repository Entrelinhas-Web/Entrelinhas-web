import{b as c}from"./bgParticles-C_n2clo5.js";function g(){const e=document.querySelector(".form");e.innerHTML="",e.insertAdjacentHTML("beforeend",`
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
  </div>`),e.classList.remove("hidden"),e.classList.add("flex");const A=document.getElementById("nivel"),a=document.getElementById("valorNivel");A.addEventListener("input",()=>{a.textContent=`${A.value} / 5`})}const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADqUlEQVR4nO3cwW0bQRAAQdlQIE5B+QehFJSJ/TJg3MOfFTA77KoESHC4zX1w7u0NAAAAAAAAAAAAAAAAAAAAuM2P6Tfw9fHxe/L1f31+jn8GzKl//35OvjgwSwAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAg7H36DUw73Qef3ueum97n384NAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMLW77Jv3wevP0/A/Ga5AUCYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAEDY6l3m72Af/YzPbzc3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAhL70J/h+378NvV9/lPuQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmF3qYfXnCdjnn+UGAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGF2sS9QfCaA5wDcwRAuUgiBg38Xw7jQK4bAwb+ToVzsFULg4N/NcBbYGAIHfwdDWmRDCBz8XQxroRtD4ODvZGhL3RQBh38vfwSCMOVe6KZf/7/cAnYytEVuPPhPQrCLYS2w4eA/CcEOhnSxjQf/SQjuZjgXeoWD/yQEdzKUi7ziwX8SgrsYxgUKB/9JCO5gCMOKh/9fQjDLH4EgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgzC72ofo+/zTPEzjjBgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBh+V3q7fv80/vwPr/d3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgbP0utH303cxvlhsAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhI3vMtsH54Tvzxk3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAh7n34D06b3sTlzOr/tzxM45QYAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QfaQomMwcntkAAAAABJRU5ErkJggg==";function m(){const e=document.querySelector("#app"),t=`
    <div id="sidebar" class="bg-preto text-branco border-l-2 border-branco/80 fixed top-0 right-0 z-50 hidden h-full w-64 translate-x-full transform shadow-xl transition-all duration-300 ease-in-out">
        <button
        id="close-btn"
        class="hover:text-vermelho absolute top-6 right-6 cursor-pointer text-xl"
        >
        <img src="${u}" alt="sair" class="pixel h-8" />
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
  `;e.insertAdjacentHTML("beforeend",t)}const n={Felicidade:{bg:"bg-amarelo",border:"border-amarelo",text:"text-amarelo"},Tristeza:{bg:"bg-azul",border:"border-azul",text:"text-azul"},Raiva:{bg:"bg-vermelho",border:"border-vermelho",text:"text-vermelho"},Ansiedade:{bg:"bg-laranja",border:"border-laranja",text:"text-laranja"},Motivação:{bg:"bg-rosa",border:"border-rosa",text:"text-rosa"},Tranquilidade:{bg:"bg-verde",border:"border-verde",text:"text-verde"},Medo:{bg:"bg-lilas",border:"border-lilas",text:"text-lilas"}},p=e=>{const{bg:t,border:A,text:a}=n[e.emocao];return`<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${A} overflow-hidden cursor-pointer hover:scale-105">
                <div class="lateral ${t} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${a} font-bold">${e.titulo}</h1>
            
                        <p>${e.data}</p>
                    </div>
            
                    <div class="text-sm">
                        ${e.descricao.length>=200?e.descricao.slice(0,200)+"...":e.descricao}
                    </div>
                </div>
            </a>
        </div>`},v=(e,t,A,a)=>{const o=`<img 
                        src="../../public/star.png" 
                        alt="Estrela de intensidade" 
                        class="w-5 h-5"
                    >`.repeat(t.nivel||0);return`
    <div 
        id="${e}" 
        class="hidden fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
    >
        <div 
            class="bg-preto p-6 rounded-2xl shadow-xl w-full max-w-5xl relative border-2 ${A}"
        >
            
            <div class="absolute top-3 right-4 flex items-center gap-x-3">
                
                <button 
                    title="Editar"
                    class="text-gray-400 hover:opacity-80 transition-opacity js-edit-popup"
                >
                    <img src="../../public/edit.png" alt="Editar" class="w-5 h-5">
                </button>
                
                <button 
                    title="Remover"
                    class="text-gray-400 hover:opacity-80 transition-opacity js-remove-popup"
                >
                    <img src="../../public/remove.png" alt="Remover" class="w-5 h-5">
                </button>

                <button 
                    title="Fechar"
                    class="text-gray-400 hover:text-white text-2xl font-bold js-close-popup"
                >
                    &times;
                </button>
            </div>
            
            <h1 class="${a} font-bold text-2xl mb-2">${t.titulo}</h1>
            
            <div class="flex flex-row gap-x-1 mb-2">
                ${o}
            </div>

            <p class="text-sm text-gray-400 mb-4">${t.data}</p>
            
            <div class="text-base text-white overflow-y-auto max-h-[80vh] px-2 scrollbar-hide">
                <p class="whitespace-pre-wrap">${t.descricao}</p>
            </div>

        </div>
    </div>
    `},b=e=>{const{border:t,text:A}=n[e.emocao],a=`modal-${e.id||Date.now()+Math.random()}`,s=v(a,e,t,A);document.body.insertAdjacentHTML("beforeend",s);const o=document.getElementById(a);o.querySelector(".js-close-popup"),o.querySelector(".js-edit-popup"),o.querySelector(".js-remove-popup");const r=o.querySelector(".bg-preto"),l=()=>{o.classList.add("hidden"),o.remove()};o.addEventListener("click",l),r.addEventListener("click",d=>d.stopPropagation()),o.classList.remove("hidden")};function i(e=null){const t=document.querySelector(".content");t.innerHTML="";const A=e??JSON.parse(localStorage.getItem("desabafos")||"[]");A.length===0&&t.insertAdjacentHTML("afterbegin",`
        <div class="text-center p-6">
        <p>Você pode fazer um desabafo agora!</p>
        </div>
  `),A.map(a=>{const s=p(a),o=document.createElement("div");o.innerHTML=s.trim();const r=o.firstElementChild;r&&r.addEventListener("click",()=>{b(a)}),t.prepend(r)})}function h(){const e=document.querySelector(".search");JSON.parse(localStorage.getItem("desabafos")||"[]").length>0&&(e.classList.remove("hidden"),e.classList.add("flex"));const A=e.querySelector("input");A.addEventListener("input",()=>{const a=(A.value||"").trim().toLowerCase(),s=new CustomEvent("search-desabafo",{detail:{texto:a}});window.dispatchEvent(s)})}window.addEventListener("search-desabafo",e=>{const t=(e?.detail?.texto||"").toLowerCase(),a=JSON.parse(localStorage.getItem("desabafos")||"[]").filter(s=>{const o=(s.titulo||"").toLowerCase(),r=(s.descricao||"").toLowerCase();return o.includes(t)||r.includes(t)});i(a)});function f(){const e=document.getElementById("desabafoForm"),t=JSON.parse(localStorage.getItem("desabafos")||"[]");e.addEventListener("submit",A=>{A.preventDefault();const a=new Date,s=String(a.getDate()).padStart(2,"0"),o=String(a.getMonth()+1).padStart(2,"0"),r=a.getFullYear(),l={id:t.length>0?t[t.length-1].id+1:1,titulo:e.titulo.value,emocao:e.emocao.value,nivel:e.nivel.value,descricao:e.descricao.value,data:`${s}/${o}/${r}`};t.push(l),localStorage.setItem("desabafos",JSON.stringify(t)),e.reset(),location.reload()})}function x(){const e=document.getElementById("menu-btn"),t=document.getElementById("sidebar"),A=document.getElementById("close-btn");function a(){t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("translate-x-full"),t.classList.add("translate-x-0")},10)}function s(){t.classList.add("translate-x-full"),t.classList.remove("translate-x-0"),setTimeout(()=>{t.classList.add("hidden")},300)}e.addEventListener("click",o=>{o.stopPropagation(),a()}),A.addEventListener("click",s),document.addEventListener("click",o=>{!t.contains(o.target)&&!e.contains(o.target)&&s()})}document.addEventListener("DOMContentLoaded",()=>{h(),c(),m(),x(),g(),i(),f()});
