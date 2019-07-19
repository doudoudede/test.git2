var http=require('http')
var bar=require('./public/bar')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset:utf-8"})
    if(req.url=="/index"){
        bar.showIndex(req,res)
    }else if(req.url=='/about'){
        bar.showAbout(req,res)
    }else if(req.url=='/news'){
        bar.shownews(req,res)
    }else if(req.url=='/404'){
        bar.show404(req,res)
    }else{
        res.end('hello')
    }
}).listen(3000)