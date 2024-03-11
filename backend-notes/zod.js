const zod =require("zod");

const userSignup =zod.object({  
    email: zod
    .string({ required_error: "email is required" })
    .email({ message: "InValid email address" }),

    name:zod
    .string({required_error:"name is required"})
    .min(2,{message:"Name is required"}),

    password:zod
    .string({required_error:"password is required"})
    .min(6,{message:"Minimum 6 letter of password is requried"})

})

const userSignin =zod.object({
    email:zod
    .string({required_error:"email is required"})
    .email({message:"Please put a valid email"}),

    password:zod
    .string({required_error:"Password is required"})
    .min(6,{message:"Minimum 6 letter of password is requried"})
})

const note=zod.object({
    title:zod
    .string({required_error:"Title is required"})
    .min(1,{message:"Title is required"}),

    content:zod
    .string({required_error:"Content is required"})
    .min(1,{message:"Content is required"})
})

module.exports={
    userSignin,
    userSignup,
    note
}