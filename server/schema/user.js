const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password :String,
  quote : {type:String,default:"no quote yet"}
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
