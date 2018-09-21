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
var isX = document.querySelector(".x");


var playerOneWin = "player X wins";
var playerTwoWin = "player O wins";

window.addEventListener("click", function(event) {
  var clickedElement = event.target;

  // 0 = o, 1 = x

  if (
    clickedElement.classList.contains("field") &&
    !clickedElement.classList.contains("x") &&
    playerturn === 0
  ) {
    clickedElement.classList.add("o");
    playerturn = 1;
  }
  if (
    clickedElement.classList.contains("field") &&
    !clickedElement.classList.contains("o") &&
    playerturn === 1
  ) {
    clickedElement.classList.add("x");
    playerturn = 0;
  }


});
