export function filter() {
  const filterBtn = document.getElementById("filter-btn") as HTMLButtonElement | null;
  const filter = document.getElementById("filter") as HTMLDivElement | null;
  const closeBtn = document.getElementById("filter-close-btn") as HTMLButtonElement | null;

  if (!filterBtn || !filter || !closeBtn) return;

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

  document.addEventListener("click", (e) => {
    !filter.contains(e.target) &&
      !filterBtn.contains(e.target) &&
      closeFilter();
  });
}
