const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('translate-x-full');
  sidebar.classList.toggle('translate-x-0');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.add('translate-x-full');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.add('translate-x-full');
  }
});
