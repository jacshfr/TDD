var expect = require('chai').expect;
var Counter = require('../../lib/counter');

describe('Counter test', function() {
  var newCounter;

  beforeEach(function() {
    newCounter = new Counter();
  });

  describe('constructor', function() {
    it('counter should start at 0', function() {
      expect(newCounter.counter).to.eql(0);
    });

    it('counter should increment 1', function() {
      expect(newCounter.increment(1)).to.eql(1);
    });

    it('should return counters value', function() {
      expect(newCounter.getValue()).to.equal(0);
    });

  });
});
