// VARIABLES
var turnScore = 0;
var player1;
var player2;
var goal = 100;
var currentPlayer;
var currentScore;
var rollValue;

// PLAYER CONSTRUCTOR - CREATES PLAYER OBJECTS
function Player(name){
  this.name = name;
  this.totalScore = 0;
};

// // FUNCTION SCORE - CREATES SCORE OBJECT
// function currentScore(playerName, rollValue){
//   this.player
//   this.currentScore;
// };

// FUNCTION ROLL - SIMULATES ROLL OF ONE DICE AND RETURNS VALUES 1 THROUGH 6
function Roll(){
//math random function
return number to Score function
};

// ON CLICK OF ROLL BUTTON PERFORMS THE ROLL FUNCTION
  $("#roll").click(function() {

  });

// ON CLICK OF HOLD ADDS CURRENT ROLL SCORE TO PLAYERS CURRENTSCORE IN PLAYER OBJECT AND SWITCHES TO OTHER PLAYER
  $("#hold").click(function(){
    // MAKE SCREEN CHANGE TO SHOW OTHER PLAYER
  });

// PAGE LOAD FUNCTION
 $(document).ready(function(){
   $("form#playGame").submit(function(event) {
     event.preventDefault();
     var inputtedName = $("#name").val();
     var newPlayer = new Player(inputtedName);
     // DISPLAY MESSAGE FOR PLAYER ONE TO GO FIRST

    
});
