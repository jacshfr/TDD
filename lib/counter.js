'use strict';

var Counter = function() {
  this.counter = 0;
  this.increment = function(n) {
    return this.counter += n;
  };
  this.getValue = function() {
    return this.counter;
  };
};

module.exports = Counter;
