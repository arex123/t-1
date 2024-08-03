const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
const userRoutes = require('./routes/user')
const chatRoutes = require('./routes/chat')


app.use(userRoutes)
app.use("/app",chatRoutes)

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(5001)
