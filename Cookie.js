const cookie = require('cookie-parser')
const express = require('express')
const app = express()
app.use(cookie())
app.set('view engine','ejs')
app.use(express.static(__dirname))

app.get('/process',(req,res)=>{
    var fname = req.query.fName
    var lname = req.query.lName
    // console.log(fname+lname)
    // res.cookie(fname,lname).send('Cookie Set')
    res.clearCookie('undefined')
    res.end('Cookie cleared')
})
app.get('/',(req,res)=>{
    res.render('getEx')
})
app.listen(3000)
