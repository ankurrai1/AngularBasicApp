const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/angularDB")

const app = express();
const port = 8000;

const User = require('./schema/user');

app.use(session({
  secret : "ankurraiItcouldbeanyStringlikecontain1234noaswell",
  saveUninitialized :false,
  resave: false
}))

app.use(parser.json());

app.get('/',(req,res)=>{
  console.log(req.headers)
  res.send("I am listening");
})

app.get('/api/logout',(req,res)=>{
  // req.session.username = undefined;
  // req.session.save()
  req.session.destroy()
  res.json({
    success: true
  })
})

app.post('api/quote',async(req, res)=>{
  const user = await User.findOne({
    username : req.session.username
  })
  if(!user) {
    res.json({
      success : false,
      message: "user not found"
    })
    return ;
  }
  await user.update({username : req.session.user},{$set: {quote:req.body.value}})
  res.json({
    success :true,
    message:"your quote is updated successfully"
  })
})

app.get('/api/isLoggedIn',(req,res)=>{
  res.json({
    status: !!req.session.user // !! is used to convert value into boolean
  })
})

app.post("/api/login",async (req,res)=>{
  const {username, password} = req.body;
  const result = await User.findOne({username,password})
  if(!result){
    res.json({
      success:false,
      message: "incorrect details for login"
    });
  }
  else{
    req.session.user = username;
    req.session.save();
    res.json({
      success:true,
      message: "you are logged in"
    });
  }
})
app.post('/api/register',async (req,res)=>{
  const {username,password} = req.body;
  const existing = await User.findOne({username})
  if(existing) {
    res.json({
      success:false,
      message:"User already exist"
    })
    return;
  }
  const user = new User({
    username,
    password
  })
  const result = await user.save();
  res.json(result);
})


app.listen(port,()=>{
  console.log(`server is listening on port : ${port}`);
});
