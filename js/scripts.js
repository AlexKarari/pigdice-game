//business logic
var player1="";
var player2="";

var tossdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Contender(turn) {
  this.roll = 0;
  this.temporaryscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.participantName;
}

// Dice rolls 1:
Contender.prototype.rollone = function() {
  if (this.roll === 1) {
  this.temporaryscore = 0;
  alert("OOPS! Sorry " + this.participantName + ", You rolled a 1! HAHA! Wait for your next turn!")
  } else {
  this.temporaryscore += this.roll;
  }
}

// hold option
Contender.prototype.hold = function () {
  this.totalscore += this.temporaryscore;
  this.temporaryscore = 0;
  alert(this.participantName + ", your turn is over, SWITCH UP!");
}

Contender.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.participantName + " HURRAY! YOU ARE THE WINNER!!");
  }
}

Contender.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.participantName ="";
}

var clearValues = function(){
  $(".firstPlayerName").val("");
  $(".secondPlayerName").val("");
}


// User Interface
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Contender(true);
    player2 =  new Contender(false);
    $(".player-console").show();
    $(".start-menu").hide();

    var firstPlayerName = $(".firstPlayerName").val();
    $("#firstPlayerName").text(firstPlayerName);

    var secondPlayerName = $(".secondPlayerName").val();
    $("#secondPlayerName").text(secondPlayerName);

    player1.participantName=firstPlayerName;
    player2.participantName=secondPlayerName;

  });

  $("button#new-game").click(function(event){
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = tossdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.temporaryscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = tossdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.temporaryscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});
