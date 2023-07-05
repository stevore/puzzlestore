const { Cart } = require('../models');
module.exports = {

    // Get all carts
    async getAllCarts(req, res) {
      try {
        const carts = await Cart.find();
        res.json(carts);
      } catch (err) {
        console.log("Err getAllCarts: "+err);
        res.status(500).json(err);
      }
    },

    // Get a single cart
    async getCartById(req, res) {
      try {
        const cart = await Cart.findOne({ _id: req.params.cartId });
        if (!cart) {
          return res.status(404).json({ message: 'No cart with that ID' });
        }
        res.json(cart);
      } catch (err) {
        console.log("Err getCartById: "+err);
        res.status(500).json(err);
      }
    },
    // create a new cart
    async createCart(req, res) {
      try {
        const cart = await Cart.create(req.body);
        res.json(cart);
      } catch (err) {
        console.log("Err createCart: "+err);
        res.status(500).json(err);
      }
    },
    
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateCart(req, res) {
      try {
        const cart = await Cart.findOneAndUpdate(
          { _id: req.params.cartId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!cart) {
          return res.status(404).json({ message: 'No cart with this id!' });
        }
  
        res.json(cart);
      } catch (err) {
        console.log("err updateCart: "+err);
        res.status(500).json(err);
      }
    },
    async deleteCart(req, res) {
      try {
        const cart = await Cart.findOneAndRemove({ _id: req.params.cartId });
  
        if (!cart) {
          return res.status(404).json({ message: 'No cart with this id!' });
        }
        res.json({ message: 'cart successfully deleted!' });
      } catch (err) {
        console.log("Err deleteCart: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  