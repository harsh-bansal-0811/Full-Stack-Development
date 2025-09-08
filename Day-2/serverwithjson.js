// core module
const server= require("http")
const user=[
    {"id":1,"name":"Alice"},
    {"id":2,"name":"Bob"},
    {"id":3,"name":"Charlie"}
]
server.createServer((req,res)=>{
    // res.write("<h1>Message from server</h1>")
    //Routing
     if(req.url==="/")
    {
        res.write("<h1>This is home page</h1>")
    }
    else if(req.url==="/user")  
    {
        res.write(JSON.stringify(user))
    }
    
    res.end("")
}).listen(5000,()=>{
    console.log("Server started")
})