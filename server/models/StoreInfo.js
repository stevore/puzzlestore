const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeinfoSchema = new Schema({
  name: {
    type: String,
   // required: true,
   // trim: true
  },
  description: {
    type: String
  },
    street:{
      type:String,
      required: true,
      trim: true
    },
    city :{
      type:String,
      required: true,
      trim: true
    },
    state :{
      type:String,
      required: true,
      trim: true
    },
    zipcode :{
      type:String,
      required: true,
      trim: true
    },
  
  phone: {
    type: String
  },
  email: {
    type: String
  },
//},{ timestamps: true
});


const StoreInfo = mongoose.model('StoreInfo', storeinfoSchema);

module.exports = StoreInfo;