import desabafoForm from "../components/desabafoForm.js";
import { menu } from "../components/menu.js";
import search from "./scripts/search.js";
import defaultRegistros from "./models/registros.js";
import addRegistros from "./scripts/addRegistros.js";
import bgParticles from "./scripts/bgParticles.js";
import { menuBar } from "./scripts/menuBar.js";
import { showRegistros } from "./scripts/showRegistros.js";

// defaultRegistros();

document.addEventListener("DOMContentLoaded", () => {
  search();
  bgParticles();
  menu();
  menuBar();
  desabafoForm();
  showRegistros();
  addRegistros();
});

