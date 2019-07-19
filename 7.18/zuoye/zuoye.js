var fs=require('fs')
var http=require('http')
http.createServer((req,res)=>{
    // fs.readdir('../wenjianjia',(err,data)=>{
    //     for(let i=0;i<data.length;i++){
    //         fs.stat('../wenjianjia/'+data[i],(err,date)=>{
    //             // console.log(date)
    //             if(date.isDirectory()==true){
    //                 console.log('../wenjianjia/'+data[i])
    //             }else{
    //                 console.log('123')
    //             }
                
    //         })
    //     }
    //     res.end('123')
    // })
    fs.readdir('../wenjianjia',(err,data)=>{
            for(var i=0;i<data.length;i++){
                
                fs.stat('../wenjianjia/'+data[i],(err,date)=>{
                    // console.log(date)
                    // console.log(this)
                    if(date.isDirectory()==true){
                        // console.log('../wenjianjia/'+data[i])
                    }else{
                        // console.log('123')
                    }
                    
                })
            }
            res.end('123')
        })
}).listen(3000)