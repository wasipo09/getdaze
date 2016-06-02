//Requires
var getdaze = require('./getdaze');
var assert = require('chai').assert;

//Test parameters
var url = "http://wasipo09.github.io/";
var id = 'getdaze';
var elements = [{
  type: 'class',
  classid: 'project-name',
  key: "name"
}, {
  type: 'class',
  classid: 'project-tagline',
  key: "tagline"
}];

//Test cases
describe('Data', function() {
  describe('#getJson()', function() {
    it('should get without error', function(done) {
      getdaze.getJson(url,
        id, elements,
        function(err, result) {
          if (err) throw err;

          done();
        });
    });
    it('should not return undefined', function(done) {
      getdaze.getJson(url,
        id, elements,
        function(err, result) {
          if (err) throw err;

          assert.typeOf(result['name'], 'string');
          assert.typeOf(result['tagline'], 'string');
          done();
        });
    });
    it('should return correct results', function(done) {
      getdaze.getJson(url,
        id, elements,
        function(err, result) {
          if (err) throw err;

          assert.equal('Getdaze',result['name']);
          assert.equal('A super stupid web scraper',result['tagline']);
          done();
        });
    });
    it('should return err', function(done) {
      getdaze.getJson('http://randomashell',
        id, elements,
        function(err, result) {
          assert.equal(true, err);
          done();
        });
    });
  });
});