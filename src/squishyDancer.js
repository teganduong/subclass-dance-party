var makeSquishyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('magikarp');

};

makeSquishyDancer.prototype = Object.create(Dancer.prototype);
makeSquishyDancer.prototype.constructor = squishyDancer;

makeSquishyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
};