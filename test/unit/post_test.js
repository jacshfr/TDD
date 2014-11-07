var expect = require('chai').expect;
var Post = require('../../lib/post');

describe('Post object tests', function() {
  var post;

  beforeEach(function() {
    post = new Post('A test post');
  });

  describe('constructor', function() {
    it('post should be truth (exists)', function() {
      expect(post).to.have.property('title');
    });

    it('post should have title property', function() {
      expect(post).to.have.property('title');
    });

    it('post title property matches beforeEach', function() {
      expect(post.title).to.equal('A test post');
    });

  });
});
