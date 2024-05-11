let resultdisplay = document.getElementById("result");
let playerdisplay = document.getElementById("playerdisplay");
let computerdisplay = document.getElementById("computerdisplay");

let playercountdisplay = document.getElementById("playercount");
let computercountdisplay = document.getElementById("computercount");
let choices = ["rock", "paper", "scissor"];
let playercount = 0;
let computercount = 0;

function playGame(playerchoice) {
  let computerchoice = choices[Math.floor(Math.random() * 3)];
  playerdisplay.textContent = `Player - ${playerchoice}`;
  computerdisplay.textContent = `Computer - ${computerchoice}`;
  let result = "";
  if (playerchoice === computerchoice) {
    resultdisplay.textContent = "It is a TIE";
  } else {
    switch (playerchoice) {
      case "rock":
        result = computerchoice === "scissor" ? "YOU WON" : "YOU LOSE";
        resultdisplay.textContent = result;
        break;
      case "paper":
        result = computerchoice === "rock" ? "YOU WON" : "YOU LOSE";
        resultdisplay.textContent = result;
        break;
      case "scissor":
        result = computerchoice === "paper" ? "YOU WON" : "YOU LOSE";
        resultdisplay.textContent = result;
        break;
    }

    if (result === "YOU WON") {
      playercount++;
      console.log(playercount);
      playercountdisplay.textContent = `Player score is ${playercount}`;
    } else if (result === "YOU LOSE") {
      computercount++;
      computercountdisplay.textContent = `Computer score is ${computercount}`;
    }
  }
}
