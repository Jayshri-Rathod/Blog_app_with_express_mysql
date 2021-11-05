const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const details = require('./routes/router')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/user',details)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(4000,()=>{
    console.log('server working on port 4000');
})