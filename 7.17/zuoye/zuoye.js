var http=require('http')
var ejs=require('ejs')
var fs=require('fs')
var url=require('url')
http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"text/html;charset:utf-8"})
    var date={
        teacher:[
            {
                name:"lufei",
                type:"teacher",
                number:7846584652
            },{
                name:"xiangjishi",
                type:"student",
                number:7846584652
            }
        ]
    }
    fs.readFile('./ku.ejs',(err,data)=>{
        var template=data.toString()
        // console.log(template)
        var list=ejs.render(template,date)
        var usename=url.parse(req.url,true).query
        var tea=list.teacher
        for(var i=0;i<tea;i++){
            if(usename==tea[i].name){
                res.end(tea)
            }else{
                res.end('不存在')
            }
        }
        
    })
}).listen(3000)