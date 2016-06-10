//Libraries
var GetData = require('./classes/getdata');
var async = require('async');

//callback(err, result)
module.exports.getJson = function(baseUrl, elementId, elementItems, callback) {
  var worker = new GetData(baseUrl);
  worker.getData(elementItems, elementId, function(err, result) {
    if (err)
      return callback(true, err);
    callback(false, result);
  });
};

//callback(result)
module.exports.getJsonFromBatchId = function(baseUrl, elementIds, elementItems, callback) {
  var array = [];
  var worker = new GetData(baseUrl);

  async.each(elementIds, function(item,cb){
    worker.getData(elementItems, item, function(err, result) {
      if (err)
        array.push({err:baseUrl+item+" was error!"});
      array.push(result);
      cb();
    });
  }, function(err){
    if (err)
      return callback(err);
    callback(array);
  });

};