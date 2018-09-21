var playerturn = 0;
var pos11 = document.querySelector(".pos11");
var pos12 = document.querySelector(".pos12");
var pos13 = document.querySelector(".pos13");
var pos21 = document.querySelector(".pos21");
var pos22 = document.querySelector(".pos22");
var pos23 = document.querySelector(".pos23");
var pos31 = document.querySelector(".pos31");
var pos32 = document.querySelector(".pos32");
var pos33 = document.querySelector(".pos33");
var gameEnd = false;

// classList.contains("x");
// classList.contains("o");

var playerOneWin = "player X wins";
var playerTwoWin = "player O wins";

window.addEventListener("click", function(event) {
  var clickedElement = event.target;

  // 0 = o, 1 = x

  if (gameEnd === true) {
    return;
  }

  if (
    clickedElement.classList.contains("field") &&
    !clickedElement.classList.contains("x") &&
    playerturn === 0
  ) {
    clickedElement.classList.add("o");
    clickedElement.innerText = "O";
    playerturn = 1;
  }
  if (
    clickedElement.classList.contains("field") &&
    !clickedElement.classList.contains("o") &&
    playerturn === 1
  ) {
    clickedElement.classList.add("x");
    clickedElement.innerText = "X";

    playerturn = 0;
  }
});

var intervalTrigger = setInterval(function() {
  if (
    (pos11.classList.contains("x") &&
      pos12.classList.contains("x") &&
      pos13.classList.contains("x")) ||
    (pos21.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos23.classList.contains("x")) ||
    (pos31.classList.contains("x") &&
      pos32.classList.contains("x") &&
      pos33.classList.contains("x")) ||
    (pos11.classList.contains("x") &&
      pos21.classList.contains("x") &&
      pos31.classList.contains("x")) ||
    (pos12.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos32.classList.contains("x")) ||
    (pos13.classList.contains("x") &&
      pos23.classList.contains("x") &&
      pos33.classList.contains("x")) ||
    (pos11.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos33.classList.contains("x")) ||
    (pos13.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos31.classList.contains("x"))
  ) {
    
    gameEnd = true;
    clearInterval(intervalTrigger);
    return console.log(playerOneWin);
  }
  if (
    (pos11.classList.contains("o") &&
      pos12.classList.contains("o") &&
      pos13.classList.contains("o")) ||
    (pos21.classList.contains("o") &&
      pos22.classList.contains("o") &&
      pos23.classList.contains("o")) ||
    (pos31.classList.contains("o") &&
      pos32.classList.contains("o") &&
      pos33.classList.contains("o")) ||
    (pos11.classList.contains("o") &&
      pos21.classList.contains("o") &&
      pos31.classList.contains("o")) ||
    (pos12.classList.contains("o") &&
      pos22.classList.contains("o") &&
      pos32.classList.contains("o")) ||
    (pos13.classList.contains("o") &&
      pos23.classList.contains("o") &&
      pos33.classList.contains("o")) ||
    (pos11.classList.contains("o") &&
      pos22.classList.contains("o") &&
      pos33.classList.contains("o")) ||
    (pos13.classList.contains("o") &&
      pos22.classList.contains("o") &&
      pos31.classList.contains("o"))
  ) {
    
    gameEnd = true;
    clearInterval(intervalTrigger);
    return alert(playerTwoWin);
  }

  console.log("no winner yet eloel, keep trying");
}, 500);
