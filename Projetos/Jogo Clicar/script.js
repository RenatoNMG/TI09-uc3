const startButton = document.getElementById("start-button");
const square = document.getElementById("square");
const scoreDisplay = document.getElementById("scoreDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const gameArea = document.getElementById("game-area");

let score = 0;
let timeLeft = 30;
let gameInterval;


function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Pontos: ${score}`;
    timerDisplay.textContent = `Tempo: ${timeLeft}`;
    startButton.disabled = true;
    gameInterval = setInterval(updadeTimer,1000);

    showSquare();
}

function updadeTimer(){
    timeLeft--;
    timerDisplay.textContent = `Timer: ${timeLeft}`;
    if(timeLeft <= 0){
        gameOver();

    }

}

function showSquare() {
    const areaW = gameArea.clientWidth - 50;
    const areaH = gameArea.clientHeight - 50;

    const randomH = Math.floor(Math.random() * areaH);
    const randomW = Math.floor(Math.random() * areaW);

    square.style.top = `${randomH}px`;
    square.style.left = `${randomW}px`;



    square.style.display = "block";
}

function handlesquereClick(){
    score++;
    scoreDisplay.textContent = `pontos ${score}`;
    showSquare();

}
function gameOver(){
    clearInterval(gameInterval);
    square.style.display = "none";
    startButton.disabled = false;
    alert(`FIm de Jogo sua pontuação foi de ${score}`);
}

// Event Listners
startButton.addEventListener("click", startGame);
square.addEventListener("click",handlesquereClick);
