console.log("hello world")

//creating a new sever
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Hello from server")
})

server.listen(5001,()=>{
    console.log("server is running")
})