const express=require("express")
const app=express()


app.use(express.json())
const notes=[]

app.post('/notes',(req,res) =>{
    console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        message:"Note added successfully!"
    });
})

app.get('/notes',(req,res) =>{
    res.status(200).json({
        notes:notes,
        message:'Note fetched sucessfully'
    })
})

app.delete('/notes/:index',(req,res)=>{
    const idx=req.params.index
    delete notes[idx]
    res.status(200).json({
        message:"Note deleted sucess"
    })
})
module.exports=app