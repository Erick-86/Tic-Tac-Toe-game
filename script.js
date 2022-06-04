//Modal Overlay
const modalOverlay = document.getElementById("modal-overlay");
//Game config modal
const gameConfigModal = document.getElementById("game-config-modal");
//Edit player names btns
const editElayerNameBtn1 = document.getElementById("edit-player1-name-btn");
const editElayerNameBtn2 = document.getElementById("edit-player2-name-btn");
//Player config form
const playerConfigForms = document.querySelector('form')
//Modal cancel btn
const closeGameConfigBtn = document.getElementById("cancel-btn")
//User inout Error
const userInputError = document.getElementById("user-input_error")
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
    //this code will remove the error alert when the modal is closed (cancel)
    playerConfigForms.firstElementChild.classList.remove("input-error")
    userInputError.textContent = ''
}
modalOverlay.addEventListener('click', closeGameConfig)
closeGameConfigBtn.addEventListener('click', closeGameConfig)


//handling the player config forms submit
//
//this function handles the submission of the player config forms and validate the forms input
function savePlayerConfig(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const enteredPlayerName = formData.get('playername').trim() //the trim() method will remove every white space after and before the player name
     
    //this if statement will validate the name input if it's empty
    if(!enteredPlayerName) {
        e.target.firstElementChild.classList.add('input-error')
        userInputError.textContent = 'Enter a valid name'
        // the return keyword will stop the rest of the code after its been executed 
        // if a player does not enter a valid input because we arent passing any value to it 
        return
    }
}

playerConfigForms.addEventListener('submit', savePlayerConfig)