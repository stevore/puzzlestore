const {Schema, model} = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
   required: true,
   unique: true
  //  trim: true,
  },
  productCount:{
    type:Number
  },
  image:{
    type:String
  }

}
//{ timestamps: true}
);

const Category = model('Category', categorySchema);
module.exports = Category;