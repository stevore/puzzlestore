const { ProductReview } = require('../models');
module.exports = {

    // Get all productreviews
    async getAllProductReviews(req, res) {
      try {
        const productreviews = await ProductReview.find();
        res.json(productreviews);
      } catch (err) {
        console.log("Err getAllProductReviews: "+err);
        res.status(500).json(err);
      }
    },

    // Get a single productreview
    async getProductReviewById(req, res) {
      try {
        const productreview = await ProductReview.findOne({ _id: req.params.productreviewId });
        if (!productreview) {
          return res.status(404).json({ message: 'No productreview with that ID' });
        }
        res.json(productreview);
      } catch (err) {
        console.log("Err getProductReviewById: "+err);
        res.status(500).json(err);
      }
    },
    // create a new productreview
    async createProductReview(req, res) {
      try {
        const productreview = await ProductReview.create(req.body);
        res.json(productreview);
      } catch (err) {
        console.log("Err createProductReview: "+err);
        res.status(500).json(err);
      }
    },
    
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateProductReview(req, res) {
      try {
        const productreview = await ProductReview.findOneAndUpdate(
          { _id: req.params.productreviewId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!productreview) {
          return res.status(404).json({ message: 'No productreview with this id!' });
        }
  
        res.json(productreview);
      } catch (err) {
        console.log("err updateProductReview: "+err);
        res.status(500).json(err);
      }
    },
    async deleteProductReview(req, res) {
      try {
        const productreview = await ProductReview.findOneAndRemove({ _id: req.params.productreviewId });
  
        if (!productreview) {
          return res.status(404).json({ message: 'No productreview with this id!' });
        }
        res.json({ message: 'productreview successfully deleted!' });
      } catch (err) {
        console.log("Err deleteProductReview: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  