const jwt=require("jsonwebtoken");
const { userSignup, userSignin, note } = require("./zod");


const auth=async(req,res,next)=>{
    const value=req.headers.authorization;

    if (!value || !value.startsWith("Bearer")) {
        res.status(404).json({
          message: "Please Login to see posts",
        });
        return;
      }

      const token = value.split(" ")[1];
    try{
       const result = jwt.verify(token, "sanjeev");
         req.id=result.id
            next(); 
}

    catch(error){
        console.log(error)
        res.status(403).json({
            message:"Invalid token"
        })
        return 
    }
}

const signupAuth=async(req,res,next)=>{
    const body=req.body;

    try{
        const parseBody=await userSignup.parseAsync(body)
        req.body=parseBody
        next();
    }catch(error){
        console.log(error)
        res.status(400).json({
            message:error.errors[0].message
        })
        return 
    }

    
}

const signinAuth=async(req,res,next)=>{
    const body=req.body;
    try{
        const parseBody=await userSignin.parseAsync(body)
        req.body=parseBody
        next();
    }catch(error){  
        console.log(error)
        res.status(400).json({
            message:error.errors[0].message
        })
        return 
    }
}

const noteAuth=async(req,res,next)=>{
    const body=req.body;
    try{
        const parseBody=await note.parseAsync(body)
        req.body=parseBody
        next();
    }catch(error){
        console.log(error)
        res.status(400).json({
            message:error.errors[0].message
        })
        return 
    }
}


module.exports={
    auth,signupAuth,signinAuth,noteAuth
}