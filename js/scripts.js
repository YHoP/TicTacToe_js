var playerArray = [];

function isWinning (player, allSpaces){
  var isWin = false;
  if (allSpaces[0].markedBy === player && allSpaces[1].markedBy === player && allSpaces[2].markedBy === player){
    isWin = true;
  } else if (allSpaces[3].markedBy === player && allSpaces[4].markedBy === player && allSpaces[5].markedBy === player){
    isWin = true;
  } else if (allSpaces[6].markedBy === player && allSpaces[7].markedBy === player && allSpaces[8].markedBy === player){
    isWin = true;
  } else if (allSpaces[1].markedBy === player && allSpaces[4].markedBy === player && allSpaces[8].markedBy === player){
    isWin = true;
  } else if (allSpaces[2].markedBy === player && allSpaces[4].markedBy === player && allSpaces[6].markedBy === player){
    isWin = true;
  } else if (allSpaces[0].markedBy === player && allSpaces[3].markedBy === player && allSpaces[6].markedBy === player){
    isWin = true;
  } else if (allSpaces[1].markedBy === player && allSpaces[4].markedBy === player && allSpaces[7].markedBy === player){
    isWin = true;
  } else if (allSpaces[2].markedBy === player && allSpaces[5].markedBy === player && allSpaces[8].markedBy === player){
    isWin = true;
  } else {
    isWin = false;
  }

  return isWin;
}



function Player(mark) {
  this.mark = mark;
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

function set9Spaces (){
  var allSpaces = [];
  for (var x = 1; x <= 3; x++){
    for (var y = 1; y <= 3; y++){
      var newSpace = new Space(x, y);
      allSpaces.push(newSpace);
    }
  }
  return allSpaces;
}

function findCurrentSpace(x, y, allSpaces) {
  for (var i in allSpaces){
    if (allSpaces[i].x_coordinate == x && allSpaces[i].y_coordinate == y){
      var thisSpace = allSpaces[i];
    }
  }
  return thisSpace;
}

function initGrid() {
  var text;
  for(var x = 1; x <=3; x++){
    text += "<tr id='"+ x +"'>";
    for(var y = 1; y<=3; y++){
      text += "<td class='space' id='" + y + "'><span class='mark'></span></td>";
    }
    text += "</tr>";
  }
  $("#grid").append(text);
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
  initGrid();
  $("#grid").hide();

  $("#mark_X").click(function() {
    player1 = new Player("X");
    player2 = new Player("O");
    playerArray.push(player1);
    playerArray.push(player2);
    $(".chooseMark").hide();
    $("#grid").show();
    currentPlayer = player1;
  });


  $("#mark_O").click(function() {
    player1 = new Player("O");
    player2 = new Player("X");
    playerArray.push(player1);
    playerArray.push(player2);
    $(".chooseMark").hide();
    $("#grid").show();
    currentPlayer = player1;
  });

  var allSpaces = set9Spaces();

  $(".space").click(function() {
    var x = $(this).parent().attr('id');
    var y = $(this).attr('id');

    var thisSpace = findCurrentSpace(x, y, allSpaces);
    if (thisSpace.markedBy === undefined){
      thisSpace.markBy(currentPlayer);
      $(this).text(currentPlayer.mark);

      if ( isWinning(currentPlayer, allSpaces) ){
        $(".win").text(currentPlayer.mark + " Win!");
        $(".whichTurn").hide();
      }

      currentPlayer = togglePlayer(currentPlayer);
      $(".whichTurn").text(currentPlayer.mark + "\'s turn");

    } // end of if

  });


}); // end of document
