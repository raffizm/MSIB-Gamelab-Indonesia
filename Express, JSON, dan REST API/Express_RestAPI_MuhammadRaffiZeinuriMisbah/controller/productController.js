var connection = require('../library/database');

// Index Product
const getAllProduk = function(req, res) {
    // Query
    connection.query('SELECT * FROM product', function(err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data: ''
            });
        } else {
            // Menampilkan Data Product
            res.json({
                data: rows
            });
        }
    });
};
// Index Product By KdProduct
const getProdukByKdProduk = function(req, res) {
    let KdProduk = req.params.KdProduk
        // Query
    connection.query('SELECT * FROM product WHERE KdProduk =' + KdProduk, function(err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data: ''
            });
        } else {
            // Menampilkan Data Product
            res.json({
                data: rows
            });
        }
    });
};
// STORE Post Product
const createProduk = function(req, res) {
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
        connection.query("Insert INTO product SET ? ", formData, function(err, result) {
            // If(err) throw err
            if (err) {
                res.json({ pesan: "Data Gagal Disimpan" });

            } else {
                res.send("Data Berhasil Disimpan");
            }
        });
    }
};
//  Update Product
const updateProduk = function(req, res) {
    let KdProduk = req.params.KdProduk;
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
        connection.query("UPDATE product SET ? WHERE KdProduk = " + KdProduk, formData, function(err, result) {
            // If(err) throw err
            if (err) {
                res.send('error', err);
                res.json({
                    id: req.params.KdProduk,
                    namaProduk: formData.namaProduk,
                    hargaProduk: formData.hargaProduk
                });

            } else {
                res.send("Data Berhasil Diupdate !");
            }
        });
    }
};

// Delete Product
const deleteProduk = function(req, res) {
    let KdProduk = req.params.KdProduk;
    connection.query('DELETE FROM product WHERE KdProduk =' + KdProduk, function(err, result) {
        // If(err) throw err
        if (err) {
            res.send('error', err);
        } else {
            res.send("Data Berhasil Dihapus !");
        }
    });
};

module.exports = {
    getAllProduk,
    getProdukByKdProduk,
    createProduk,
    updateProduk,
    deleteProduk
}