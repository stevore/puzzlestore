const router = require('express').Router();
const {
  createCart,
  getAllCarts, 
  getCartById,
  updateCart,
  deleteCart,

} = require('../../controllers/cartController');

router
  .route('/')
  .post(createCart)
  .get(getAllCarts);

// /api/cart
router
  .route('/:cartId')
  .get(getCartById)
  .put(updateCart)
  .delete(deleteCart);

module.exports = router;