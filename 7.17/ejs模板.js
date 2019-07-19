var http=require('http')
var ejs=require('ejs')
var fs=require('fs')
http.createServer((req,res)=>{
    var datas={
        list:[
            {
                name:"lufei",
                age:18
            },
            {
                name:"luna",
                age:20
            }
        ]
    }
    fs.readFile('./index.ejs',(err,data) => {
        var template=data.toString()
        console.log(template)
        var result=ejs.render(template,datas)
        res.end(result)
    })
}).listen(3000)