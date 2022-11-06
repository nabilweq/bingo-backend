const mongoose = require('mongoose');

const WasteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  items: [{
    category: {
      type: String, //[ 'E-waste', 'Plastic waste', 'Metal waste', 'Food waste', 'Paper waste' ]
      required: true
    },
    no_of_bins: {
      type: Number,
      required: true
    }
  }],
  slot: {
    type: String,
    required: true
  },
  completion_key: {
    type: String,
    default: ""
  },
  collector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  location: {
    type: String,
    required: true
  },
  address: {
    type: String,
  },
  status: {
    type: String,
    default: "Recieved" //[ 'Pending', 'Cancelled', 'Rejected', 'Completed' ]
  },
  createdOn: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = Waste = mongoose.model('waste', WasteSchema);