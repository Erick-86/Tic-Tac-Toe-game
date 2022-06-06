//Modal Overlay
const modalOverlay = document.getElementById("modal-overlay");
//Game config modal
const gameConfigModal = document.getElementById("game-config-modal");
//Edit player names btns
const editElayerNameBtn1 = document.getElementById("edit-player-1-name-btn");
const editElayerNameBtn2 = document.getElementById("edit-player-2-name-btn");
//Player config form
const playerConfigForms = document.querySelector('form')
//
//Storing the game data when a box is selected using 2 dimensional array
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

let editedPlayer = 0
let activePlayer = 0
//an array storing the players data
const players = [
    {name: '',
     symbol: 'X'},

    {name: '',
     symbol: 'O'}
]
//Modal cancel btn
const closeGameConfigBtn = document.getElementById("cancel-btn")
//User inout Error
const userInputError = document.getElementById("user-input_error")
//Start game btn
const startGameBtn = document.getElementById("start-game-btn")
//Game section
const gameSection = document.getElementById("game_section")
//Player turn
const playerTurn = document.getElementById("player_turn")
//Game board list items
const gameBoardBoxes = document.querySelectorAll(".game-board li") 
// const editNameBtn = document.getElementById("edit-name-btn")


//Opening and closing fo the game config modal
// 
// //Opening the modal
function openGameConfig(e) {
    //Which player btn is been clicked using the data set attribute
    editedPlayer = +e.target.dataset.playerid //the + will convert the variable to a number. e.i + 1 => 1
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
    //to clear the input when the modal closes
    playerConfigForms.firstElementChild.lastElementChild.value = ''
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

    // Storing and managing submitted data
    //
    //Differenciating between the 2 players when their btns is clicked
    const updatePlayerData = document.getElementById("player-" + editedPlayer + "-data")
    updatePlayerData.children[1].textContent = enteredPlayerName

    //accessing the 2 elements in the arrays
    players[editedPlayer - 1].name = enteredPlayerName

    //calling the close modal function to close the modal on confirm click
    closeGameConfig()
}

playerConfigForms.addEventListener('submit', savePlayerConfig)

//removing the error alert if the player starts typing in forms
//form input
let configInput = document.getElementById("name")

 function removeErrorAlert () {
    if(configInput.value.length > 0) {
        playerConfigForms.firstElementChild.classList.remove("input-error")
        userInputError.textContent = ''
    }
 }

 configInput.addEventListener('input', removeErrorAlert)

 //Adding start game logic
 function startGame() {
    if (players[0].name === '' || players[1].name === ''){
        alert('Set a custom player names for both players')
        return
    }

    //displaying player name when game starts
    playerTurn.textContent = players[activePlayer].name

    gameSection.style.display = "block"
 }
 startGameBtn.addEventListener('click', startGame)

//Game turns and field selection
//Looping through all the game board list items when they been clicked
for (const gameBoardBox of gameBoardBoxes) {
    gameBoardBox.addEventListener('click', selectedBox)
}

//Switchibg player
function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    }else {
        activePlayer = 0
    }

    //displaying player name when its a player turn
    playerTurn.textContent = players[activePlayer].name
}

//Adding player symbol when clicked
function selectedBox(e) {

    //selecting the colums and rows using dataset attribute
    const selctedCol = e.target.dataset.col - 1
    const selctedRow = e.target.dataset.row - 1

    //Disabling a box if its already been selected
    if (gameData[selctedRow][selctedCol] > 0) {
        alert('Select an empty field')
        return
    }

    //Placing player symbol in the box when clicked
    e.target.textContent = players[activePlayer].symbol

    //Adding played class to the box when is been clicked
    e.target.classList.add("played")

    //updating the game data using the 2 dimensional arrays
    gameData[selctedRow][selctedCol] = activePlayer + 1
    switchPlayer()
}