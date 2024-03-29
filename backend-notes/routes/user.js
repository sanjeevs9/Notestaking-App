const express=require("express")
const router=express.Router();
const jwt=require("jsonwebtoken");
const { signupAuth, signinAuth } = require("../middleware");
const { User } = require("../db");


//create
router.post('/signup',signupAuth,async(req,res)=>{
    const body=req.body;
    console.log(body)
    const existing=await User.findOne({email:body.email})
    if(existing){
        res.status(403).json({
            message:"User already exists"
        })
        return 
    }

    const user  =await User.create({
        email:body.email,
        password:body.password,
        name:body.email
    })
    console.log(user)
    const token=jwt.sign({id:user._id},"sanjeev")
    res.json({
        token,
        name:user.name,
        email:user.email
    })

})

//signin
router.post('/signin',signinAuth,async(req,res)=>{
    const body=req.body;
    console.log(body)
    const user=await User.findOne({email:body.email,password:body.password})
    if(!user){
        res.status(403).json({
            message:"Invalid email or password"
        })
        return 
    }
    const token=jwt.sign({id:user._id},"sanjeev")
    res.json({
        token,
        name:user.name,
        email:user.email
    })
})



module.exports=router

