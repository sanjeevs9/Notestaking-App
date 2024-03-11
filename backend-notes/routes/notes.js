const express=require("express");
const { note } = require("../zod");
const { noteAuth, auth } = require("../middleware");
const { Note } = require("../db");
const router=express.Router();



//create
router.post("/create",noteAuth,async(req,res)=>{
    const body=req.body;
    const note=await Note.create({
        id:req.id,
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
router.update('/update',auth,noteAuth,async(req,res)=>{
    const body=req.body;
    const note=await Note.findOne({id:req.id,_id:body.id})
    if(!note){
        res.status(403).json({
            message:"Note not found"
        })
        return 
    }
    note.title=body.title;
    note.content=body.content;
    await note.save()
    res.json(note)
})
