var http=require('http')
var url=require('url')
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    //数据库
    var admin={
        usename:"bot",
        password:"123"
    }
    var userobj=url.parse(req.url,true).query
    console.log(userobj.username)
    console.log(userobj.password)
    if(userobj.username==admin.usename&&userobj.password==admin.password){
        res.writeHead(200,{"Content-type":"text/html;charset:utf-8"})
        res.end('登录成功')
    }else{
        res.end('登录失败')
    }
}).listen(3000)