const router = require('express').Router();
const {
  createCategory,
  getAllCategorys, 
  getCategoryById,
  updateCategory,
  deleteCategory,

} = require('../../controllers/categoryController');

router
  .route('/')
  .post(createCategory)
  .get(getAllCategorys);

// /api/category
router
  .route('/:categoryId')
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;