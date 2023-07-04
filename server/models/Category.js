const {Schema, model} = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  toJSON: {
      virtuals:true,
  },
  id:false,
},
);

const Category = model('Category', categorySchema);

module.exports = Category;