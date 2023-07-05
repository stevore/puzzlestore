const router = require('express').Router();
const {
  createBlog,
  getAllBlogs, 
  getBlogById,
  updateBlog,
  deleteBlog,

} = require('../../controllers/blogController');

router
  .route('/')
  .post(createBlog)
  .get(getAllBlogs);

// /api/blog
router
  .route('/:blogId')
  .get(getBlogById)
  .put(updateBlog)
  .delete(deleteBlog);

module.exports = router;