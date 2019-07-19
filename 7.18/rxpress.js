var express=require('express')
var app=express()
app.get('./',(req,res)=>{
    res.send('首页')
})
app.get('/about/:id',(req,res)=>{
    res.send('路由参数为'+req.params.id)
    console.log(req.params)
    console.log(req.params.id)
})
app.listen(3000)