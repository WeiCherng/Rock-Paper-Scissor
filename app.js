const game = (playerSelection) => {
    // const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    return (playRound(playerSelection, computerSelection));
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "Tie!";
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection == "Scissor") {
      return "You Lose! Scissors beats Paper";
    }
  }
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection == "Scissor") {
      return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection == "Scissor") {
    if (computerSelection == "Paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection == "Rock") {
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

paper.addEventListener('click', function(e) {
  const string = game('Paper');
  output.innerHTML = string
})
rock.addEventListener('click', function(e) {
  const string = game('Rock')
  output.innerHTML = string
})
scissor.addEventListener('click', function(e) {
  const string = game('Scissor')
  output.innerHTML = string
})


