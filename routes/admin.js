const express = require('express')

const router = express.Router()


// /admin/add-product
router.get('/add-product',(req,res)=>{
    res.send('<html><body><form action="/admin/product" method="POST"><input name="movie" type="text" placeholder="movie"/><input name="size" type="number" placeholder="enter size" /><button type="submit">submit</button></form></body></html>')
})

router.post('/product',(req,res)=>{
    console.log("body data")
    console.log(req.body)
    res.redirect('/shop/')
})


module.exports = router