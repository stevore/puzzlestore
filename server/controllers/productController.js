const { Product } = require('../models');
module.exports = {
    // Get all products
    async getAllProducts(req, res) {
      try {
        const products = await Product.find();
        res.json(products);
      } catch (err) {
        console.log("Err getAllProducts: "+err);
        res.status(500).json(err);
      }
    },
    // Get a single product
    async getProductById(req, res) {
      try {
        const product = await Product.findOne({ _id: req.params.productId });
        if (!product) {
          return res.status(404).json({ message: 'No product with that ID' });
        }
        res.json(product);
      } catch (err) {
        console.log("Err getProductById: "+err);
        res.status(500).json(err);
      }
    },

    // create a new product
    async createProduct(req, res) {
      try {
        const product = await Product.create(req.body);
        res.json(product);
      } catch (err) {
        console.log("Err createProduct: "+err);
        res.status(500).json(err);
      }
    },

    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateProduct(req, res) {
      try {
        const product = await Product.findOneAndUpdate(
          { _id: req.params.productId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!product) {
          return res.status(404).json({ message: 'No product with this id!' });
        }
        res.json(product);
      } catch (err) {
        console.log("err updateProduct: "+err);
        res.status(500).json(err);
      }
    },
    
    async deleteProduct(req, res) {
      try {
        const product = await Product.findOneAndRemove({ _id: req.params.productId });
  
        if (!product) {
          return res.status(404).json({ message: 'No product with this id!' });
        }
        res.json({ message: 'product successfully deleted!' });
      } catch (err) {
        console.log("Err deleteProduct: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  