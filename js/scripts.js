var playerArray = [];
var winningArray = [ ["1_1", "1_2", "1_3"], ["2_1", "2_2", "2_3"], ["3_1", "3_2", "3_3"], ["1_1", "2_1", "3_1"], ["1_2", "2_2", "3_2"], ["1_3", "2_3", "3_3"], ["1_1", "2_2", "3_3"], ["3_1", "2_2", "1_3"] ];

function isWinning(player){
  var isMatch = [false, false, false];
  for (var i = 0; i < winningArray.length; i++){
    for (var j = 0; j < winningArray[i].length; j++){
      for (var k = 0; k < player.moves.length; j++){
        if(winningArray[j] ===  playerArray[k]){
          isMatch[j] = true;
        }
      }

      if(isMatch === [true, true, true]){
        return true;
      }else {
        return false;
      }
    }
  }
}


function Player(mark) {
  this.mark = mark;
  this.moves = [];
}

Player.prototype.mark = function() {
  return this.mark;
}

Player.prototype.moves = function() {
  return this.moves;
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
      $("#grid").append("<td id='"+ i + "_" + j + "'><span class='mark'></span></td>");
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

// function initClicks(currentPlayer) {
//   for (var x = 1; x <= 3; x++) {
//     for (var y = 1; y <= 3; y++) {
//       $("#" + x + "_" + y).click(function() {
//         $("#" + x + "_" + y + " .mark").text(currentPlayer.mark);
//         currentPlayer = togglePlayer(currentPlayer);
//       });
//     }
//   }
// } // not working =(




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

  // initClicks(currentPlayer);

  $("#1_1").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    // if(isWinning(currentPlayer)){
    //   $(".win").text(currentPlayer.mark + " win!")
    // }
    $("#1_1 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#1_2").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#1_2 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#1_3").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#1_3 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#2_1").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#2_1 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#2_2").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#2_2 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#2_3").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#2_3 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#3_1").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#3_1 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#3_2").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#3_2 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });

  $("#3_3").click(function() {
    currentPlayer.moves.push($(this).attr('id'));
    $("#3_3 .mark").text(currentPlayer.mark);
    currentPlayer = togglePlayer(currentPlayer);
    $(".whichTurn").text(currentPlayer.mark + "\'s turn");
  });



}); // end of document
