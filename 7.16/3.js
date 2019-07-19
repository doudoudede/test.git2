var fs=require('http')
fs.createServer((req,res)=>{
    res.end('你快')
}).listen(7000)