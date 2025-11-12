export default function desabafoForm() {
  const content = document.querySelector(".form");

  content.innerHTML = "";

  const form = `
        <div class="bg-rosa m-4 w-full max-w-md rounded-lg p-6 shadow-md">
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Adicionar desabafo
          </h2>

          <form id="desabafoForm" class="flex flex-col gap-4">
            <!-- Título -->
            <label for="titulo" class="flex flex-col gap-1">
              <span>Título:</span>
              <input
                type="text"
                id="titulo"
                name="titulo"
                class="focus:border-rosa focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
                required
              />
            </label>

            <!-- Emoção -->
            <label for="emocao" class="flex flex-col gap-1">
              <span>Emoção:</span>
              <select
                id="emocao"
                name="emocao"
                required
                class="bg-rosa focus:border-rosa focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
              >
                <option value="">Selecione</option>
                <option value="Felicidade">Felicidade</option>
                <option value="Tristeza">Tristeza</option>
                <option value="Raiva">Raiva</option>
                <option value="Ansiedade">Ansiedade</option>
                <option value="Motivação">Motivação</option>
                <option value="Tranquilidade">Tranquilidade</option>
                <option value="Medo">Medo</option>
              </select>
            </label>

            <!-- Nível -->
            <label for="nivel" class="flex flex-col gap-1">
              <span>Nível da emoção:</span>
              <input
                type="range"
                id="nivel"
                name="nivel"
                min="1"
                max="5"
                value="3"
                class="accent-rosa w-full"
                required
              />
              <span id="valorNivel" class="text-center text-sm text-gray-600"
                >3 / 5</span
              >
            </label>

            <!-- Causa -->
            <label for="causa" class="flex flex-col gap-1">
              <span>Causa:</span>
              <input
                type="text"
                id="causa"
                name="causa"
                class="focus:border-rosa focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
                required
              />
            </label>

            <!-- Descrição -->
            <label for="descricao" class="flex flex-col gap-1">
              <span>Descrição:</span>
              <textarea
                id="descricao"
                name="descricao"
                rows="4"
                class="focus:border-rosa focus:ring-rosa resize-none rounded-md border-2 border-gray-300 p-2 outline-none"
                required
              ></textarea>
            </label>

            <!-- Botão -->
            <button
              type="submit"
              class="bg-rosa hover:bg-rosa/80 rounded-md py-2 font-semibold text-white transition-colors"
            >
              Enviar desabafo
            </button>
          </form>
        </div>
      `;

  content.insertAdjacentHTML("beforeend", form);

  content.classList.remove("hidden");
  content.classList.add("flex");

  const nivelInput = document.getElementById("nivel");
  const valorNivel = document.getElementById("valorNivel");

  nivelInput.addEventListener("input", () => {
    valorNivel.textContent = `${nivelInput.value} / 5`;
  });
}
