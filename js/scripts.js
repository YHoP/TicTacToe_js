var playerArray = [];

function Player(mark) {
  this.mark = mark;
}

Player.prototype.mark = function() {
  return this.mark;
  // console.log("this mark :" + this.mark);
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

function toggleMark(currentMark) {
  if(currentMark === playerArray[0].mark){
    currentMark = playerArray[1].mark;
  } else {
    currentMark = playerArray[0].mark;
  }
}

$(document).ready(function() {
  var player1;
  var player2;
  var currentMark;

  $("#mark_X").click(function() {
    player1 = new Player("X");
    player2 = new Player("O");
    playerArray.push(player1);
    playerArray.push(player2);
    $(".chooseMark").hide();
    currentMark = player1.mark;
    console.log(currentMark);
  });


  $("#mark_O").click(function() {
    player1 = new Player("O");
    player2 = new Player("X");
    playerArray.push(player1);
    playerArray.push(player2);
    $(".chooseMark").hide();
    currentMark = player1.mark;
    console.log(currentMark);
  });

  initGrid();


  $("#1_1").on( "click", function() {
    // console.log($(this));
    $("#1_1 .mark").text(currentMark);
    toggleMark(currentMark);
  });


  $("#2_2").click(function() {
    $("#2_2 .mark").text(currentMark);
    toggleMark(currentMark);
    console.log(currentMark);
  });


}); // end of document
