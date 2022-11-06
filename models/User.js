const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String, //[ 'E-waste', 'Plastic waste', 'Metal waste', 'Food waste', 'Paper waste' ]
    required: true
  },
  role: {
    type: String, //[ 'user', 'collector' ]
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date
  }
});

module.exports = User = mongoose.model('user', UserSchema);