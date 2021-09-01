var http = require('http')
var fs = require('fs')
var url = require('url')
http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname
    console.log("Requested for file"+pathname)
    fs.readFile(pathname.substr(),function(err,data){
        if(err){
            console.log(err)
            res.writeHead(404,{'content-type':'text/html'})
        }
        else{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data.toString())
        }
        res.end()
    })
}).listen(8081)
console.log("Server Running..")