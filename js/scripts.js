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
