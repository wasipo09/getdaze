# getdaze

Get-to-da-ze (ゲットダゼ)
A super stupid web scraper

## Installation

```
npm install getdaze
```

## Sample


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

for (var i of ids){
 getdaze.getJson(url,
        i, elements,
        function(err, result) {
     console.log(result);
 });
}
```

