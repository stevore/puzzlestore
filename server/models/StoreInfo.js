const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeinfoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const StoreInfo = mongoose.model('StoreInfo', storeinfoSchema);

module.exports = StoreInfo;