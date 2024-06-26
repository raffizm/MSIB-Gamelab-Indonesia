const express = require('express');
const app = express();
const port = 3000;

app.get('/kelas/L', (req, res) => {
    res.send('Selamat Datang Di Website Belajar Express.js !')
});

app.listen(port, () => {
    console.log(`Server Berjalan di http://localhost:${port}`);
})