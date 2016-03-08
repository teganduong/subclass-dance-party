$(document).ready(function() {
  window.dancers = [];
  var id = 0;
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
    dancer.$node[0].setAttribute('id', id);
    id++;
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addBouncyDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancer.$node[0].setAttribute('id', id);
    id++;
    dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.bouncy-dancer').click( function(event) {
      audioElement.play();
    });
  });

  $('.addSquishyDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancer.$node[0].setAttribute('id', id);
    id++;
    dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.squishy-dancer').click(function(event) {
      var i = 0;
      var fishTop = $(this).css('top');
      var fishLeft = $(this).css('left');
      Dancer.prototype.move.call(window.dancers[i].$node, fishTop, fishLeft);
      var that = this;
      setTimeout(function() {
        $(that).toggle();
      }, 1000);
    });
  });

  $('.lineUpDancersButton').on('click', function(event) {    
    var centerVert = $('body').width() / 2;
    var bodyTop = 30;
    for (var i = 0; i < window.dancers.length; i++) {
      Dancer.prototype.lineUp.call(window.dancers[i], bodyTop, centerVert);
      bodyTop += 50;
    }
  });

  $('.scatterDancersButton').on('click', function(event) {    
    var leftAlign, topAlign;
    for (var i = 0; i < window.dancers.length; i++) {
      leftAlign = $('body').width() * Math.random();
      topAlign = $('body').height() * Math.random();
      Dancer.prototype.move.call(window.dancers[i].$node, topAlign, leftAlign);
    }
  });
  
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'audio/dogBark-1-1.mp3');

  $('.eatFishButton').on('click', function(event) {

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