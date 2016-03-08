var joinTheParty = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('player-1');

};

joinTheParty.prototype = Object.create(Dancer.prototype);
joinTheParty.prototype.constructor = joinTheParty;