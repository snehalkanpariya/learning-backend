const express=require("express")
const noteModel = require('./models/note.model') // adjust path as needed
const app=express()
app.use(express.json())
app.post("/notes",async(req,res)=>{
    try{
    const data=req.body
    const newNote=await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"Data inserted successfully!",
        note:newNote
    })

}
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

app.get('/notes', async (req, res) => {
  try {
    const data = await noteModel.find({})
    res.send(data)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.delete("/notes/:index",async(req,res)=>{
    try{
    const id=req.params.id
    const deletedNote=await noteModel.findOneAndDelete({
        id
    })
    if(!deletedNote){
        return res.status(404).json({
            message:"Note is not found or already deleted!!"
        })
    }
    res.status(200).json({
        message:"Data deleted"
    })}
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

app.patch("/notes/:id",async(req,res)=>{
    try{
        const id=req.params.id
        const update=req.body

        const updateNote=await noteModel.findByIdAndUpdate(
            id,
            {$set:update},
            {new:true,runValidators:true}
        )
        if(!updateNote){
            return res.status(404).json({
               message:"Note not found"
            })
        }
        res.status(200).json({
            message:"Note updated successfully"
        })
      
    }
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})
module.exports=app