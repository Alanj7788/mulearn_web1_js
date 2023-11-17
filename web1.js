document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerText = 'You got ' + diceRoll;
}
