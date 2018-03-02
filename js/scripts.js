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
  alert("Sorry " + this.participantName + ", OOPS! HAHA! You rolled a 1! Wait for your next turn!")
  } else {
  this.temporaryscore += this.roll;
  }
}

// hold option
Contender.prototype.hold = function () {
  this.totalscore += this.temporaryscore;
  this.temporaryscore = 0;
  // this.changeturn();
  alert(this.participantName + ", your turn is over, SWITCH UP!");
}

// // changing turn
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
