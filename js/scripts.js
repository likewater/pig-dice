// VARIABLES
var turnScore = 0;
var player1;
var player2;
var goal = 100;
var currentPlayer;
var currentScore;
var rollValue;
var rollScore = 0;

// PLAYER CONSTRUCTOR - CREATES PLAYER OBJECTS
function Player(name){
  this.name = name;
  this.totalScore = 0;
}

// FUNCTION ROLL - SIMULATES ROLL OF ONE DICE AND RETURNS VALUES 1 THROUGH 6
function Roll(){
	rollScore = Math.floor(Math.random() * (1 - 6 + 1)) + min;
  return rollScore;
};

// ON CLICK OF ROLL BUTTON PERFORMS THE ROLL FUNCTION
  $("#roll").click(function() {
   Roll();
   currentScore += rollScore;
   console.log(currentScore);
  });

// ON CLICK OF HOLD ADDS CURRENT ROLL SCORE TO PLAYERS CURRENTSCORE IN PLAYER OBJECT AND SWITCHES TO OTHER PLAYER
  $("#hold").click(function(){
    // MAKE SCREEN CHANGE TO SHOW OTHER PLAYER
  });

// PAGE LOAD FUNCTION
 $(document).ready(function(){
   $("form#playGame").submit(function(event) {
     event.preventDefault();
     console.log("submit function called")
     var inputtedName = $("input#playerOne").val();
     var newPlayer = new Player(inputtedName);
     // DISPLAY MESSAGE FOR PLAYER ONE TO GO FIRST
    console.log(newPlayer);
    var newPlayer = new Player ("Computer");
    console.log(newPlayer);
  });
});
