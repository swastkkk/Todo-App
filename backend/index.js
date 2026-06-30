const express=require("express");
const app=express()
const {createTodo,updateTodo}=require("./types")
const {todo}=require("./db");
const cors=require("cors")

app.use(cors());

app.use(express.json())

app.post("/todo",async function (req,res) {
    const parsePayLoad=createTodo.safeParse(req.body);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg:"You send the wrong inputs",
        })
        return;
    }
    todo.create({
        title:req.body.title,
        description:req.body.description,
        completed:false
    })
    
    res.json({
        msg:"Todo is created"
    })
    
})

app.get("/todos",async function (req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async function (req,res) {
    const updateBody=req.body;
    console.log(req.body);
    const parseBody=updateTodo.safeParse(updateBody);
    if(!parseBody.success){
        res.status(411).json({
            msg:"You send the wrong inputs"
        })
        return;
    }
    console.log(req.body);
    console.log(req.body.id);
    await todo.updateOne({
        _id:req.body.id,
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})
app.listen(3000,()=>{
    console.log("Server running on 3000")
});