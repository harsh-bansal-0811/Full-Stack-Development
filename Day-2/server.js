// core module
const server= require("http")
server.createServer((req,res)=>{
    // res.write("<h1>Message from server</h1>")
    //Routing
    if(req.url==="/")  // means home page
    {
        res.write("This is home page")
    }
    else if(req.url==="/about")
    {
        res.write("This is about page")
    }
    else
    {
        res.write("404 page not found")
    }

    res.end("")
}).listen(5001,()=>{
    console.log("Server started")
})