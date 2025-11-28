export function menu() {
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");

  function openSidebar() {
    sidebar.classList.remove("hidden");
    setTimeout(() => {
      sidebar.classList.remove("translate-x-full");
      sidebar.classList.add("translate-x-0");
    }, 10);
  }

  function closeSidebar() {
    sidebar.classList.add("translate-x-full");
    sidebar.classList.remove("translate-x-0");
    setTimeout(() => {
      sidebar.classList.add("hidden");
    }, 300);
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openSidebar();
  });

  closeBtn.addEventListener("click", closeSidebar);

  document.addEventListener("click", (e) => {
    !sidebar.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      closeSidebar();
  });
}