import{b as d}from"./bgParticles-Bh5POvDz.js";function l(){const e=document.querySelector(".form");e.innerHTML="",e.insertAdjacentHTML("beforeend",`
        <div class="bg-rosa m-4 w-full max-w-md rounded-lg p-6 shadow-md">
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Adicionar desabafo
          </h2>

          <form id="desabafoForm" class="flex flex-col gap-4">
            <!-- Título -->
            <label for="titulo" class="flex flex-col gap-1">
              <span>Título:</span>
              <input
                type="text"
                id="titulo"
                name="titulo"
                class="focus:border-rosa focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
                required
              />
            </label>

            <!-- Emoção -->
            <label for="emocao" class="flex flex-col gap-1">
              <span>Emoção:</span>
              <select
                id="emocao"
                name="emocao"
                required
                class="bg-rosa focus:border-rosa focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
              >
                <option value="">Selecione</option>
                <option value="Felicidade">Felicidade</option>
                <option value="Tristeza">Tristeza</option>
                <option value="Raiva">Raiva</option>
                <option value="Ansiedade">Ansiedade</option>
                <option value="Motivação">Motivação</option>
                <option value="Tranquilidade">Tranquilidade</option>
                <option value="Medo">Medo</option>
              </select>
            </label>

            <!-- Nível -->
            <label for="nivel" class="flex flex-col gap-1">
              <span>Nível da emoção:</span>
              <input
                type="range"
                id="nivel"
                name="nivel"
                min="1"
                max="5"
                value="3"
                class="accent-rosa w-full"
                required
              />
              <span id="valorNivel" class="text-center text-sm text-gray-600"
                >3 / 5</span
              >
            </label>

            <!-- Causa -->
            <label for="causa" class="flex flex-col gap-1">
              <span>Causa:</span>
              <input
                type="text"
                id="causa"
                name="causa"
                class="focus:border-rosa focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
                required
              />
            </label>

            <!-- Descrição -->
            <label for="descricao" class="flex flex-col gap-1">
              <span>Descrição:</span>
              <textarea
                id="descricao"
                name="descricao"
                rows="4"
                class="focus:border-rosa focus:ring-rosa resize-none rounded-md border-2 border-gray-300 p-2 outline-none"
                required
              ></textarea>
            </label>

            <!-- Botão -->
            <button
              type="submit"
              class="bg-rosa hover:bg-rosa/80 rounded-md py-2 font-semibold text-white transition-colors"
            >
              Enviar desabafo
            </button>
          </form>
        </div>
      `),e.classList.remove("hidden"),e.classList.add("flex");const o=document.getElementById("nivel"),t=document.getElementById("valorNivel");o.addEventListener("input",()=>{t.textContent=`${o.value} / 5`})}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADqUlEQVR4nO3cwW0bQRAAQdlQIE5B+QehFJSJ/TJg3MOfFTA77KoESHC4zX1w7u0NAAAAAAAAAAAAAAAAAAAAuM2P6Tfw9fHxe/L1f31+jn8GzKl//35OvjgwSwAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAg7H36DUw73Qef3ueum97n384NAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMLW77Jv3wevP0/A/Ga5AUCYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAEDY6l3m72Af/YzPbzc3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAhL70J/h+378NvV9/lPuQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmF3qYfXnCdjnn+UGAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGECAGF2sS9QfCaA5wDcwRAuUgiBg38Xw7jQK4bAwb+ToVzsFULg4N/NcBbYGAIHfwdDWmRDCBz8XQxroRtD4ODvZGhL3RQBh38vfwSCMOVe6KZf/7/cAnYytEVuPPhPQrCLYS2w4eA/CcEOhnSxjQf/SQjuZjgXeoWD/yQEdzKUi7ziwX8SgrsYxgUKB/9JCO5gCMOKh/9fQjDLH4EgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgzC72ofo+/zTPEzjjBgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBh+V3q7fv80/vwPr/d3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgbP0utH303cxvlhsAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhI3vMtsH54Tvzxk3AAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAh7n34D06b3sTlzOr/tzxM45QYAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QfaQomMwcntkAAAAABJRU5ErkJggg==";function u(){const e=document.querySelector("#app"),a=`
    <div id="sidebar" class="bg-preto text-branco border-l-2 border-branco/80 fixed top-0 right-0 z-50 hidden h-full w-64 translate-x-full transform shadow-xl transition-all duration-300 ease-in-out">
        <button
        id="close-btn"
        class="hover:text-vermelho absolute top-6 right-6 cursor-pointer text-xl"
        >
        <img src="${c}" alt="sair" class="pixel h-8" />
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
  `;e.insertAdjacentHTML("beforeend",a)}const r=[{id:1,titulo:"FINALMENTE FORMADO!!",emocao:"Felicidade",nivel:5,causa:"Formatura",descricao:"Hoje pude finalmente me formar no curso dos meus sonhos, e ainda fui laureado! A partir de hoje, minha vida mudará completamente.",data:"12/10/2025"},{id:2,titulo:"Saudades machuca, né?",emocao:"Tristeza",nivel:3,causa:"Saudade",descricao:"Senti muita falta dos meus amigos da faculdade hoje. É estranho pensar que cada um seguiu seu caminho, rumos tão distantes que nem nos encontramos mais...",data:"14/10/2025"},{id:3,titulo:"Não sei se vou conseguir...",emocao:"Ansiedade",nivel:4,causa:"Entrevista de emprego",descricao:"Tenho uma entrevista amanhã em uma empresa que sempre admirei. Estou nervoso, mas esperançoso.",data:"15/10/2025"},{id:4,titulo:"Conclui mais 1 projeto!",emocao:"Felicidade",nivel:5,causa:"Projeto concluído",descricao:"Consegui finalizar o projeto antes do prazo e o cliente adorou o resultado! Foi muito gratificante.",data:"17/10/2025"},{id:5,titulo:"NINGUÉM SABE DIRIGIR NESSA CIDADE",emocao:"Raiva",nivel:2,causa:"Trânsito",descricao:"O trânsito hoje estava insuportável e acabei me atrasando para uma reunião MUITO importante! Como essas pessoas passam na prova da CNH? O Detran já foi mais sério nessas avaliações...",data:"18/10/2025"},{id:6,titulo:"Saudades machuca, né?",emocao:"Felicidade",nivel:5,causa:"Amizade",descricao:"Hoje eu tava passando por um situação muito difícil... Não era nada demais, mas me abalou muito. Contudo, graças ao Henrique (meu melhor amigo), que me ajudou a entender a situação melhor e a levar com mais leveza, percebi o quanto sou sortudo por ter pessoas assim por perto e aqueles sentimentos ruins foram embora!",data:"19/10/2025"},{id:7,titulo:"QUE PRESENTE FOD4!",emocao:"Felicidade",nivel:4,causa:"Presente inesperado",descricao:"Recebi um presente LINDO de um colega de trabalho, sem motivo aparente. Fiquei genuinamente feliz!",data:"20/10/2025"},{id:8,titulo:"Será que vai dar tudo certo?",emocao:"Medo",nivel:3,causa:"Resultado médico",descricao:"Tive que essa consulta no último mês, sabe. Eu não tava dando muita bola pra isso, era pra ser só um exame de rotina, um mero check-up, mas com a chegada dos exames amanhã... Sempre me bate um medo do que pode aparecer.",data:"21/10/2025"},{id:9,titulo:"Ás vezes, sair de casa é até bom...",emocao:"Tranquilidade",nivel:4,causa:"Dia na natureza",descricao:"Passei o dia em um parque, lendo e respirando ar puro. Foi uma paz tão grande... Apenas eu e o barulho dos passáros contra meu cansaço semanal. Será que devo fazer isso mais vezes?",data:"02/11/2025"},{id:10,titulo:"Gonna be a polyglot!",emocao:"Motivação",nivel:5,causa:"Meta pessoal",descricao:"Decidi começar a aprender uma nova língua! To super empolgado e com certeza o inglês não vai ser tão difícil assim... Que venham as novas possibilidades!",data:"03/11/2025"}],m={Felicidade:{bg:"bg-amarelo",border:"border-amarelo",text:"text-amarelo"},Tristeza:{bg:"bg-azul",border:"border-azul",text:"text-azul"},Raiva:{bg:"bg-vermelho",border:"border-vermelho",text:"text-vermelho"},Ansiedade:{bg:"bg-laranja",border:"border-laranja",text:"text-laranja"},Motivação:{bg:"bg-rosa",border:"border-rosa",text:"text-rosa"},Tranquilidade:{bg:"bg-verde",border:"border-verde",text:"text-verde"},Medo:{bg:"bg-lilas",border:"border-lilas",text:"text-lilas"}},g=e=>{const{bg:a,border:o,text:t}=m[e.emocao];return`<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${o} overflow-hidden cursor-pointer hover:scale-105" href="/">
                <div class="lateral ${a} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${t} font-bold">${e.titulo}</h1>
            
                        <p>${e.data}</p>
                    </div>
            
                    <div class="text-sm">
                        ${e.descricao.length>=200?e.descricao.slice(0,200)+"...":e.descricao}
                    </div>
                </div>
            </a>
        </div>`};function i(){const e=document.querySelector(".content");e.innerHTML="",r.map(a=>e.insertAdjacentHTML("afterbegin",g(a)))}function v(){const e=document.getElementById("desabafoForm");e.addEventListener("submit",a=>{a.preventDefault();const o=new Date,t=String(o.getDate()).padStart(2,"0"),A=String(o.getMonth()+1).padStart(2,"0"),s=o.getFullYear(),n={id:r[r.length-1].id+1,titulo:e.titulo.value,emocao:e.emocao.value,nivel:e.nivel.value,causa:e.causa.value,descricao:e.descricao.value,data:`${t}/${A}/${s}`};r.push(n),e.reset(),i()})}function p(){const e=document.getElementById("menu-btn"),a=document.getElementById("sidebar"),o=document.getElementById("close-btn");function t(){a.classList.remove("hidden"),setTimeout(()=>{a.classList.remove("translate-x-full"),a.classList.add("translate-x-0")},10)}function A(){a.classList.add("translate-x-full"),a.classList.remove("translate-x-0"),setTimeout(()=>{a.classList.add("hidden")},300)}e.addEventListener("click",s=>{s.stopPropagation(),t()}),o.addEventListener("click",A),document.addEventListener("click",s=>{!a.contains(s.target)&&!e.contains(s.target)&&A()})}document.addEventListener("DOMContentLoaded",()=>{d(),u(),p(),l(),i(),v()});
