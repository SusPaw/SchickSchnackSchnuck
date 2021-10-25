// define rounds
let form = document.querySelector("form");
let maxRounds = document.querySelector(".max");
let nowRounds = document.querySelector(".now");
nowRounds.innerHTML = 0;

// define game elements
let btnSchere = document.querySelector(".scissors");
let btnStein = document.querySelector(".stone");
let btnPapier = document.querySelector(".paper");

let btnSchereSVG = document.querySelector(".scissors img");
let btnSteinSVG = document.querySelector(".stone img");
let btnPapierSVG = document.querySelector(".paper img")

let scoreMe = document.querySelector(".score-me");
scoreMe.innerHTML = 0;
let scoreYou = document.querySelector(".score-you");
scoreYou.innerHTML = 0;

let clicks = 0;
let clicked = 0;

let showPlayedMe = document.querySelector(".wrapper-me .show-played");
let showPlayedYou = document.querySelector(".wrapper-you .show-played");

let showFinal = document.querySelector(".show-final");

// define reset button
let reset = document.querySelector(".btn-again");

// read the rounds form
function defRounds() {
  for (let i = 0; i < form.length; i++)
    if (form[i].checked) {
      clicks = form[i].value;
      maxRounds.innerHTML = clicks;
      console.log("mögliche Clicks " + clicks);
      showFinal.style.opacity = "0";
    }
}
form.addEventListener("input", defRounds);

// function of game
function game(rps) {
  let ranNum = Math.floor(Math.random() * 3 + 1);
  console.log("meine Auswahl: " + ranNum);
  if (clicks == 0) {
    showFinal.innerHTML = "Bitte wähle die Anzahl der Runden aus.";
    showFinal.style.opacity = "1";
  } else if (ranNum == 1 && rps == 1) {
    nowRounds.innerHTML++;
    changeColor("Schere", "Schere", "#5b5b5b", "#5b5b5b");
    changeBtn(btnSchereSVG, "icons-grey");
  } else if (ranNum == 2 && rps == 2) {
    nowRounds.innerHTML++;
    changeColor("Stein", "Stein", "#5b5b5b", "#5b5b5b");
    changeBtn(btnSteinSVG, "icons-grey");
  } else if (ranNum == 3 && rps == 3) {
    nowRounds.innerHTML++;
    changeColor("Papier", "Papier", "#5b5b5b", "#5b5b5b");
    changeBtn(btnPapierSVG, "icons-grey");
  } else if (ranNum == 1 && rps == 2) {
    nowRounds.innerHTML++;
    scoreYou.innerHTML++;
    changeColor("Schere", "Stein", "#ac3c13", "green");
    changeBtn(btnSteinSVG, "icons-green");
  } else if (ranNum == 1 && rps == 3) {
    nowRounds.innerHTML++;
    scoreMe.innerHTML++;
    changeColor("Schere", "Papier", "green", "#ac3c13");
    changeBtn(btnPapierSVG, "icons-red");
  } else if (ranNum == 2 && rps == 1) {
    nowRounds.innerHTML++;
    scoreMe.innerHTML++;
    changeColor("Stein", "Schere", "green", "#ac3c13");
    changeBtn(btnSchereSVG, "icons-red");
  } else if (ranNum == 2 && rps == 3) {
    nowRounds.innerHTML++;
    scoreYou.innerHTML++;
    changeColor("Stein", "Papier", "#ac3c13", "green");
    changeBtn(btnPapierSVG, "icons-green");
  } else if (ranNum == 3 && rps == 1) {
    nowRounds.innerHTML++;
    scoreYou.innerHTML++;
    changeColor("Papier", "Schere", "#ac3c13", "green");
    changeBtn(btnSchereSVG, "icons-green");
  } else if (ranNum == 3 && rps == 2) {
    nowRounds.innerHTML++;
    scoreMe.innerHTML++;
    changeColor("Papier", "Stein", "green", "#ac3c13");
    changeBtn(btnSteinSVG, "icons-red");
  }
  function changeColor(meInput, youInput, coMe, coYou) {
    showPlayedMe.innerHTML = meInput;
    showPlayedMe.style.color = coMe;
    showPlayedMe.style.opacity = "1";
    showPlayedYou.innerHTML = youInput;
    showPlayedYou.style.color = coYou;
    showPlayedYou.style.opacity = "1";
  }
  function changeBtn(BTN, colorClass) {
    BTN.classList.add(colorClass);
    setTimeout(() => BTN.classList.remove(colorClass), 800);
  }
}

function countClicks() {
  clicked++;
  console.log("geklickt: " + clicked);
  console.log("mögliche clicks: " + clicks);
  if (nowRounds.innerHTML == 0) {
    clicked = 0;
  } else if (clicked == clicks && scoreYou.innerHTML < scoreMe.innerHTML) {
    showTextEditButtons("Du hast verloren", "#ac3c13");
  } else if (clicked == clicks && scoreYou.innerHTML > scoreMe.innerHTML) {
    showTextEditButtons("Du hast gewonnen", "green");
  } else if (clicked == clicks && scoreYou.innerHTML == scoreMe.innerHTML) {
    showTextEditButtons("Unentschieden", "#5b5b5b");
  }
  function showTextEditButtons(text, color) {
    showFinal.innerHTML = text;
    showFinal.style.color = color;
    showFinal.style.opacity = "1";
    btnSchere.classList.add("btn-off");
    btnStein.classList.add("btn-off");
    btnPapier.classList.add("btn-off");
    btnPapier.style.backgroundColor = "rgb(200, 200, 200)";
    btnSchere.style.backgroundColor = "rgb(200, 200, 200)";
    btnStein.style.backgroundColor = "rgb(200, 200, 200)";
  }
}

btnSchere.addEventListener("click", () => {
  game(1);
  countClicks();
});
btnStein.addEventListener("click", () => {
  game(2);
  countClicks();
});
btnPapier.addEventListener("click", () => {
  game(3);
  countClicks();
});

// reset game
function resetGame() {
  window.location.reload();
}

reset.addEventListener("click", resetGame);