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
      type: Schema.Types.ObjectId,
      ref: 'Product',
      },
    ],
  
},{ timestamps: true});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;