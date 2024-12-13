let userScore = 0;
let computerScore = 0;

function beginStart(){
  let userName = prompt("Введіть своє ім'я");
  document.getElementById('uName').innerText = userName;
}

setTimeout(beginStart,1000);

document.getElementById('generate').addEventListener('click', () => {
  const userNumber = Math.floor(Math.random() * 10) + 1;
  const computerNumber = Math.floor(Math.random() * 10) + 1;

  document.getElementById('userNumber').innerText = userNumber;
  document.getElementById('computerNumber').innerText = computerNumber;

  if (userNumber > computerNumber) {
    userScore++;
  } else if (computerNumber > userNumber) {
    computerScore++;
  }

  document.getElementById('userScore').innerText = userScore;
  document.getElementById('computerScore').innerText = computerScore;

  if (userScore == 3 && computerScore < 3) {
    alert("Переможець гри : " + userName);
    resetGame();
  } else if (computerScore == 3 && userScore < 3) {
    alert("Переможець гри : Комп'ютер");
    resetGame();
  }else if (computerScore == 3 && userScore == 3) {
    alert("Рівний рахунок! 3 : 3");
    resetGame();
  }
});

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('userScore').innerText = userScore;
  document.getElementById('computerScore').innerText = computerScore;
  document.getElementById('userNumber').innerText = "0";
  document.getElementById('computerNumber').innerText = "0";
}