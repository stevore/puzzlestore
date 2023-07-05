const router = require('express').Router();
const {
  createStoreInfo,
  getAllStoreInfos, 
  getStoreInfoById,
  updateStoreInfo,
  deleteStoreInfo,

} = require('../../controllers/storeinfoController');

router
  .route('/')
  .post(createStoreInfo)
  .get(getAllStoreInfos);

// /api/storeinfo
router
  .route('/:storeinfoId')
  .get(getStoreInfoById)
  .put(updateStoreInfo)
  .delete(deleteStoreInfo);

module.exports = router;