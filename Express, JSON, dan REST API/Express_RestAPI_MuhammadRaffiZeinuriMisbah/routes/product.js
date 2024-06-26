var express = require('express');
var router = express.Router();
var product = require('../controller/productController')


// getAllKelas
router.get('/', product.getAllProduk);
// getKelasId
router.get('/:KdProduk', product.getProdukByKdProduk);
// createKelas
router.post('/', product.createProduk);
// updateKelas
router.put('/:KdProduk', product.updateProduk);
// deleteKelas
router.delete('/:KdProduk', product.deleteProduk);
module.exports = router;