//Requires
var getdaze = require('./getdaze');
var assert = require('chai').assert;

//Test parameters
var url = "http://www.amazon.co.jp/gp/product/";
var id = 'B002WN1MXC';
var elements = [{
  type: 'id',
  classid: 'productTitle',
  key: "name"
}, {
  type: 'id',
  classid: 'priceblock_ourprice',
  key: "price"
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
          assert.typeOf(result['price'], 'string');
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