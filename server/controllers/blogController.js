const { Blog } = require('../models');
module.exports = {

    // Get all blogs
    async getAllBlogs(req, res) {
      try {
        const blogs = await Blog.find();
        res.json(blogs);
      } catch (err) {
        console.log("Err getAllBlogs: "+err);
        res.status(500).json(err);
      }
    },

    // Get a single blog
    async getBlogById(req, res) {
      try {
        const blog = await Blog.findOne({ _id: req.params.blogId });
        if (!blog) {
          return res.status(404).json({ message: 'No blog with that ID' });
        }
        res.json(blog);
      } catch (err) {
        console.log("Err getBlogById: "+err);
        res.status(500).json(err);
      }
    },
    // create a new blog
    async createBlog(req, res) {
      try {
        const blog = await Blog.create(req.body);
        res.json(blog);
      } catch (err) {
        console.log("Err createBlog: "+err);
        res.status(500).json(err);
      }
    },
    
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateBlog(req, res) {
      try {
        const blog = await Blog.findOneAndUpdate(
          { _id: req.params.blogId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!blog) {
          return res.status(404).json({ message: 'No blog with this id!' });
        }
  
        res.json(blog);
      } catch (err) {
        console.log("err updateBlog: "+err);
        res.status(500).json(err);
      }
    },
    async deleteBlog(req, res) {
      try {
        const blog = await Blog.findOneAndRemove({ _id: req.params.blogId });
  
        if (!blog) {
          return res.status(404).json({ message: 'No blog with this id!' });
        }
        res.json({ message: 'blog successfully deleted!' });
      } catch (err) {
        console.log("Err deleteBlog: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  