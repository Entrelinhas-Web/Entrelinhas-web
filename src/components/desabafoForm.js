export default function desabafoForm() {
  const content = document.querySelector(".form");

  content.innerHTML = "";

  const form = `
<div class="bg-roxo border-lilas border-4 w-[40%] rounded-lg p-6 shadow-md mx-auto">
  <h1 class="mb-6 text-amarelo pb-5 text-center text-xl font-semibold">
    Adicionar desabafo
  </h1>

  <form id="desabafoForm" class="flex flex-col gap-6">
    <!-- Área principal dividida em duas colunas -->
    <div class="grid grid-cols-2 gap-6">

      <!-- Coluna esquerda -->
      <div class="flex flex-col gap-12">

        <!-- Título -->
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Título"
          class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 p-2 outline-none w-full"
          required
        />

        <!-- Emoção -->
        <select
          id="emocao"
          name="emocao"
          required
          class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa rounded-md border-2 p-2 outline-none w-full"
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

        <!-- Nível -->
        <div class="flex flex-col gap-2">
          <span class="text-amarelo font-medium">Nível da emoção:</span>
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
          <span id="valorNivel" class="text-center text-sm text-amarelo">3 / 5</span>
        </div>
      </div>

      <!-- Coluna direita: Descrição -->
      <div class="flex flex-col">
        <textarea
          id="descricao"
          name="descricao"
          rows="10"
          placeholder="Descrição"
          class="bg-preto border-lilas focus:border-amarelo focus:ring-rosa resize-none rounded-md border-2 p-2 outline-none w-full h-full"
          required
        ></textarea>
      </div>

    </div>

    <!-- Botão -->
    <div class="flex justify-center">
      <button
        type="submit"
        class="bg-lilas border-lilas rounded-[5px] text-branco hover:bg-branco border-2 py-2 px-8 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_#1A1423] hover:text-lilas font-semibold"
      >
        Adicionar
      </button>
    </div>
  </form>
</div>`;

  content.insertAdjacentHTML("beforeend", form);

  content.classList.remove("hidden");
  content.classList.add("flex");

  const nivelInput = document.getElementById("nivel");
  const valorNivel = document.getElementById("valorNivel");

  nivelInput.addEventListener("input", () => {
    valorNivel.textContent = `${nivelInput.value} / 5`;
  });
}
