var cookie=require('cookie-parser')
var express=require('express')
var app=express()
app.use(cookie())
app.get('/',(req,res)=>{
    res.send('首页')
})
app.get('/set',(req,res)=>{
    res.cookie('usename','tom',{"maxAge":20000})
    res.send('cookie设置成功')
})
app.get('/get',(req,res)=>{
    var name=req.cookies.usename
    console.log(name)
    res.send('cookie获取成功'+name)
})
app.listen(3000)