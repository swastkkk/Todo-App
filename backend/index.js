const express=require("express");
const app=express()
const {createTodo}=require("./types")

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