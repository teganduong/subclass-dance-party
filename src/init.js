$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addBouncyDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addSquishyDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpDancersButton').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // var dancerMakerFunction = window[dancerMakerFunctionName];
    // var dancer = new dancerMakerFunction(
    //   $('body').height() * Math.random(),
    //   $('body').width() * Math.random(),
    //   Math.random() * 1000
    // );
    // dancers.push(dancer);
    // $('body').append(dancer.$node);
    var centerVert = $('body').width() / 2;
    var bodyTop = 30;
    for (var i = 0; i < window.dancers.length; i++) {
      Dancer.prototype.lineUp.call(window.dancers[i], bodyTop, centerVert);
      bodyTop += 50;
    }
  });

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'audio/dogBark-1-1.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');

  $('.bouncy-dancer').on('click', function(event) {
    audioElement.play();
  });

// var player1Active = false;

// $('.joinThePartyButton').on('click', function(event) {
//   if (player1Active === false) {
//     var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
//     var dancerMakerFunction = window[dancerMakerFunctionName];
//     var dancer = new dancerMakerFunction(
//       $('body').height() * Math.random(),
//       $('body').width() * Math.random(),
//       Math.random() * 1000
//     );
//     dancers.push(dancer);
//     $('body').append(dancer.$node);
//     player1Active = true;
//   }
// });
// });

// $('.player-1').keydown(function(event) {
//   if (player1Active === false) {
    
//   }
// });
});