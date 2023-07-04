const mongoose = require('mongoose');
const Category = require('./Category');
const Product = require('./Product');

const { Schema } = mongoose;

const StoreSpecialSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  product:{
    type:[String]
  },
  category: {
    type:[String]
  },
  salediscount: {
    type:Number
  },
  saleprice: {
    type: Number
  },
  startdate:{
    type:Date 
  },
  enddate:{
    type:Date
  }
});

const StoreSpecial = mongoose.model('StoreSpecial', StoreSpecialSchema);

module.exports = StoreSpecial;