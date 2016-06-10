# getdaze

Get-to-da-ze (ゲットダゼ)
A super stupid web scraper

## Installation

```
npm install getdaze
```

## Sample
### Get data from single page
```
var getdaze = require("getdaze");

//Test parameters
var url = "http://www.amazon.co.jp/gp/product/";
var ids = ['B00TEY2MFY','B00J86OXD2','B000HJPK2C'];
var elements = [{
  type: 'id',
  classid: 'productTitle',
  key: "name"
}, {
  type: 'id',
  classid: 'priceblock_ourprice',
  key: "price"
}];

 getdaze.getJson(url,
        ids[0], elements,
        function(err, result) {
     console.log(result);
 });
```

### Get data from multiple pages 
```
var getdaze = require("getdaze");

//Test parameters
var url = "http://www.amazon.co.jp/gp/product/";
var ids = ['B00TEY2MFY','B00J86OXD2','B000HJPK2C'];
var elements = [{
  type: 'id',
  classid: 'productTitle',
  key: "name"
}, {
  type: 'id',
  classid: 'priceblock_ourprice',
  key: "price"
}];

 getdaze.getJsonFromBatchId(url,
        ids, elements,
        function(result) {
     console.log(result);
 });
```
