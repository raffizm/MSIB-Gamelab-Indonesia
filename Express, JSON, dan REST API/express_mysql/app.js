var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('req-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var productRouter = require('./routes/product');
var product = require('./controller/productController');
var sessionRouter = require('./routes/session')
    // Definisi lokasi untuk auth
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'iniadalahrahasiamu',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}));
app.use(flash());
// tambahkan ini
app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
});
// end
// app.use(express.static('public'));
app.set('views', path.join(__dirname, 'src/views'));
// Setting folder views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/product', productRouter);
app.use('/', require('./routes/product'));
app.use('/session', sessionRouter);
// Gunakan routes yang telah didefinisikan untuk auth
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
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
app.get('/product', product.getProduct);
app.post('/product', product.createProduct);
app.put('/product', product.updateProduct);
app.delete('/product', product.deleteProduct);
module.exports = app;