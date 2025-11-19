import{b as l}from"./bgParticles-Cp8vO3Rx.js";import{e as d,m as i,a as b}from"./menuBar-BdiGnDjp.js";const g=(e,n)=>{const{bg:a,border:s,text:o}=d[e];return`<div class="w-[85%] lg:w-[60%] p-4 gap-2">
            <a class="flex rounded-2xl border-2 ${s} overflow-hidden hover:scale-105">
                <div class="lateral ${a} w-3"></div>
                <div class="content bg-preto flex flex-col flex-1 gap-3 p-2">
                    <div>
                        <h1 class="${o} font-bold">${n} Registro(s) de ${e}</h1>
                    </div>
                </div>
            </a>
        </div>`},c=r.map(e=>e.emocao);let t={};c.forEach(e=>{t[e]===void 0?t[e]=1:t[e]+=1});console.log(c);console.log(t);function m(){const e=document.querySelector(".content");if(!e)return;e.innerHTML="",Object.keys(d).forEach(a=>{let s=0;t[a]>0&&(s=t[a]);const o=g(a,s);e.insertAdjacentHTML("beforeend",o.trim())})}const r=JSON.parse(localStorage.getItem("desabafos")),f=document.querySelector("#desabafos-registrados"),u=document.querySelector("#emocoes-registradas span");f.textContent=r.length;u.textContent=new Set(r.map(e=>e.emocao)).size;document.addEventListener("DOMContentLoaded",()=>{l(),i(),b(),m()});const h=document.getElementById("graficoDashboard"),p=Object.keys(t),v=Object.values(t);new Chart(h,{type:"bar",data:{labels:p,datasets:[{label:"Desabafos Registrados",data:v,borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}});
