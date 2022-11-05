const mongoose = require('mongoose');

const WasteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  categpry: {
    type: String, //[ 'E-waste', 'Plastic waste', 'Metal waste', 'Food waste', 'Paper waste' ]
    required: true
  },
  no_of_bins: {
    type: Number,
    required: true
  },
  slot: {
    type: String,
    required: true
  },
  completion_key: {
    type: String,
    default: ""
  },
  collector: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Recieved" //[ 'Pending', 'Cancelled', 'Completed' ]
  }
});

module.exports = Waste = mongoose.model('waste', WasteSchema);