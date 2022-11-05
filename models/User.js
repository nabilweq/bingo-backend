const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String, //[ 'E-waste', 'Plastic waste', 'Metal waste', 'Food waste', 'Paper waste' ]
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
    default: ""
  },
  address: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('user', UserSchema);