// var a=1  
// module.exports={
//     b:2
// }

function showIndex(req,res){
    res.end("首页")
}
function showAbout(req,res){
    res.end("关于")
}
function shownews(req,res){
    res.end("新闻")
}
function show404(req,res){
    res.end('不存在')
}
module.exports={
    showIndex:showIndex,
    showAbout:showAbout,
    shownews:shownews,
    show404:show404
}