const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeeventSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  startdate:{
    type:Date 
  },
  enddate:{
    type:Date
  }
  
},{ timestamps: true});

const StoreEvent = mongoose.model('StoreEvent', storeeventSchema);

module.exports = StoreEvent;