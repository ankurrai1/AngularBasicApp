const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/angularDB")

const app = express();
const port = 8000;

const User = require('./schema/user');



app.use(parser.json());

app.get('/',(req,res)=>{
  res.send("I am listening");
})

app.post("/api/login",async (req,res)=>{
  const {username, password} = req.body;
  const result = await User.findOne({username,password})
  if(!res){
    res.send("wrong user credential");
  }
  else{
    // we will create session for user here
    //
  }
})

app.post('/api/register',(req,res)=>{
  const {username,password} = req.body;
  user
})


app.listen(port,()=>{
  console.log(`server is listening on port : ${port}`);
});
