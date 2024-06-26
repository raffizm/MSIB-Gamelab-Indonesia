var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

var user = {
    id: Date.now(),
    userEmail: 'raffi@gmail.com',
    password: 'raffi123'
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
//Auth JWT
app.post('/api/login', (req, res) => {
    try {
        //Untuk generate token user
        jwt.sign({ user }, 'secretkey', (err, token) => {
            res.json({
                token
            })
        })
    } catch (err) {
        // Melempar Exception
        next(err);
    }

})


app.get('/api/profile', verifyToken, (req, res) => {
    try {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err)
                res.sendStatus(403);
            else {
                res.json({
                    message: `Selamat Datang ${user.userEmail} di Gamelab Indonesia`,
                    userData: authData
                })

            }
        })
    } catch (err) {
        // Melempar Exception
        next(err);
    }



});


//Verifikasi Token
function verifyToken(req, res, next) {
    try {
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
    } catch (err) {
        // Melempar Exception
        next(err);
    }


}
module.exports = app;