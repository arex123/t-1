const express = require('express')
const fs = require('fs')
const router = express.Router()
const path = require('path')

// /admin/add-product
router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','login.html'))
})

router.post('/login',(req,res)=>{
    res.redirect('/app/chat')    
})


module.exports = router