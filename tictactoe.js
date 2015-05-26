var play = function() {
  while (!win || !tie) {
    takeTurns()
  }
  if (player1.winner === true) {
    alert("Player1 wins!")
  } else if (player2.winner === true) {
    alert("Player 2 wins!")
  } else {
    alert("Tie Game!")
  }
};

var win = function() {
  if (player1.winner === true || player2.winner === true) {
    return true
  } else {
    return false
  }
};

var tie = function() {
  return false
};

function Player(piece) {
  this.piece = "X",
  this.winner = false
}

var player1 = new Player("X");
var player2 = new Player("O");
