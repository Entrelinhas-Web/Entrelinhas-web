import { showRegistros } from "./showRegistros";

export default function search() {
  const content = document.querySelector(".search");

  const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

  registros.length > 0 && (() => {
    content.classList.remove("hidden");
    content.classList.add("flex");
  })();

  const input = content.querySelector("input");

  input.addEventListener("input", () => {
    const texto = (input.value || "").trim().toLowerCase();

    const event = new CustomEvent("search-desabafo", {
      detail: { texto }
    });

    window.dispatchEvent(event);
  });
}

window.addEventListener("search-desabafo", (e) => {
  const texto = (e?.detail?.texto || "").toLowerCase();

  const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

  const filtrados = registros.filter((r) => {
    const titulo = (r.titulo || "").toLowerCase();
    const descricao = (r.descricao || "").toLowerCase();

    return titulo.includes(texto) || descricao.includes(texto);
  });

  showRegistros(filtrados);
});
