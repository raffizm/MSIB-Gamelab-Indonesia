var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
//Tambahkan body-parser
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const assert = require('assert');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// gunakan body parser sebgai middleware
app.use(bodyParser.json());
// data yang kita gunakan adalah kelas pada karakter game
var produk = [{
        kdProduk: 1,
        namaProduk: "Monitor",
        hargaProduk: 2300000,
    },

    {
        kdProduk: 2,
        namaProduk: "Mouse",
        hargaProduk: 400000
    },

    {
        kdProduk: 3,
        namaProduk: "Keyboard",
        hargaProduk: 600000
    },
    {
        kdProduk: 4,
        namaProduk: "VGA",
        hargaProduk: 3700000
    }

]
app.get('/api/produk', function(req, res) {
    try {
        res.json({ data: produk });
        res.send({ data: produk });
        res.send(err)
    } catch (err) {
        // Melempar Exception
        next(err);
    }
});

app.get('/api/produk/:kdProduk', function(req, res) {
    try {
        const pdk = produk.find(k => k.kdProduk === parseInt(req.params.kdProduk));
        assert(pdk, `Kode Produk ${req.params.kdProduk} tidak ditemukan`);
        res.status(200).json({ data: pdk });
        res.send({ data: pdk });
        res.send(err)
    } catch (err) {
        if (err.name === 'AssertionError') {
            res.status(404).json({ error: err.message });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
});

// Menambahkan data
app.post('/api/produk', function(req, res) {
    //Kondisi apabila nama kelas kosong
    if (!req.body.namaProduk || !req.body.hargaProduk) {
        // Menampilkan pesan error ketika field nama kelas kosong
        res.status(400).send("Semua Field ('namaProduk' dan 'hargaProduk') harus diisi");
        return;
    }

    const pdk = {
        kdProduk: produk.length + 1,
        namaProduk: req.body.namaProduk,
        hargaProduk: req.body.hargaProduk
    };
    produk.push(pdk);
    res.send(pdk);
})
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Mengupdate data
app.put('/api/produk/:kdProduk', function(req, res) {
    //Cek Kode Produk
    const prdk = produk.find(k => k.kdProduk === parseInt(req.params.kdProduk));
    if (!prdk) res.status(404).send("Produk tidak ditemukan :( "); // tampilkan status 404

    if (!req.body.namaProduk || !req.body.hargaProduk) {
        // Menampilkan pesan error ketika field nama kelas kosong
        res.status(400).send("Semua Field ('namaProduk' dan 'hargaProduk') harus diisi");
        return;
    }

    prdk.namaProduk = req.body.namaProduk
    prdk.hargaProduk = req.body.hargaProduk
    res.send({ pesan: "Data berhasil diupdate !", data: prdk });
})

// Menghapus data
app.delete('/api/produk/:id', function(req, res) {
    //Cek id produk
    const prduk = produk.find(k => k.kdProduk === parseInt(req.params.kdProduk));
    if (!prduk) res.status(404).send("produk tidak ditemukan"); // tampilkan status 404

    const index = produk.indexOf(prduk);
    produk.splice(index, 1);
    res.send({ pesan: "Data berhasil dihapus.", data: prduk });
})

//Auth JWT
app.post('/api/login', (req, res) => {

    const user = {
            id: Date.now(),
            userEmail: 'raffithea123@gmail.com',
            password: 'raffi123'
        }
        //Untuk generate token user
    jwt.sign({ user }, 'secretkey', (err, token) => {
        res.json({
            token
        })
    })
})


app.get('/api/profile', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err)
            res.sendStatus(403);
        else {
            res.json({
                message: "Selamat Datang Muhammad Raffi Zeinuri MIsbah di Gamelab Indonesia",
                userData: authData
            })

        }
    })

});


//Verifikasi Token
function verifyToken(req, res, next) {

    const bearerHeader = req.headers['authorization'];
    //cek jika bearer kosong/tidak ada
    if (typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split(' ');
        //Get token 
        const bearerToken = bearer[1];

        //set the token
        req.token = bearerToken;

        //next middleware
        next();

    } else {
        //Jika tidak bisa akses mengarahkan ke halaman forbidden
        res.sendStatus(403);
    }

}
app.use((err, req, res, next) => {
    res.status(500).json({
        status: false,
        name: err.name,
        message: err.message
    });
});

module.exports = app;