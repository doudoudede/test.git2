//url
var http=require('http')
var fs=require('fs') ///模块
http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == '/red'){
        fs.readFile('./red.html',(err,data)=>{
            res.writeHead('200',{"Content-Type":"text/html;charset=UTF8"})
            // res.end(data)
        })
    }else if(req.url == '/green'){
        fs.readFile('./green.html',(err,data)=>{
            res.end(data)
        })
    }
    // res.end(req.url)
}).listen(5000)
