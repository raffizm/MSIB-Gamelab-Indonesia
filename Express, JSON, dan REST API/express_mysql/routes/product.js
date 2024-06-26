const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const app = express();

// Remove the duplicate route definition
router.get('/product', productController.getProduct);
app.get('/product', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const product = new Product(connection);
        product.getAll((err, products) => {
            if (err) throw err;
            res.render('product', { products });
            connection.release();
        });
    });
});
router.post('/product', productController.createProduct);
app.post('/product/update', async(req, res) => {
    try {
        const { KdProduk, namaProduk, hargaProduk } = req.body;
        const updatedProduct = await productController.updateProduct(KdProduk, namaProduk, hargaProduk);
        res.json({ success: true, product: updatedProduct });
    } catch (error) {
        console.log('Error updating product:', error.message);
        res.json({ success: false, error: error.message });
    }
});
router.put('/product', productController.updateProduct);
app.put('/product/:KdProduk', async(req, res) => {
    try {
        console.log('Request body:', req.body);
        const { KdProduk } = req.params;
        const { namaProduk, hargaProduk } = req.body;
        const updatedProduct = await productController.updateProduct(KdProduk, namaProduk, hargaProduk);
        res.json({ success: true, product: updatedProduct });
    } catch (error) {
        console.log('Error updating product:', error.message);
        res.json({ success: false, error: error.message });
    }
});
module.exports = router;