const express=require("express");
const { note } = require("../zod");
const { noteAuth, auth } = require("../middleware");
const { Note } = require("../db");
const router=express.Router();



//create
router.post("/create",noteAuth,auth,async(req,res)=>{
    const body=req.body;
    const id=req.id;
    const note=await Note.create({
        id:id,
        title:body.title,
        content:body.content
    })
    res.json(note)
})

//get
router.get('/get',auth,async(req,res)=>{ 
    const notes=await Note.find({id:req.id})
    res.json(notes)
})

//update
router.put('/update',auth,noteAuth,async(req,res)=>{
    const body=req.body;
    const id = req.query.id;
    console.log(id)
    console.log(body)
    const note=await Note.findOne({id:req.id,_id:id})
    if(!note){
        res.status(403).json({
            message:"Note not found"
        })
        return 
    }
    note.title=body.title;
    note.content=body.content;
    note.date=new Date(new Date().getTime()+(5.5*60*60*1000));
    await note.save()
    res.json(note)
})

//delete
router.delete('/delete',auth,async(req,res)=>{
    const id=req.query.id;
    const note=await Note.findOne({id:req.id,_id:id})
    if(!note){
        res.status(403).json({
            message:"Note not found"
        })
        return 
    }
    await Note.findOneAndDelete({_id: id});
    res.json(note)
})

module.exports=router