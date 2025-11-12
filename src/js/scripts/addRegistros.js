import desabafoForm from "../../components/desabafoForm.js";
import registros from "../models/registros.js";
import { showRegistros } from "./showRegistros.js";

export default function addRegistros() {
  const form = document.getElementById("desabafoForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new Date();

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    const dados = {
      id: registros[registros.length - 1].id + 1,
      titulo: form.titulo.value,
      emocao: form.emocao.value,
      nivel: form.nivel.value,
      descricao: form.descricao.value,
      data: `${dia}/${mes}/${ano}`,
    };

    registros.push(dados);
    form.reset();

    showRegistros();
  });
}
