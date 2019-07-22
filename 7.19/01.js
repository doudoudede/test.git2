var http=require('http')
var express=require('express')
var bodyParser=require('body-parser')
var path=require('path')
var public=path.resolve(__dirname,'static')
var app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:false}))

app.use(express.static(public))
app.get('/',(req,res)=>{
    res.send('首页')
})
app.post('/dopost',(req,res)=>{
    var body=req.body
    console.log(body)
    res.send('post数据传输成功')
})
app.listen(3000)