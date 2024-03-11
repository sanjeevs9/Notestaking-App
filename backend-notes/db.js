const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://sanjeev:VH2cYQkXF178eBsE@cluster0.v8nr0x6.mongodb.net/notes");

const userSchema =mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:5
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6
    }

})

const noteSchema =mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default:new Date(new Date().getTime()+(5.5*60*60*1000))
    }
})


const User=mongoose.model("User",userSchema);
const Note=mongoose.model("Note",noteSchema);


module.exports={
    User,Note
}