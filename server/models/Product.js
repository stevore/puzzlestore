const { Schema, model } = require('mongoose');

//const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    //required: true,
   // trim: true
  },
  UPC: {
    type: String,
//   //  required: true,
   },
   description: {
    type: String   },
   image: {
     type: String
   },
   price: {
     type: Number,
   //  required: true,
//  //   min: 0.99
  },
   quantity: {
     type: Number,
//  //   min: 0,
//  //   default: 0
   },
   category:{
    type:String
   }
  })  


//{ timestamps: true});

const Product = model('Product', productSchema);

module.exports = Product;
