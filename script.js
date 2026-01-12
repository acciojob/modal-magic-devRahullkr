const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

// Open modal
openModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

// Close modal via button
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Close modal on outside click
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});