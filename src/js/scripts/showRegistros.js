import desabafoCard from "../../components/desabafoCard.js";
import popUp from "../../components/popUp.js";
import emocoes from "../../js/models/emocoes.js";

function mostrarPopup(objeto) {
  const { border, text } = emocoes[objeto.emocao];
  const modalId = `modal-${objeto.id || Date.now() + Math.random()}`;

  document.body.insertAdjacentHTML(
    "beforeend",
    popUp(modalId, objeto, border, text),
  );

  const modalElement = document.getElementById(modalId);

  const closeBtn = modalElement.querySelector(".close-popup");
  const editBtn = modalElement.querySelector(".edit-popup");
  const removeBtn = modalElement.querySelector(".remove-popup");

  const modalContent = modalElement.querySelector(".bg-preto");

  function fecharModal() {
    modalElement.remove();
  }

  modalElement.addEventListener("click", fecharModal);

  modalContent.addEventListener("click", (e) => {
    const clicked = e.target.closest(
      ".close-popup, .edit-popup, .remove-popup",
    );
    !clicked && e.stopPropagation();
  });

  closeBtn &&
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      fecharModal();
    });

  editBtn &&
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Editar:", objeto.id);
    });

  removeBtn &&
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      let registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

      registros = registros.filter((r) => {
        return r.id !== objeto.id;
      });

      localStorage.setItem("desabafos", JSON.stringify(registros));

      fecharModal();
      showRegistros(registros);
    });
}

export function showRegistros(lista = null, mensagem = null) {
  const content = document.querySelector(".content");

  content.innerHTML = "";

  // se recebeu lista, usa. caso contrário, usa o localStorage como antes
  const registros =
    lista ?? JSON.parse(localStorage.getItem("desabafos") || "[]");

  registros.length === 0 &&
    content.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="text-center p-6">
        <p>${mensagem ? mensagem : "Você pode fazer um desabafo agora!"}</p>
        </div>
  `,
    );

  registros.map((registro) => {
    const cardHtmlString = desabafoCard(registro);

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cardHtmlString.trim();
    const cardElement = tempDiv.firstElementChild;

    cardElement &&
      cardElement.addEventListener("click", () => {
        mostrarPopup(registro);
      });
    content.prepend(cardElement);
  });
}
