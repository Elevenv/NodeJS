// const { response } = require('express')
const express = require('express')
const path = require('path')
const members = require('./members')
const app = express()
// app.set('view engine','html')
var router = express.Router() 
app.set('view engine', 'ejs');
// app.set('views', __dirname);
app.use(express.static(__dirname ))
// app.get('/members/:id',(req,res) => {
//     // res.sendFile(path.join(__dirname,'a.html'))

//     const found = members.some(member => member.id === parseInt(req.params.id))
//     if(found){
//         res.send(members.filter(member => member.id === parseInt(req.params.id)))
//     }
//     else{
//         res.status(400).send(`No user found with id ${req.params.id}`)
//     }

//     // res.send(`id enetred is ${req.params.id}`)
//     // res.json(members)
// })
// app.listen(3000,() => console.log("Server started.."))

app.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/views','getEx.ejs',))
    res.render('getEx')
})
app.post('/process',(req,res)=>{
    var response = {
        First_Name : req.query.fName,
        Last_Name : req.query.lName
    }
    console.log(response)
    res.render('a.html')
})
app.listen(3000)

