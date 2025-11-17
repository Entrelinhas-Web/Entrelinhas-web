import desabafoCard from "../../components/desabafoCard.js";
import popUp from "../../components/popUp.js";
import emocoes from "../../js/models/emocoes.js";

function mostrarPopup (objeto){
    const { border, text } = emocoes[objeto.emocao];
    const modalId = `modal-${objeto.id || Date.now() + Math.random()}`;
    const htmlString = popUp(modalId, objeto, border, text);

    document.body.insertAdjacentHTML('beforeend', htmlString);

    const modalElement = document.getElementById(modalId);

    const closeButton = modalElement.querySelector('.js-close-popup');
    const editButton = modalElement.querySelector('.js-edit-popup');
    const removeButton = modalElement.querySelector('.js-remove-popup');

    const modalContent = modalElement.querySelector('.bg-preto');

    const fecharModal = () => {
        modalElement.classList.add('hidden');
        modalElement.remove();//pra não acumular
    };
    
    modalElement.addEventListener('click', fecharModal);

    closeButton && (() => {
        closeButton.addEventListener('click', fecharModal);
    })

    modalContent.addEventListener('click', (event) => event.stopPropagation());

    editButton && (() => {
        editButton.addEventListener('click', () => {
            console.log("Clicou em EDITAR o item:", objeto.id);
            // js pra edit

        });
     })

    removeButton && (() => {
        removeButton.addEventListener('click', () => {
            console.log("Clicou em REMOVER o item:", objeto.id);
            // js pra remover
        });
    })

    modalElement.classList.remove('hidden');
};

export function showRegistros(lista = null, mensagem = null) {
    const content = document.querySelector(".content");

    content.innerHTML = "";

    // se recebeu lista, usa. caso contrário, usa o localStorage como antes
    const registros = lista ?? JSON.parse(localStorage.getItem("desabafos") || "[]");

    (registros.length === 0) &&
    content.insertAdjacentHTML("afterbegin", `
        <div class="text-center p-6">
        <p>${(mensagem) ? (mensagem) : ("Você pode fazer um desabafo agora!")}</p>
        </div>
  `);


    registros.map((registro) => {
        const cardHtmlString = desabafoCard(registro);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHtmlString.trim();
        const cardElement = tempDiv.firstElementChild;

        (cardElement) && 
        cardElement.addEventListener('click', () => {
            mostrarPopup(registro);
        });
        content.prepend(cardElement);
    });
}