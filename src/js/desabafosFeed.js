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
