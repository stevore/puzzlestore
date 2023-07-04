const { Category } = require('../models');
module.exports = {

    // Get all categorys
    async getAllCategorys(req, res) {
      try {
        const categorys = await Category.find();
        res.json(categorys);
      } catch (err) {
        console.log("Err getAllCategorys: "+err);
        res.status(500).json(err);
      }
    },

    // Get a single category
    async getCategoryById(req, res) {
      try {
        const category = await Category.findOne({ _id: req.params.categoryId });
        if (!category) {
          return res.status(404).json({ message: 'No category with that ID' });
        }
        res.json(category);
      } catch (err) {
        console.log("Err getCategoryById: "+err);
        res.status(500).json(err);
      }
    },
    // create a new category
    async createCategory(req, res) {
      try {
        const category = await Category.create(req.body);
        res.json(category);
      } catch (err) {
        console.log("Err createCategory: "+err);
        res.status(500).json(err);
      }
    },
    
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateCategory(req, res) {
      try {
        const category = await Category.findOneAndUpdate(
          { _id: req.params.categoryId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!category) {
          return res.status(404).json({ message: 'No category with this id!' });
        }
  
        res.json(category);
      } catch (err) {
        console.log("err updateCategory: "+err);
        res.status(500).json(err);
      }
    },
    async deleteCategory(req, res) {
      try {
        const category = await Category.findOneAndRemove({ _id: req.params.categoryId });
  
        if (!category) {
          return res.status(404).json({ message: 'No category with this id!' });
        }
        res.json({ message: 'category successfully deleted!' });
      } catch (err) {
        console.log("Err deleteCategory: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  