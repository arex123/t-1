const http = require('http')
const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("first middleware")
    next()
})

app.use((req,res,next)=>{
    console.log("second middleware")
    res.send( { "key1": "value" })
})



app.listen(5001)
