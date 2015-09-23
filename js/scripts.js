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

function currentPlayer(player){

}

$(document).ready(function() {
  var player1;
  var player2;
  var currentMark;

  $("#mark_X").click(function() {
    player1 = new Player("X");
    player2 = new Player("O");
    $(".chooseMark").hide();
    currentMark = player1.mark;
  });


  $("#mark_O").click(function() {
    player1 = new Player("O");
    player2 = new Player("X");
    $(".chooseMark").hide();
    currentMark = player1.mark;
  });


  $("td#1_1").click(function(){
    $("#1_1 .mark").text(currentMark);
    currentMark = player2.mark;
  });



}); // end of document
