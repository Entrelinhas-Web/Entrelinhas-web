import cardDashboard from "../../components/cardDashboard.js" 
import emocoes from "../models/emocoes.js";



export function gerarContadores(){

    const content = document.querySelector(".content");
    if (!content) return;

    content.innerHTML = "";

    //Construtor de card contadores de emoções
    const arrayEmocoes = Object.keys(emocoes);

    arrayEmocoes.forEach((emocao) => {
        const cardHtmlDashboard = cardDashboard(emocao);
        content.insertAdjacentHTML('beforeend', cardHtmlDashboard.trim()); 

    })
}