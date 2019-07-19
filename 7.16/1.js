var http=require('http')
http.createServer((request,response)=>{
    //request请求  response 响应
    console.log('你好：node')
    response.end('已结束响应')
}).listen(1000)