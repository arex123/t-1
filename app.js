const http = require('http')
const express = require('express')
const bodyparser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(bodyparser.urlencoded({extended:false}))

app.use("/admin",adminRoutes)
app.use("/shop",shopRoutes)

app.use((req,res)=>{
    res.status(404).send("<h2>Page not found</h2>")
})

app.listen(5001)
