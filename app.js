const http = require('http')
const express = require('express')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req,res)=>{
    res.send('<html><body><form action="/product" method="POST"><input name="movie" type="text" placeholder="movie"/><input name="size" type="number" placeholder="enter size" /><button type="submit">submit</button></form></body></html>')
})

app.post('/product',(req,res)=>{
    console.log("body data")
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res)=>{
    res.send("form submitted")
})


app.listen(5001)
