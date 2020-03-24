const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect("mongodbUri")

const app = express();
const port = 8000;


app.use(parser.json());

app.get('/',(req,res)=>{
  res.send("I am listening");
})

app.post('/api/register',(req,res)=>{
  const {username,password} = req.body;
  user
})


app.listen(port,()=>{
  console.log(`server is listening on port : ${port}`);
});
