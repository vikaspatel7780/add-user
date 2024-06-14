const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  address: {
    type: String,
    require: true,
  },
  mobile : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
  message : {
    type: String
  }
  
});

module.exports = mongoose.model('User', UserSchema);
