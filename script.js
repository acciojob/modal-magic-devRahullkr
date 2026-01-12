const openModalBtn = document.getElementById("openModal");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal
openModalBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modalOverlay.style.display = "flex";
  modal.style.display = "block";
});

// Close modal via close button
closeModalBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeModal();
});

// Prevent modal click from closing
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close modal on outside click (BODY + OVERLAY)
document.body.addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
}
