var http = require('http')
var formidable = require('formidable')
var fs = require('fs')

http.createServer(function(req,res){
    if(req.url == '/uploadfile'){
        var form = new formidable.IncomingForm()
        form.parse(req,function(err,field,files){
            var oldpath = files.filetoupload.path
            var newpath = '/root/Desktop/' + files.filetoupload.name
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                res.write('File uplaoded and mo')
                res.end()
            })
        })
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<form action="uploadfile" method="post" encrypt="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"> <br>')
        res.write('<input type="submit">')
        res.write('</form>')
        return res.end()
    }
}).listen(8081)

