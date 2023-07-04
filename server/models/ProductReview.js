const mongoose = require('mongoose');

const { Schema } = mongoose;

const productreviewSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const ProductReview = mongoose.model('ProductReview', productreviewSchema);

module.exports = ProductReview;