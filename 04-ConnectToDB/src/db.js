const mongoos=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoos.connect("mongodb+srv://snehalkanpariya_db_user:YTBotADqpF0cNlem@database1.o3riy3y.mongodb.net/db1")
        console.log("Connect to database!!")
    }
    catch(error){
        console.error("MongoDB connection failed:",error)
        process.exit(1)
    }
}

module.exports=connectDB