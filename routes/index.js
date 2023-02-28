var express = require('express');
const { createCategory, getCategories } = require('../repositories/category');
const { getProducts, createProduct, updateProduct, getProductById, filterProductsByCategory, filterProductsBySubCategory } = require('../repositories/products');
const { createSubCategory, getSubCategories } = require('../repositories/sub-category');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Products routes
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.get('/products/category/:category', filterProductsByCategory);
router.get('/products/sub-category/:subCategory', filterProductsBySubCategory);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);

// Category routes
router.post('/category', createCategory);
router.get('/category', getCategories);
router.post('/sub-category', createSubCategory);
router.get('/sub-category', getSubCategories);

module.exports = router;
