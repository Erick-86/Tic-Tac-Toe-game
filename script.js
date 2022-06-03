const modalOverlay = document.getElementById("modal-overlay");
const gameConfigModal = document.getElementById("game-config-modal");
const cancelBtn = document.getElementById("cancel-btn")
const editNameBtn = document.getElementById("edit-name-btn")

//Opening and closing fo the game config modal
//Opening the modal
function openModal() {
    modalOverlay.style.display = "block"
    gameConfigModal.style.display = "block"
}
editNameBtn.addEventListener('click', openModal)

//Closing the modal when clicking the overlay
function closeModal() {
    modalOverlay.style.display = "none"
    gameConfigModal.style.display = "none"
}
modalOverlay.addEventListener('click', closeModal)

//Closing the modal with cancel btn
function closeModal() {
    modalOverlay.style.display = "none"
    gameConfigModal.style.display = "none"
}
cancelBtn.addEventListener('click', closeModal)