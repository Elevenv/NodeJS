// var nodemailer = require('nodemailer')
// var http = require('http')
// http.createServer(function(req,res){
//     transporter = nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:'youremail@gmail.com',
//             pass:'hjsadfggwe'
//         }
//     })
//     var mailoptions = {
//         from : 'discordbottravern@gmail.com',
//         to : 'vitthaljadhav1420@gmail.com',
//         subject : 'This msg sent using node js...',
//         text : 'There you go...'
//     }
//     transporter.sendMail(mailoptions,function(err,info){
//         if(err)
//             console.log(err)
//         else
//             console.log('Email sent  '+info.response)
//         res.end()
//     })
// }).listen(3000)

var nodemailer = require('nodemailer')
var http = require('http')
http.createServer(function(req,res){
    transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'username@gmail.com',
            pass : 'passsword'
        }
    })
    var mailoptions = {
        from : 'username@gmail.com',
        to : 'reciept@gmail.com',
        subject : 'this is the subject..',
        text : 'optional text/can use html too'
    }
    transporter.sendMail(mailoptions,function(err,info){
        if(err)
            console.log(err)
        console.log('Email sent succesfully');
        res.end()
    })
}).listen(3000)