const http = require('http')
const routes = require('./routes')
let server = http.createServer(routes)

server.listen(5001,()=>{
    console.log("server is running at 5001")
})