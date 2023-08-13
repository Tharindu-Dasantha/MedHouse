import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
// import Student from "./models/students.models"

const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect('')

app.get("/",(req,res)=>{
    res.send("hi");
});

//for signup process

app.post('/api/signup', async (req, res)=>{
    console.log(req.body)
    try{

        // mongodb validations hear


        res.json({ status:true })// if signup is valid respond must be true if not then it must be false

    }catch{
        res.json({status:'error'})
    }
    
})


app.post('/api/signin', async (req, res)=>{
    console.log(req.body)

    try{

        // mongodb validations hear


        res.json({ status:true })// if signup is valid respond must be true if not then it must be false

    }catch{
        res.json({status:'error'})
    }

})



app.listen(5000, ()=>{
    console.log("server running on http://localhost:5000/")
})