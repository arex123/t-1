const express = require('express')
const fs = require('fs')
const router = express.Router()
const path = require('path')

// /admin/add-product
router.get('/login',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../','views','login.html'))
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>')
})

router.post('/login',(req,res)=>{
    // localStorage.setItem("username",req.body.name)
    // console.log('subbmti ng fo: ',req.body)
    res.redirect('/app/chat')
    
})


module.exports = router