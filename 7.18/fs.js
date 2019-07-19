var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    //先读后写
    // fs.readFile('./1.txt'，)
    //复制
    // fs.copyFile("./1.txt",'./2.txt',(err,data )=>{
    //     if(err){
    //         throw error
    //     }
    //     res.end('123')
    // })
    // //改名
    // fs.rename('./1.txt',"./5.txt",(err)=>{
    //     if(err){
    //                 throw error
    //             }
    //             res.end('123')
    // })
    //unlink 删除
    // fs.unlink('./1.txt',(err)=>{
    //     if(err){
    //                 throw error
    //             }
    //             res.end('123')
    // })
    //mkdir  创建目录
    // fs.mkdir('./001.txt',(err)=>{
    //     res.end('123')
    // })
    // fs.rmdir('./001.txt',(err)=>{
    //     res.end('123')
    // })
    //
    // fs.readdir('./001.txt',(err,data)=>{
    //     if(err){
    //         throw error
    //     }
    //     res.end('123')
    // })
    //查看目录
    // fs.stat('./001.txt',(err,data)=>{
    //     console.log(data.isFile())
    //     console.log(data.isDirectory())
    //     res.end('123')
    // })
    var stream=fs.createReadStream('./1.txt')
    var content=''
    stream.on('data',(chunk)=>{
        console.log(chunk)
        content+=chunk
        console.log(content)
    })
    stream.on('end',(err)=>{
        console.log('数据已接收完毕')
        res.end(content.toString())
    })
    
}).listen(3000)