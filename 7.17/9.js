var queryString=require('querystring')
// console.log(queryString)

var sd=require("silly-datetime")
console.log(sd)
var time=sd.format(new DataCue())
console.log(time)