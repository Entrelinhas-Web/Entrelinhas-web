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

    const event = new CustomEvent("state-change", {
      detail: { searchText: texto }
    });

    window.dispatchEvent(event);
  });
}
