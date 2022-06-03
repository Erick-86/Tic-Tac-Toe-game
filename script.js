//Modal Overlay
const modalOverlay = document.getElementById("modal-overlay");
//Game config modal
const gameConfigModal = document.getElementById("game-config-modal");
//Edit player names btns
const editElayerNameBtn1 = document.getElementById("edit-player1-name-btn");
const editElayerNameBtn2 = document.getElementById("edit-player2-name-btn");
//Modal cancel btn
const closeGameConfigBtn = document.getElementById("cancel-btn")
// const editNameBtn = document.getElementById("edit-name-btn")


//Opening and closing fo the game config modal
// 
// //Opening the modal
function openGameConfig() {
    modalOverlay.style.display = "block"
    gameConfigModal.style.display = "block"
}

editElayerNameBtn1.addEventListener("click", openGameConfig)
editElayerNameBtn2.addEventListener("click", openGameConfig)

// //Closing the modal
function closeGameConfig() {
    modalOverlay.style.display = "none"
    gameConfigModal.style.display = "none"
}
modalOverlay.addEventListener('click', closeGameConfig)
closeGameConfigBtn.addEventListener('click', closeGameConfig)
