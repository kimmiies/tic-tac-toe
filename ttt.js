$(document).on('ready', function() {
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];
  var turn = 0;

  function checkWinner() {

    for(var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];

        var m1 = $("." + combo[0]).hasClass("x")    // m1 = true
        var m2 = $("." + combo[1]).hasClass("x")    // m2 = true
        var m3 = $("." + combo[2]).hasClass("x")    // m3 = true

        var m4 = $("." + combo[0]).hasClass("o")
        var m5 = $("." + combo[1]).hasClass("o")
        var m6 = $("." + combo[2]).hasClass("o")

          if (m1 && m2 && m3){
            alert("X wins!");
            clearBoard();
            return true

      
          } else if (m4 && m5 && m6){
            alert("O wins!");
            clearBoard();
            return true

          }

    return false
  };

// need to return true or false or else it will return undefined.

function checkTie() {
  if (turn === 9 && (checkWinner() === false)){
    alert("tie!");
    clearBoard()
  }
};


function clearBoard() {
  $('td').removeClass('x').removeClass('o').html("")
  turn = 0;
};




// clear board function

 // get rid of classes and html text, reset turn and restart attachHandler method

//   function attachHandler() {
// // ensure click handler has been turned off for everything that may have been click before
//     $(this).off('click');
      $('td').on('click', function (){

        if (turn % 2 === 0) {
          $(this).html('x').addClass('x');
        }else {
          $(this).html('o').addClass('o');
        }

// turn off the click handler for everything that has been clicked
        turn++;
        $(this).off('click');

        checkWinner();
        checkTie();



      });
  // }

});









/*
  1 . $() jquery select function to get DOM element
  every time you click, the turn goes to 0

  2. Count the turn = need to track this because there are only 9 turns.

  3. take the click handler off the thing that was just clicked (this)

  4. player  1 is x, player 2 is o

  5. how do you know someone won? all things with class of x $('.x')
      check winner function

TO DO:

  find the winner
  tell them the winner
  -------------
  detect when therre is stalemate
  have a reset button
  add a computer player (magic squares, no click event for the computer)

*/
