const expres=require("express");
const cors=require("cors");
const app=expres();
app.use(cors());
app.use(expres.json());

app.listen(3000);



