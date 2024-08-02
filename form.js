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

        let body=[]
        req.on('data',(chunk)=>{
            // console.log("chunk : ",chunk)
            body.push(chunk)
        })

        req.on('end',()=>{
            let parsedData = Buffer.concat(body).toString()
            // console.log("parsed data ",parsedData)
            let msg = parsedData.split("=")[1]
            // console.log("msg ",msg)
            // fs.writeFileSync('message.txt',msg) //this is blocking code 
            // res.statusCode=302
            // res.setHeader('Location','/') //after submission the response will make the client url back to "/"
            // return res.end()
            
            fs.writeFile('message.txt',msg,(err)=>{

                //now read the file
                fs.readFile('message.txt','utf-8',(err,data)=>{

                    console.log("data from file ",data)
                    res.statusCode=302
                    res.setHeader('Location','/') //after submission the response will make the client url back to "/"
                    return res.end()
                })
            })
        })

        
    }

})

server.listen(5001,()=>{
    console.log("server is running at 5001")
})