export default function desabafoForm() {
  const content = document.querySelector(".form");

  content.innerHTML = "";

  const form = `
        <div class="bg-roxo border-lilas border-4 w-full max-w-md rounded-lg p-6 shadow-md">
          <h1 class="mb-4 text-amarelo text-center text-xl font-semibold">
            Adicionar desabafo
          </h1>

          <form id="desabafoForm" class="flex p-4 flex-col gap-4">
            <!-- Título -->
            <label for="titulo" class="flex flex-col gap-1">
              <!-- <span>Título:</span> -->
              <input
                type="text"
                id="titulo"
                name="titulo"
                placeholder="Título"
                class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
                required
              />
            </label>

            <!-- Emoção -->
            <label for="emocao" class="flex flex-col gap-1">
              <!-- <span>Emoção:</span> -->
              <select
                id="emocao"
                name="emocao"
                required
                class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 border-gray-300 p-2 outline-none"
              >
                <option value="" disabled selected hidden>Escolha a emoção</option>
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
                class="accent-amarelo w-full"
                required
              />
              <span id="valorNivel" class="text-center text-sm text-amarelo"
                >3 / 5</span
              >
            </label>

            <!-- Descrição -->
            <label for="descricao" class="flex flex-col gap-1">
              <!-- <span>Descrição:</span> -->
              <textarea
                id="descricao"
                name="descricao"
                rows="4"
                class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa resize-none rounded-md border-2 border-gray-300 p-2 outline-none"
                required
                placeholder="Descrição"
              ></textarea>
            </label>

            <!-- Botão -->
            <button
              type="submit"
              class="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco w-full border-2 py-2 mt-4 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas"
            >
              Adicionar
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
