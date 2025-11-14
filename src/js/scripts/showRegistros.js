import desabafoCard from "../../components/desabafoCard.js";
import popupHtml from "../../components/popupHtml.js";
import emocoes from "../../js/models/emocoes.js";

const mostrarPopup = (objeto) => {
    const { border, text } = emocoes[objeto.emocao];
    const modalId = `modal-${objeto.id || Date.now() + Math.random()}`;
    const htmlString = popupHtml(modalId, objeto, border, text);

    document.body.insertAdjacentHTML('beforeend', htmlString);

    const modalElement = document.getElementById(modalId);
    if (!modalElement) return; 

    const closeButton = modalElement.querySelector('.js-close-popup');
    const editButton = modalElement.querySelector('.js-edit-popup');
    const removeButton = modalElement.querySelector('.js-remove-popup');

    const modalContent = modalElement.querySelector('.bg-preto');

    const fecharModal = () => {
        modalElement.classList.add('hidden');
        modalElement.remove();//pra não acumular
    };
    
    modalElement.addEventListener('click', fecharModal);
    
    if (closeButton) {
        closeButton.addEventListener('click', fecharModal);
    }

    modalContent.addEventListener('click', (event) => event.stopPropagation());

    if (editButton) {
        editButton.addEventListener('click', () => {
            console.log("Clicou em EDITAR o item:", objeto.id);
            // js pra edit

        });
    }

    if (removeButton) {
        removeButton.addEventListener('click', () => {
            console.log("Clicou em REMOVER o item:", objeto.id);
            // js pra remover
        });
    }

    modalElement.classList.remove('hidden');
};

export function showRegistros() {
    const content = document.querySelector(".content");
    if (!content) return;

    content.innerHTML = "";

    const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");
    if (registros.length === 0) {
        content.insertAdjacentHTML("afterbegin", `<div class="text-center p-6">
          <p>Você pode fazer um desabafo agora!</p>  
        </div>`);
        return;
    }

    registros.forEach((registro) => {
        const cardHtmlString = desabafoCard(registro);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHtmlString.trim();
        const cardElement = tempDiv.firstElementChild;

        if (cardElement) {
            cardElement.addEventListener('click', () => {
                mostrarPopup(registro);
            });

            content.prepend(cardElement);
        }
    });
}