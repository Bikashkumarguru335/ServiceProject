const express = require('express');
const { getProducts, addData } = require('../controller/productController');
const { addToCart, removeFromCart } = require("../controller/cartController");
const { searching } = require('../controller/serviceController');
const router = express.Router();

router.get('/products', getProducts);
router.post('/addData', addData)
router.post('/add', addToCart);
router.post('/remove', removeFromCart);
router.get('/search', searching)
module.exports = router;
