import desabafoForm from "../components/desabafoForm.js";
import { menu } from "../components/menu.js";
import searchBar from "../components/searchBar.js";
import defaultRegistros from "./models/registros.js";
import addRegistros from "./scripts/addRegistros.js";
import bgParticles from "./scripts/bgParticles.js";
import { menuBar } from "./scripts/menuBar.js";
import { showRegistros } from "./scripts/showRegistros.js";

// defaultRegistros();
searchBar();

document.addEventListener("DOMContentLoaded", () => {
  bgParticles();
  menu();
  menuBar();
  desabafoForm();
  showRegistros();
  addRegistros();
});

window.addEventListener("search-desabafo", (e) => {
  const texto = (e?.detail?.texto || "").toLowerCase();

  const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

  if (!texto) {
    showRegistros(registros);
    return;
  }

  const filtrados = registros.filter((r) => {
    const titulo = (r.titulo || "").toLowerCase();
    const descricao = (r.descricao || "").toLowerCase(); // 👈 aqui está o texto do desabafo

    return titulo.includes(texto) || descricao.includes(texto);
  });

  showRegistros(filtrados);
});
