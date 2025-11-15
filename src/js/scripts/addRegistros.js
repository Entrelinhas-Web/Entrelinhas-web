import { showRegistros } from "./showRegistros.js";

export default function addRegistros() {
  const form = document.getElementById("desabafoForm");

  const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new Date();

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    const dados = {
      id: (registros.length > 0) ? (registros[registros.length - 1].id + 1) : (1),
      titulo: form.titulo.value,
      emocao: form.emocao.value,
      nivel: form.nivel.value,
      descricao: form.descricao.value,
      data: `${dia}/${mes}/${ano}`,
    };

    registros.push(dados);
    localStorage.setItem("desabafos", JSON.stringify(registros));

    form.reset();

    location.reload()
  });
}
