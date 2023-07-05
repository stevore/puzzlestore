const router = require('express').Router();
const {
  createStoreSpecial,
  getAllStoreSpecials, 
  getStoreSpecialById,
  updateStoreSpecial,
  deleteStoreSpecial,

} = require('../../controllers/storespecialController');

router
  .route('/')
  .post(createStoreSpecial)
  .get(getAllStoreSpecials);

// /api/storespecial
router
  .route('/:storespecialId')
  .get(getStoreSpecialById)
  .put(updateStoreSpecial)
  .delete(deleteStoreSpecial);

module.exports = router;