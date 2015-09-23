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

$(document).ready(function() {

  var player1;
  var player2;

  $("#mark_X").click(function() {
    player1 = Player("X");
    player2 = Player("O");
    $(".chooseMark").hide();
  });


  $("#mark_O").click(function() {
    player1 = Player("O");
    player2 = Player("X");
    $(".chooseMark").hide();
  });


  $("td").last().click(function(){
    $(".mark").append("X");
  });



}); // end of document
