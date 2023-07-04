const router = require('express').Router();
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/product', productRoutes);
router.use('/category', categoryRoutes);

module.exports = router;