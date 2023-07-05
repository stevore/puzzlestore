const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const cartRoutes = require('./cartRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const productreviewRoutes = require('./productreviewRoutes');
const storeeventRoutes = require('./storeeventRoutes');
const storespecialRoutes = require('./storespecialRoutes');
const storeinfoRoutes = require('./storeinfoRoutes');


router.use('/blog', blogRoutes);
router.use('/cart', cartRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/productreview', productreviewRoutes);
router.use('/storeevent', storeeventRoutes);
router.use('/storespecial', storespecialRoutes);
router.use('/storeinfo', storeinfoRoutes);

module.exports = router;