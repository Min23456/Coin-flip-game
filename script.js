const headsBtn = document.getElementById("headsBtn");
const tailsBtn = document.getElementById("tailsBtn");
const resetBtn = document.getElementById("resetBtn");
const guessText = document.getElementById("guessText");
const resultText = document.getElementById("resultText");
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const coinText = document.getElementById("coinText");
let wins = 0;
let losses = 0;


function playGame(userGuess) {
    const randomNumber = Math.random();
    let coinResult;
    if (randomNumber < 0.5) {
        coinResult = "Heads";
    } else {
        coinResult = "Tails";
    }
    guessText.textContent = userGuess;
    coinText.textContent = coinResult;
    if (userGuess === coinResult) {
        resultText.textContent = "WINNER! 🏆💰 The coin landed exactly how you wanted! Let's goooo! 🚀";
        wins++;
    } else {
        losses++;
        resultText.textContent = "Mission failed! ❌ The coin betrayed you! 🪙💨"
    }
    winsText.textContent = wins;
    lossesText.textContent = losses;
}

headsBtn.addEventListener("click", function() {
    playGame("Heads");


});


tailsBtn.addEventListener("click", function() {
    playGame("Tails");

});




resetBtn.addEventListener("click", function() {
    wins = 0;
    losses = 0;

    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessText.textContent = "-";
    coinText.textContent = "-";
    resultText.textContent = "The coin is in the air... 🪙💨 Quick! Call it! Heads 👱‍♂️ or Tails 🦅?"


});









