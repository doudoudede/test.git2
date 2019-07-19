var http = require('http')
var fs = require('fs')
var art = require('art-template')
http.createServer((req, res) => {
    var newData = ['1', '2', '3']
    fs.readFile('./index.art', (err, data) => {
        var template = data.toString()  
        var result = art.render(template, {newData:newData})
        res.end(result)
    })
}).listen(3000)