var http=require('http')
var fd=require('formidable')
var sd=require('silly-datetime')
var path=require('path')
var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    }
    if(req.url=='/dopost'){
        var form=new fd.IncomingForm()
        // console.log(form)
        form.parse(req,function(err,fields,files){
            form.uploadDir='./upload'
            //fields 文本域    files文件域
            console.log(files)
            var oldpath=files.pic.path
            console.log(oldpath)
            var picurl2=path.extname(files.pic.name)
            var time=sd.format(new Date(),'YYYYMMDD-hhmmss')
            var newpath='upload/'+time+picurl2
            console.log(newpath)
            console.log(time)
            fs.rename(oldpath,newpath,(err)=>{
                res.end(newpath)
            })
        })
    }
    
}).listen(3000)