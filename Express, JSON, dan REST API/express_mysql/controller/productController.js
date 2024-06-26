const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../library/database');

// Create a pool of connections
const pool = mysql.createPool(db);

// Handle errors on the pool
pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    /**
     * Get product list
     * @param {express.Request} req
     * @param {express.Response} res
     */
    getProduct(req, res) {
        const id = req.session.userid;
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error connecting to database');
                return;
            }
            const query = 'SELECT * FROM product';
            connection.query(query, (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Error querying database');
                    return;
                }
                res.render('product', {
                    url: '/',
                    userName: req.session.username,
                    products: results,

                });
                console.log(results);
            });

            connection.release();
        });
    },
    createProduct(req, res) {
        let namaProduk = req.body.namaProduk;
        let hargaProduk = req.body.hargaProduk;
        let errors = false;
        // Validate Field Kosong
        if (!namaProduk || !hargaProduk) {
            errors = true;
            res.json({ pesan: 'Semua Field Harus Terisi Secara Lengkap ! ' });
        }
        // If no error
        if (!errors) {
            let formData = {
                namaProduk: namaProduk,
                hargaProduk: hargaProduk
            }

            // Insert Query
            pool.getConnection((err, connection) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error connecting to database');
                    return;
                }
                connection.query("Insert INTO product SET ? ", formData, (err, result) => {
                    if (err) {
                        console.error(err);
                        res.json({ pesan: "Data Gagal Disimpan" });
                    } else {
                        res.send("Data Berhasil Disimpan");
                    }
                });
                connection.release();
            });
        }
    },

    /**
     * Update a product
     * @param {express.Request} req
     * @param {express.Response} res
     */
    updateProduct(req, res) {
        let KdProduk = req.params.kdProduk;
        let namaProduk = req.body.namaProduk;
        let hargaProduk = req.body.hargaProduk;
        let errors = false;
        // Validate Field Kosong
        if (!namaProduk || !hargaProduk) {
            errors = true;
            res.json({ pesan: 'Semua Field Harus Terisi Secara Lengkap ! ' });
        }
        // If no error
        if (!errors) {
            let formData = {
                namaProduk: namaProduk,
                hargaProduk: hargaProduk
            }

            // Update Query
            pool.getConnection((err, connection) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error connecting to database');
                    return;
                }
                connection.query("UPDATE product SET ? WHERE KdProduk = " + KdProduk, formData, (err, result) => {
                    if (err) {
                        console.error(err);
                        res.json({ pesan: "Data Gagal Diupdate" });
                    } else {
                        res.send("Data Berhasil Diupdate !");
                    }
                });
                connection.release();
            });
        }
    },

    /**
     * Delete a product
     * @param {express.Request} req
     * @param {express.Response} res
     */
    deleteProduct(req, res) {
        let KdProduk = req.params.KdProduk;
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error connecting to database');
                return;
            }
            connection.query('DELETE FROM product WHERE KdProduk =' + KdProduk, (err, result) => {
                if (err) {
                    console.error(err);
                    res.json({ pesan: "Data Gagal Dihapus" });
                } else {
                    res.send("Data Berhasil Dihapus !");
                }
            });
            connection.release();
        });
    },
};