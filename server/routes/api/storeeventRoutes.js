const router = require('express').Router();
const {
  createStoreEvent,
  getAllStoreEvents, 
  getStoreEventById,
  updateStoreEvent,
  deleteStoreEvent,

} = require('../../controllers/storeeventController');

router
  .route('/')
  .post(createStoreEvent)
  .get(getAllStoreEvents);

// /api/storeevent
router
  .route('/:storeeventId')
  .get(getStoreEventById)
  .put(updateStoreEvent)
  .delete(deleteStoreEvent);

module.exports = router;