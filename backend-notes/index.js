const expres=require("express");
const cors=require("cors");
const app=expres();
app.use(cors());
app.use(expres.json());
const user=require("./routes/user");
const notes=require("./routes/notes");

app.use('/user',user);
app.use('/notes',notes);
app.listen(3000);



