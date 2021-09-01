const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    var err = new Error('Something went wrong..')
    next(err)
})
app.use((err,req,res,next)=>{
    res.status(500)
    res.end('something went wrong check it out')
})
app.listen(3000)