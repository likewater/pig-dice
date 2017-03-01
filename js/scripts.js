// VARIABLES
var turnScore = 0;
var player1;
var player2;
var goal = 100;
var currentPlayer;
var currentScore = 0;
var rollValue;
var rollScore = 0;
var Players = [];
var activePlayer;

// PLAYER CONSTRUCTOR - CREATES PLAYER OBJECTS
function Player(name){
  this.name = name;
  this.totalScore = 0;
  function {
    totalScore += turnScore
  }
};




// PAGE LOAD FUNCTION
 $(document).ready(function(){


   // ON CLICK OF ROLL BUTTON PERFORMS THE ROLL FUNCTION

while activePlayer.totalScore < 100{

     $("#roll").click(function() {
      Roll();

      turnScore = turnScore + rollScore;
      console.log(rollScore);
      $(".rollScore").text(rollScore);
      $(".turnScore").text(turnScore);
      Player.prototype.scoreKeeper = function() {
        return this.totalScore + turnScore;
      }
     });

     // FUNCTION ROLL - SIMULATES ROLL OF ONE DICE AND RETURNS VALUES 1 THROUGH 6
     function Roll(){
     	rollScore = Math.floor(Math.random() * 5 + 1);
       return rollScore;
     };
     // switch player

     function Switch(){
       if (activePlayer = Players[0]){
       activePlayer = Player[1]
      } else {  (activePlayer = Players[1]){
       activePlayer = Player[0]
     };
   };
};


     // ON CLICK OF HOLD ADDS CURRENT ROLL SCORE TO PLAYERS CURRENTSCORE IN PLAYER OBJECT AND SWITCHES TO OTHER PLAYER
       $("#hold").click(function(){
         // MAKE SCREEN CHANGE TO SHOW OTHER PLAYER

       });


   $("form#playGame").submit(function(event) {
     event.preventDefault();
     console.log("submit function called")
     var inputtedName = $("input#playerOne").val();
     var newPlayer = new Player(inputtedName);
     Players.push(newPlayer);
     // DISPLAY MESSAGE FOR PLAYER ONE TO GO FIRST
     console.log(Players[0]);
     var newPlayer = new Player ("Computer");
     Players.push(newPlayer);
     console.log(Players[1]);
  });
});
