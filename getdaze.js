//Libraries
var cheerio = require('cheerio');
var request = require('request');
var moment = require('moment');

//Functions
//Callback (error, result)
module.exports.getJson = function(baseUrl, elementId, elements, callback) {
    var url = baseUrl + elementId;
    var output = moment();

    request(url, function(error, response, html) {
        if (error)
            return callback(true, null);

        //Download HTML
        var $ = cheerio.load(html);

        //Ready for dynamic key adding
        var json = {};

        //Date is mandatory key
        json.date = output.toString();

        //Loop through elements
        //Element [{type: 'class or id',classid: 'element name', key: 'name of the field'}]
        for (var element of elements) {
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