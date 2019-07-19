var http=require('http')
var url=require('url')
// console.log(url)
http.createServer((req,res)=>{
    //url.parse(解析地址栏) 第二个参数为true，就为一个对象
    var query=url.parse(req.url).query
    console.log(query)
    // var query=url.resolve('http://127.1.1.1:3000','user=11')
    // console.log(query)
    //格式化  参数  对象
    // var query=url.format({})
}).listen(3000)