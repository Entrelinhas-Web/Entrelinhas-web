import cardDashboard from "../../components/cardDashboard.js" 
import emocoes from "../models/emocoes.js";

export const listaDesabafos = JSON.parse(localStorage.getItem("desabafos" || "[]"));
export const listaEmocoesRegistradas = listaDesabafos.map((registro) => registro.emocao)

//Dicionário com quantidade de emoções registradas
export let quantidades = {}
listaEmocoesRegistradas.forEach((emocao) => {
    (quantidades[emocao] === undefined) 
    ? quantidades[emocao] = 1  
    : quantidades[emocao] += 1
})

export function gerarContadores(){

    const content = document.querySelector(".content");
    if (!content) return;

    content.innerHTML = "";

    //Construtor de card contadores de emoções
    const arrayEmocoes = Object.keys(emocoes);

    arrayEmocoes.forEach((emocao) => {
        let count = 0;
        (quantidades[emocao])>0 ? count =  quantidades[emocao] : count;
        const cardHtmlDashboard = cardDashboard(emocao, count);
        content.insertAdjacentHTML('beforeend', cardHtmlDashboard.trim()); 
    })
}

export function gerarGrafico(){
    const ctx = document.getElementById('graficoDashboard');
    const arrayChaves = Object.keys(quantidades);
    const arrayQuantidades = Object.values(quantidades);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayChaves,
            datasets: [{
            label: 'Desabafos Registrados',
            data: arrayQuantidades,
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
    });
}