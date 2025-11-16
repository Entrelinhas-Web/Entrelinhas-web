import cardDashboard from "../../components/cardDashboard.js" 
import emocoes from "../models/emocoes.js";
import { listaDesabafos } from "../dashboard.js";

const listaEmocoesRegistradas = listaDesabafos.map((registro) => registro.emocao)

//Dicionário com quantidade de emoções registradas
let quantidades = {}
listaEmocoesRegistradas.forEach((emocao) => {
    (quantidades[emocao] === undefined) 
    ? quantidades[emocao] = 1  
    : quantidadesemocao += 1
})
console.log(listaEmocoesRegistradas)
console.log(quantidades)

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