const express=require("express")
const app=express()

const notes=[]
app.use(express.json())
app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        messsage:"Book added successfully"
    })
})

app.get("/notes",(req,res)=>{
   
    res.status(200).json({
         notes:notes,
        messsage:"Data fetched successfully"
    })
})

app.delete("/notes/:index",(req,res)=>{
    const idx=req.params.index
    delete notes[idx]
    res.status(200).json({
        message:"Book Deleted"
    })
})
module.exports=app