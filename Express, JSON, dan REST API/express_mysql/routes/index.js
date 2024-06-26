var express = require('express');
var router = express.Router();
var homeController = require('../controller').home;
var profileController = require('../controller').profile;
var productController = require('../controller').product;
var verifyUser = require('../library/verify');

router.get('/', verifyUser.isLogin, homeController.home);
router.get('/profile', verifyUser.isLogin, profileController.profile);
router.get('/product', verifyUser.isLogin, productController.getProduct);
router.post('/product', verifyUser.isLogin, productController.createProduct);
router.put('/product', verifyUser.isLogin, productController.updateProduct);
router.delete('/product', verifyUser.isLogin, productController.deleteProduct);


module.exports = router;