const express = require('express')
const session = require('express-session')
const app = express()
app.use(session({secret:'This is session'}))

app.get('/',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send('You visited this page for '+req.session.page_views +' times')
    }
    else{
        req.session.page_views = 1
        res.send('Welcome to the Express js.../')
    }
})

app.listen(3000)