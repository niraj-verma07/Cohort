const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");
const desktop = document.querySelector(".desktop");

// Toggle Menu
startBtn.addEventListener("click", (e) => {
  startMenu.classList.toggle("active");
});

// Close menu when clicking outside (on desktop)
desktop.addEventListener("click", (e) => {
  if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
    startMenu.classList.remove("active");
  }
});
