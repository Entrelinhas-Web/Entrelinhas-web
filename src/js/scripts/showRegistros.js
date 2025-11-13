import desabafoCard from "../../components/desabafoCard.js";

export function showRegistros() {
  const content = document.querySelector(".content");

  content.innerHTML = "";

  const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

  (registros.length > 0)
    ? (registros.map((registro) =>
        content.insertAdjacentHTML("afterbegin", desabafoCard(registro)),
      ))
    : (content.insertAdjacentHTML("afterbegin", `<div class="text-center p-6">
      <p>Você pode fazer um desabafo agora!</p>  
    </div>`));
}
