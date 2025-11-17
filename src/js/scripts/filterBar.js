import filterInfo from "./filterInfo";

export function filterBar() {
  const filterBtn = document.getElementById("filter-btn");
  const filter = document.getElementById("filter");
  const closeBtn = document.getElementById("filter-close-btn");
  const filterSubmit = document.getElementById("filter-submit");

  function openFilter() {
    filter.classList.remove("hidden");
    setTimeout(() => {
      filter.classList.remove("translate-x-full");
      filter.classList.add("translate-x-0");
    }, 10);
  }

  function closeFilter() {
    filter.classList.add("translate-x-full");
    filter.classList.remove("translate-x-0");
    setTimeout(() => {
      filter.classList.add("hidden");
    }, 300);
  }

  filterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openFilter();
  });

  closeBtn.addEventListener("click", closeFilter);

  filterSubmit.addEventListener("click", () => {
    filterInfo();
    closeFilter();
  });

  document.addEventListener("click", (e) => {
    !filter.contains(e.target) &&
      !filterBtn.contains(e.target) &&
      closeFilter();
  });
}
