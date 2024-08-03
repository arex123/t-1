const express = require('express')
const path = require('path')
const router = express.Router()
const fs = require('fs')


router.get('/chat',(req,res)=>{
    
    fs.readFile('chats.txt','utf-8',(err,d)=>{
        if(err){

        }else{
            res.send("<html><body><p>"+d +"</p><form action='/app/message' method='POST'><input name='username' id='username' hidden/><input name='message' required id='msg' type='text' placeholder='type message'/><button type='submit'>send message</button></form><script>document.getElementById('username').value = localStorage.getItem('username')</script></body></html>")
        }
    })
})

router.post('/message',(req,res)=>{
    console.log("message")
    console.log(req.body)
    let msg =   "\r\n"+req.body.username+":" + req.body.message+"  ,"
    fs.appendFile('chats.txt',msg,err=>{
        if(err){
            
        }else{
            res.redirect('/app/chat')
        }
    })
    
})


module.exports = router