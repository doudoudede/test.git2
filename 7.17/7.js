var path=require('path')
var http=require('http')
http.createServer((req,res)=>{
    //path.resolve 会将最后一个参数转化为绝对路径  webpack
    // var oldpath=path.resolve('./pub')
    //path.normalize() 路径的格式化(纠正路径)
    // var oldpath=path.normalize('/aa')
    //path.extname  获取文件扩展名
    // var oldpath=path.extname('index.html')
    //path.format()  将对象转化为路径
    // var oldpath=path.format({
    //     root:"",            //根
    //     dir:"c:\aa",       //目录
    //     base:"\p"           //最终
    // })
    // var oldpath=path.join('/x/ccc')
    // console.log(oldpath)
    res.end()
}).listen(3000)