import express from 'express';
const productRoutes = require('./product.route');

const router = express.Router(); // eslint-disable-line new-cap

// mount products at /products
router.use('/products', productRoutes);

export default router;
