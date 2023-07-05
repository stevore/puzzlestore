const mongoose = require('mongoose');

const { Schema } = mongoose;

const productreviewSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  review: {
    type: String
  },
  rating: {
    type: Number,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },

}
,{ timestamps: true});

const ProductReview = mongoose.model('ProductReview', productreviewSchema);

module.exports = ProductReview;