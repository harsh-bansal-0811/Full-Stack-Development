// expressjs a framework of nodejs
const express=require("express")
const app=express()  // middleware 
app.get("/",(req,res)=>{              // by default get ko use krega
res.send("this is my get method")    // in nodejs we use write method in express use send method
})
app.get("/about",(req,res)=>{
res.send("this is my about page")
})
app.post("/",(req,res)=>{
res.send("this is my post method")    
})
app.listen(6002,()=>{
    console.log("Server is started")
})