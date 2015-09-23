
var playerArray = [];
var player1Moves = [];
var player1Moves = [];


function Player(mark) {
  this.mark = mark;
}

Player.prototype.mark = function() {
  return this.mark;
}

function Space(x_coordinate, y_coordinate) {
  this.x_coordinate = x_coordinate;
  this.y_coordinate = y_coordinate;
  this.markedBy;
}

Space.prototype.x_coordinate = function() {
  return this.x_coordinate;
}

Space.prototype.y_coordinate = function() {
  return this.y_coordinate;
}

Space.prototype.markBy = function(player) {
  this.markedBy = player;
}

function initGrid() {
  for(var i = 1; i <=3; i++){
    $("#grid").append("<tr>");
    for(var j = 1; j<=3; j++){
      $("#grid").append("<td id='"+ i + "_" + j + "'><p><span class='mark'></span></p></td>");
    }
    $("#grid").append("</tr>");
  }
}

function togglePlayer(player) {
  if(player == playerArray[0]){
    player = playerArray[1];
  } else {
    player = playerArray[0];
  }
  return player;
}


$(document).ready(function() {

  var player1;
  var player2;
  var currentPlayer;

  $("#mark_X").click(function() {
    player1 = new Player("X");
    player2 = new Player("O");
    playerArray.push(player1);
    playerArray.push(player2);
    $(".chooseMark").hide();
    currentPlayer = player1;
  });


  $("#mark_O").click(function() {
    player1 = new Player("O");
    player2 = new Player("X");
    playerArray.push(player1);
    playerArray.push(player2);
    $(".chooseMark").hide();
    currentPlayer = player1;
  });

  initGrid();


  $("#1_1").click(function() {
    $("#1_1 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#1_2").click(function() {
    $("#1_2 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#1_3").click(function() {
    $("#1_3 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#2_1").click(function() {
    $("#2_1 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#2_2").click(function() {
    $("#2_2 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#2_3").click(function() {
    $("#2_3 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#3_1").click(function() {
    $("#3_1 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#3_2").click(function() {
    $("#3_2 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });

  $("#3_3").click(function() {
    $("#3_3 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
  });



}); // end of document
