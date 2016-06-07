//Libraries
var cheerio = require('cheerio');
var request = require('request');
var moment = require('moment');

//Get data class + constructor
function Data(baseUrl, elementId) {
  this.baseUrl = baseUrl;
  this.elementId = elementId;
};

//Function in data class
Data.prototype.getData = function(elementItem,callback) {
  var url = this.baseUrl + this.elementId;
  var output = moment();

  request(url, function(error, response, html) {
    if (error)
      return callback(true, error);

    //Download HTML
    var $ = cheerio.load(html);

    //Ready for dynamic key adding
    var json = {};

    //Date is mandatory key
    json.date = output.toString();

    //Loop through elements
    //Element [{type: 'class or id',classid: 'element name', key: 'name of the field'}]
    for (var element of elementItem) {
      var classid = "";
      if (element.type == 'id') {
        classid = '#' + element.classid;
      } else {
        classid = '.' + element.classid;
      }
      if ($(classid).length) {
        $(classid).filter(function() {
          var data = $(this);
          //json[element.key] = data.text().replace(/(\r\n|\n|\r)/gm, "").trim();
          json[element.key] = data.text().trim();
        });
      }
    }

    callback(false, json);
  });
};

//callback(err, result)
module.exports.getJson = function(baseUrl, elementId, elementItems, callback) {
  var data = new Data(baseUrl, elementId);
  data.getData(elementItems, function(err,result){
    if (err)
      return callback(true,err);
    callback(false,result);
  });
};
