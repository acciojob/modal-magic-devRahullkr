const openModalBtn = document.getElementById("openModal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal
openModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

// Close modal via close button
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Close modal by clicking outside
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});