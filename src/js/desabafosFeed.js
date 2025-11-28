import desabafoForm from "../components/desabafoForm.js";
import { menu } from "../components/menu.js";
import search from "./scripts/search.js";
import addRegistros from "./scripts/addRegistros.js";
import bgParticles from "./scripts/bgParticles.js";
import { menuBar } from "./scripts/menuBar.js";
import { showRegistros } from "./scripts/showRegistros.js";
import { filter } from "../components/filter.js";
import { filterBar } from "./scripts/filterBar.js";

import "./scripts/updateState.js";

document.addEventListener("DOMContentLoaded", () => {
  bgParticles();
  desabafoForm();
  showRegistros();
  addRegistros();
});

search();
menu();
menuBar();
filter();
filterBar();