export default function searchBar() {
  const content = document.querySelector(".search");

  const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

  registros.length > 0 && (() => {
    content.classList.remove("hidden");
    content.classList.add("flex");
  })();
}
