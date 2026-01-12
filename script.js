const openModalBtn = document.getElementById("openModal");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal
openModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  modal.style.display = "block";
});

// Close modal via close button
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
});

// Close modal on outside click
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
    modal.style.display = "none";
  }
});
