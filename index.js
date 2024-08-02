console.log("hello world")

//creating a new sever
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Hello from server")

    console.log(req.url)

    res.setHeader("content-type","text/html")
    if(req.url=="/home"){
        res.write("<html> <body><p>Welcome home</p></body> </html>")
        
    }else if(req.url=="/about"){
        res.write("<html> <body><p>Welcome to About Us page</p></body> </html>")
        
    }else if(req.url=="/node"){
        
        res.write("<html> <body><p>Welcome to my Node Js project</p></body> </html>")
    }

    res.end()


})

server.listen(5001,()=>{
    console.log("server is running")
})