const http = require('http')
const fs = require('fs')
let server = http.createServer((req,res)=>{

    let url = req.url
    if(url=="/"){
        res.setHeader('content-type','text/html')
        res.write("<html> <body><form method='post' action='/message'><input name='input' type='text'/><button type='submit'>submit</button</form></body> </html>")
        return res.end()
    }
    if(url=='/message' && req.method=='POST'){

        fs.writeFileSync('message.txt',"dummy message")
        res.statusCode=302
        res.setHeader('Location','/') //after submission the response will make the client url back to "/"
        return res.end()
        
    }

})

server.listen(5001,()=>{
    console.log("server is running at 5001")
})