var express = require('express');
var router = express.Router();


// Get Session Listing
router.get('/', (req, res) => {
    req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
    res.send(`Kamu telah menunjuni halaman ini sebanyak ${req.session.counter} kali`);
});

// Get set session  
var sessionData
router.get('/set_session', function(req, res) {
    sessionData = req.session;
    sessionData.user = {};
    let username = "raffi";
    sessionData.user.username = username;
    sessionData.user.id = Math.random();
    console.log("Setting session data: username=%s and salary=%s", username, sessionData.user.id)
    res.json(sessionData.user);
});

// Get Session
router.get('/get_session', function(req, res) {
    sessionData = req.session;
    let userObj = {};
    if (sessionData.user) {
        userObj = sessionData.user;
    };
    console.log("Get data pada : username ", userObj);
    res.json(userObj)
});

// Destroy Session
router.get('/destroy_session', function(req, res) {
    sessionData = req.session;

    sessionData.destroy(function(err) {
        if (err) {
            msg = 'Ada kesalahan dalam destroy session';
            console.log(msg);
        } else {
            msg = 'session destroy berhasil';
            console.log(msg);
            res.json(msg);
        }
    });
});
module.exports = router;