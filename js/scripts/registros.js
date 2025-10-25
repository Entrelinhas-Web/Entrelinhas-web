import registros from "../models/registros.js";

export function showRegistros() {
    const content = document.querySelector(".content");

    for (const registro of registros) {
    content.insertAdjacentHTML(
        "beforeend",
        `
        <div class="nuvem">
            <div class="nuvem-texto">${registro.descricao}</div>
        </div>
        `,
    );
    }
}