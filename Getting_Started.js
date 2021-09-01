var http = require('http')
var fs = require('fs')
var url = require('url')
http.createServer(function(req,res){
    var q = url.parse(req.url,true)
    var FileName = '.' + q.pathname
    fs.readFile(FileName,function(err,data){
        if(err){
            res.writeHead(404,{'content_type':'text/plane'})
            res.write("Error 404 ! File not found..")
        }
        else{
            res.writeHead(200,{'content_type':'text/plane'})
            res.write(data)
        }
    })
}).listen(3000)
