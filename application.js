$(document).ready(function(){
  var count = 0
  var counter = function(x) {
    return x%2
  }
  $('.cell').click(function(){
    if ($(this).html() === ""){
    move(players[counter(count)], $(this))
    count +=1

    if (winner()){
      if(!alert("Player" + counter(count) + " wins!")){window.location.reload();}
    }
  }
  })
});

var winner = function() {
  var row1 = []
  $('#row1 .cell').each(function() { row1.push($(this).text()) })
  var row2 = []
  $('#row2 .cell').each(function() { row2.push($(this).text()) })
  var row3 = []
  $('#row3 .cell').each(function() { row3.push($(this).text()) })
  var col1 = []
  $('.col1').each(function() { col1.push($(this).text()) });
  var col2 = []
  $('.col2').each(function() { col2.push($(this).text()) });
  var col3 = []
  $('.col3').each(function() { col3.push($(this).text()) });
  var diag1 = [$('#row1 .col1').text(), $('#row2 .col2').text(), $('#row3 .col3').text(),]
  var diag2 = [$('#row1 .col3').text(), $('#row2 .col2').text(), $('#row3 .col1').text(),]
  var xWinner = "X,X,X"
  var oWinner = "O,O,O"
  if (row1.join() === xWinner || row1.join() === oWinner || row2.join() === xWinner || row2.join() === oWinner || row3.join() === xWinner || row3.join() === oWinner || col1.join() === xWinner || col1.join() === oWinner || col2.join() === xWinner || col2.join() === oWinner || col3.join() === xWinner || col3.join() === oWinner || diag1.join() === xWinner || diag1.join() === oWinner || diag2.join() === xWinner || diag2.join() === oWinner) {
    return true
  }
}

var move = function(player, box){
  // if (box.html() !== "X" || box.html() !== "O") {
    box.html(player.piece)
  // }
}

function Player(piece) {
  this.piece = piece,
  this.winner = false
}

var player1 = new Player("X");
var player2 = new Player("O");
var players = [player1, player2]
