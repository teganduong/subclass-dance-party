var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('bouncy-dancer');

};

makeBouncyDancer.prototype = Object.create(Dancer.prototype);
makeBouncyDancer.prototype.constructor = bouncyDancer;

makeBouncyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle('bounce', {times: 10}, 'fast');
};