var express=require('express')
var app=express()
var fs=require('fs')
// app.engine('views engine','ejs')
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/',(req,res)=>{
    //express 包含ejs  res=》render
    res.render('02',{
        list:['1','2','3','4']
    })
})
app.listen(3000)