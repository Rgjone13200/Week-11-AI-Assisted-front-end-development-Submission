// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Modal
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const infoModal = document.getElementById("infoModal");

openModal.addEventListener("click", () => {
  infoModal.classList.add("show");
  infoModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  infoModal.classList.remove("show");
  infoModal.classList.add("hidden");
});

// Close modal when clicking outside content
infoModal.addEventListener("click", (e) => {
  if (e.target === infoModal) {
    infoModal.classList.remove("show");
    infoModal.classList.add("hidden");
  }
});