const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
  title:{
    type:String,
    required: true,
    trim: true
  },
  content :{
    type:String,
    required: true,
    trim: true
  },
  user : {
    type:String,
    required: true,
    trim: true
  }

});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;