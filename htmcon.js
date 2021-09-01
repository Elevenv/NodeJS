const express = require('express')
const path = require('path')
const app = express()
require('ejs')
app.set('view engine','ejs')
app.use(express.static(__dirname))

app.get('/',(req,res)=> {
    console.log('Heading to homepage..')
    res.render("getEx")
})
app.get('/process',(req,res)=> {
    var fname  = req.query.fName
    var lname = req.query.lName
    console.log(fname+lname)
    res.render("show",{'fname':fname,'lname':lname})
})
app.listen(3000)
