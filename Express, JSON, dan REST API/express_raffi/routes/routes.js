import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    debugger;
    console.log('Ini adalah permintaan request untuk "/"')
    res.send('Selamat Datang Di Website Belajar Express.js !')
});
router.get('/kelas', (req, res) => {
    console.log('Ini adalah permintaan request untuk "/Kelas"')
    res.send('Ini adalah Halaman Kelas')
});
router.get('/about', (req, res) => {
    console.log('Ini adalah permintaan request untuk "/About"')
    res.send('Ini adalah Halaman About')
});
router.get('/kelas/:id', (req, res) => {
    console.log('Ini adalah permintaan request untuk "/kelas/id"')
    res.send(`Ini adalah halaman untuk kelas ${req.params.id}`)
});
router.get('/kelas/:jurusan/:id/:pilihan', (req, res) => {
    var jurusan = req.params.jurusan
    var id = req.params.id
    var pilihan = req.params.pilihan

    res.send(`Ini adalah halaman untuk kelas ${jurusan} ${pilihan} tingkat ${id}`)
});
router.put('/', (req, res) => {
    res.send('Ini adalah PUT')
})
router.post('/', (req, res) => {
    res.send('Ini adalah POST')
})
router.delete('/', (req, res) => {
    res.send('Ini adalah DELETE')
})

// Tambahkan Export

export default router;