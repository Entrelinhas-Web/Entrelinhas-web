import bgParticles from "./scripts/bgParticles.js";
import { menu } from "../components/menu.js";
import { menuBar } from "./scripts/menuBar.js";
import { gerarContadores, gerarGrafico } from "./scripts/funcoesDashboad.js";

//Lista de desabafos no LocalStorage
export const listaDesabafos = JSON.parse(localStorage.getItem("desabafos" || "[]"));

//Elementos no HTML
const desabafosRegistrados = document.querySelector('#desabafos-registrados');
const emocoesRegistradas = document.querySelector('#emocoes-registradas span');

//Contador principal de emoções
desabafosRegistrados.textContent = listaDesabafos.length;
emocoesRegistradas.textContent = new Set(listaDesabafos.map((registro) => registro.emocao)).size;

document.addEventListener("DOMContentLoaded", () => {
    bgParticles();
    menu();
    menuBar();
    gerarContadores();
    gerarGrafico();
});
