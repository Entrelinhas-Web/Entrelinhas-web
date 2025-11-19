import{b as c}from"./bgParticles-C6tZodVL.js";import{e as n,m as l,a as i}from"./menuBar-BdiGnDjp.js";const b=(e,o)=>{const{bg:t,border:s,text:r}=n[e];return`<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${s} overflow-hidden hover:scale-105">
                <div class="lateral ${t} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${r} font-bold">${o} Registro(s) de ${e}</h1>
                    </div>
                </div>
            </a>
        </div>`},f=JSON.parse(localStorage.getItem("desabafos")),g=f.map(e=>e.emocao);let a={};g.forEach(e=>{a[e]===void 0?a[e]=1:a[e]+=1});function m(){const e=document.querySelector(".content");if(!e)return;e.innerHTML="",Object.keys(n).forEach(t=>{let s=0;a[t]>0&&(s=a[t]);const r=b(t,s);e.insertAdjacentHTML("beforeend",r.trim())})}function u(){const e=document.getElementById("graficoDashboard"),o=Object.keys(a),t=Object.values(a);new Chart(e,{type:"bar",data:{labels:o,datasets:[{label:"Desabafos Registrados",data:t,borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}const d=JSON.parse(localStorage.getItem("desabafos")),p=document.querySelector("#desabafos-registrados"),h=document.querySelector("#emocoes-registradas span");p.textContent=d.length;h.textContent=new Set(d.map(e=>e.emocao)).size;document.addEventListener("DOMContentLoaded",()=>{c(),l(),i(),m(),u()});
