const { Schema, model } = require('mongoose');

//const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  UPC: {
    type: String,
    trim: true
   },
   description: {
    type: String,
    required: true,
    trim: true
  },
   image: {
     type: String,
    trim: true
   },
   price: {
     type: Number,
   //  required: true,
//  //   min: 0.99
  },
   quantity: {
     type: Number,
     min: 0,
     default: 0
   },
   category:{
    type: Schema.Types.ObjectId,
    ref: 'Category'
   }
  })  


//{ timestamps: true});

const Product = model('Product', productSchema);

module.exports = Product;
