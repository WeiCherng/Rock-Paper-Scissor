const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection, computerSelection)
  }
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

game();
