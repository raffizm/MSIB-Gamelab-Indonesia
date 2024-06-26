const login = require('./loginController');
const register = require('./registerController');
const home = require('./homeController');
const profile = require('./profileController');
const product = require('./productController');

module.exports = {
    login,
    register,
    home,
    profile,
    product
};