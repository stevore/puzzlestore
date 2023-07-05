const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  items:[
    {
      product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      },
      quantity: 
      {
      type: number,
      }
  }],
},{ timestamps: true});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;