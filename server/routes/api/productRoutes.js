const router = require('express').Router();
const {
  createProduct,
  getAllProducts, 
  getProductById,
  updateProduct,
  deleteProduct,

} = require('../../controllers/productController');

router
  .route('/')
  .post(createProduct)
  .get(getAllProducts);

// /api/product
router
  .route('/:productId')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;