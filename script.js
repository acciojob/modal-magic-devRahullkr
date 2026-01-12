//your JS code here. If required.
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

// Open modal
openModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

// Close modal via button
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Close modal by clicking outside
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});