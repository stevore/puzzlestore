const router = require('express').Router();
const {
  createProductReview,
  getAllProductReviews, 
  getProductReviewById,
  updateProductReview,
  deleteProductReview,

} = require('../../controllers/productreviewController');

router
  .route('/')
  .post(createProductReview)
  .get(getAllProductReviews);

// /api/productreview
router
  .route('/:productreviewId')
  .get(getProductReviewById)
  .put(updateProductReview)
  .delete(deleteProductReview);

module.exports = router;