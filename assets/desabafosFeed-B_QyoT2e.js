import{b as d}from"./bgParticles-BdBqC67m.js";function i(){const e=document.querySelector(".form");e.innerHTML="",e.insertAdjacentHTML("beforeend",`
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
  </div>`),e.classList.remove("hidden"),e.classList.add("flex");const t=document.getElementById("nivel"),o=document.getElementById("valorNivel");t.addEventListener("input",()=>{o.textContent=`${t.value} / 5`})}const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADqUlEQVR4nO3cwW0bQRAAQdlQIE5B+QehFJSJ/TJg3MOfFTA77KoESHC4zX1w7u0NAAAAAAAAAAAAAAAAAAAAuM2P6Tfw9fHxe/L1f31+jn8GzKl//35OvjgwSwAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAg7H36DUw73Qef3ueum97n384NAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMLW77Jv3wevP0/A/Ga5AUCYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAEDY6l3m72Af/YzPbzc3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAhL70J/h+378NvV9/lPuQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmF3qYfXnCdjnn+UGAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGF2sS9QfCaA5wDcwRAuUgiBg38Xw7jQK4bAwb+ToVzsFULg4N/NcBbYGAIHfwdDWmRDCBz8XQxroRtD4ODvZGhL3RQBh38vfwSCMOVe6KZf/7/cAnYytEVuPPhPQrCLYS2w4eA/CcEOhnSxjQf/SQjuZjgXeoWD/yQEdzKUi7ziwX8SgrsYxgUKB/9JCO5gCMOKh/9fQjDLH4EgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgzC72ofo+/zTPEzjjBgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBh+V3q7fv80/vwPr/d3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgbP0utH303cxvlhsAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhI3vMtsH54Tvzxk3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAh7n34D06b3sTlzOr/tzxM45QYAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QfaQomMwcntkAAAAABJRU5ErkJggg==";function c(){const e=document.querySelector("#app"),A=`
    <div id="sidebar" class="bg-preto text-branco border-l-2 border-branco/80 fixed top-0 right-0 z-50 hidden h-full w-64 translate-x-full transform shadow-xl transition-all duration-300 ease-in-out">
        <button
        id="close-btn"
        class="hover:text-vermelho absolute top-6 right-6 cursor-pointer text-xl"
        >
        <img src="${g}" alt="sair" class="pixel h-8" />
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
  `;e.insertAdjacentHTML("beforeend",A)}const u={Felicidade:{bg:"bg-amarelo",border:"border-amarelo",text:"text-amarelo"},Tristeza:{bg:"bg-azul",border:"border-azul",text:"text-azul"},Raiva:{bg:"bg-vermelho",border:"border-vermelho",text:"text-vermelho"},Ansiedade:{bg:"bg-laranja",border:"border-laranja",text:"text-laranja"},Motivação:{bg:"bg-rosa",border:"border-rosa",text:"text-rosa"},Tranquilidade:{bg:"bg-verde",border:"border-verde",text:"text-verde"},Medo:{bg:"bg-lilas",border:"border-lilas",text:"text-lilas"}},m=e=>{const{bg:A,border:t,text:o}=u[e.emocao];return`<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${t} overflow-hidden cursor-pointer hover:scale-105" href="/">
                <div class="lateral ${A} w-3"></div>
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
        </div>`};function l(){const e=document.querySelector(".content");e.innerHTML="";const A=JSON.parse(localStorage.getItem("desabafos")||"[]");A.length>0?A.map(t=>e.insertAdjacentHTML("afterbegin",m(t))):e.insertAdjacentHTML("afterbegin",`<div class="text-center p-6">
      <p>Você pode fazer um desabafo agora!</p>  
    </div>`)}function v(){const e=document.getElementById("desabafoForm"),A=JSON.parse(localStorage.getItem("desabafos")||"[]");e.addEventListener("submit",t=>{t.preventDefault();const o=new Date,r=String(o.getDate()).padStart(2,"0"),a=String(o.getMonth()+1).padStart(2,"0"),s=o.getFullYear(),n={id:A.length>0?A[A.length-1].id+1:1,titulo:e.titulo.value,emocao:e.emocao.value,nivel:e.nivel.value,descricao:e.descricao.value,data:`${r}/${a}/${s}`};A.push(n),localStorage.setItem("desabafos",JSON.stringify(A)),e.reset(),l()})}function b(){const e=document.getElementById("menu-btn"),A=document.getElementById("sidebar"),t=document.getElementById("close-btn");function o(){A.classList.remove("hidden"),setTimeout(()=>{A.classList.remove("translate-x-full"),A.classList.add("translate-x-0")},10)}function r(){A.classList.add("translate-x-full"),A.classList.remove("translate-x-0"),setTimeout(()=>{A.classList.add("hidden")},300)}e.addEventListener("click",a=>{a.stopPropagation(),o()}),t.addEventListener("click",r),document.addEventListener("click",a=>{!A.contains(a.target)&&!e.contains(a.target)&&r()})}document.addEventListener("DOMContentLoaded",()=>{d(),c(),b(),i(),l(),v()});
