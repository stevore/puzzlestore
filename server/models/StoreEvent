const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeeventSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const StoreEvent = mongoose.model('StoreEvent', storeeventSchema);

module.exports = StoreEvent;