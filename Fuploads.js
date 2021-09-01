const express = require('express')
const app = express()
const path = require('path')
require('ejs')
const multer = require('multer')

app.set('view engine','ejs')
var storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})

var upload = multer({storage:storage}).single('myfile')

app.get('/',(req,res)=> {
    console.log('Homepage')
    res.render('FileUpload')
})
app.post('/upload',(req,res)=> {
    upload(req,res,(err)=>{
        if(err)
            return res.end("Error while uploading files")
    })
    console.log('File uploaded..')
    res.end("File Uploaded Successfully..")
})

app.listen(3000)
