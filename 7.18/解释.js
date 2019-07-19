var http=require('http')  //引入服务器模块
var fs=require("fs")      //fs=file   system  文件系统
var ejs=require('ejs')    //ejs模板引擎
//创建服务器
http.createServer((req,res)=>{
    //require  请求   response响应
    var list=['1','2','3','4','5']
    fs.readFile('./1.ejs',(err,data)=>{
        var template=data.toString()
        var result=ejs.render(template,{list:list})
        res.end(result)
    })
}).listen(3000)   //监听端口

