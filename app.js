const cleared = () => {
  winScore.innerHTML = 0;
  loseScore.innerHTML = 0;
  win = 0;
  lose = 0;
}
const updateScore = () => {
  winScore.innerHTML = win;
  loseScore.innerHTML = lose;
}

const game = (playerSelection) => {
    const computerSelection = computerPlay();
    return (playRound(playerSelection, computerSelection));
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "Tie!";
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      win++;
      return ("You Win! Paper beats Rock");
    } else if (computerSelection == "Scissor") {
      lose++;
      return "You Lose! Scissors beats Paper";
    }
  }
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      lose++;
      return "You Lose! Paper beats Rock";
    } else if (computerSelection == "Scissor") {
      win++;
      return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection == "Scissor") {
    if (computerSelection == "Paper") {
      win++;
      return "You Win! Scissors beats Paper";
    } else if (computerSelection == "Rock") {
      lose++;
      return "You Lose! Rock beats Scissors";
    }
  }
};
const computerPlay = () => {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "Paper";
      break;
    case 2:
      return "Rock";
      break;
    case 3:
      return "Scissor";
      break;
  }
};

const playerPlay = () => {
  let play = prompt().toLocaleLowerCase();
  if (play == "paper") {
    return "Paper";
  } else if (play == "rock") {
    return "Rock";
  } else if (play == "scissor") {
    return "Scissor";
  } else {
    console.log("Invalid Input");
    return 0;
  }
};

// game();
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const output = document.querySelector("#output");
const clear = document.querySelector(".clear");

let winScore = document.querySelector(".win");
let loseScore = document.querySelector(".lose");
let win = 0;
let lose = 0;

paper.addEventListener('click', function(e) {
  const string = game('Paper');
  output.innerHTML = string
  updateScore()
})
rock.addEventListener('click', function(e) {
  const string = game('Rock')
  output.innerHTML = string
  updateScore()
})
scissor.addEventListener('click', function(e) {
  const string = game('Scissor')
  output.innerHTML = string
  updateScore()
})
clear.addEventListener('click', function(e) {
  cleared();
})


