import desabafoCard from "../../components/desabafoCard.js";
import registros from "../models/registros.js";

export function showRegistros() {
  const content = document.querySelector(".content");

  registros.map((registro) =>
    content.insertAdjacentHTML(
      "beforeend",
      desabafoCard(registro),
    ),
  );
}
