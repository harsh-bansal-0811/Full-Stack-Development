const mongoose=require("mongoose")
async function connectDB()
{
    try{
await mongoose.connect(
    "mongodb+srv://harshbansal1121_db_user:Harsh007@harshdb.7ttxdyy.mongodb.net/?retryWrites=true&w=majority&appName=HarshDB"
)
console.log("mongodb connect")
    }
    catch(err)
    {
console.log("db connect failed",err)
    }
}
module.exports = connectDB;