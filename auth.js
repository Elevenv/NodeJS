const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const multer = require('multer')
var upolad = multer()
app.use(session({secret:'This is user auth Session'}))
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static(__dirname))
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
var uname = '1'
var dpass = '1'
var users = {}
app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/signin',(req,res)=>{
    var user= req.body.username
    var pass = req.body.password
    if(uname==user && dpass==pass){
        
        // var newuser = {username : user,password:pass}
        // users.add(user,pass)
        req.session.user = user
        console.log('Current user:'+req.session.user)
        // res.render('protected',{'user':req.session.user})
        res.redirect('/protected',{'user':req.session.user})
    }
    else{
        res.redirect('/')
    }
    console.log(user+pass)
})

app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        console.log('USer logged out.')
    })
    res.render('home')
})

app.listen(3000)