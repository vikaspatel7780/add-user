const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/User')
const cors =require('cors')
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.post("/adduser",async (req,res)=>{
    let user = new User(req.body);   // from frontend user are send data and create a models for users
  console.log(req.body)
  let result=await user.save();    // save the database 
  res.send(result)
})

app.get("/alluser",async(req,res)=>{
    const products=await User.find();
    if(products.length>0){
      res.send(products)
    }
    else{
      res.send({result:"No product"})
    }
  })

  app.get("/search/:key",async(req,res)=>{
    const result=await User.find({
      "$or":[
        {name:{$regex:req.params.key}},
        {address:{$regex:req.params.key}},
        {mobile:{$regex:req.params.key}},
        {email:{$regex:req.params.key}},
        {message:{$regex:req.params.key}}
      ]
    })
    res.send(result);
  
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
