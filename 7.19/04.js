var express=require('express')
var router=express.Router()
var app=express()
app.use(router)
var rannum=function(max,min){
    var num=Math.ceil(Math.random()*(max-min)+min)
    return num
}
var str='abcdefghijklmnopqretuvwxyz0123456789'
app.get('/',(req,res)=>{
    var number=''
    for(var i=0;i<4;i++){
        number+=str[rannum(str.length-1,0)]
    }
    res.send(number)
})
app.listen(3000)