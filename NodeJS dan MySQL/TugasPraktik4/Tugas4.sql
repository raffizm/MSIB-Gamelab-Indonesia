INSERT INTO anggota (id_anggota, nm_anggota, alamat, kota, tempat_lahir, tanggal_lahir, status_anggota)
    -> VALUES (7,'Howard Udin','Jl. Kenegaraan No. 12','Surabaya','Garut','2001-12-13',1),
    -> (8,'Steven Kusumah','Jl. Dago No. 11','Bandung','Cianjur','2001-06-18',1),
    -> (9,'Dio Deryana','Jl. Soekarno Hatta No. 11','Jakarta','Bandung','1997-09-11',1),
    -> (10,'Ahmad Jaenab','Jl. Tutup Botol No. 43','Palembang','Cianjur','1996-10-13',1),
    -> (11,'Dimas Yudha','Jl. PSM No. 31','Bandung','Jakarta','1989-04-25',1),
    -> (12,'Bayu Prakoso','Jl. Cicaheum No. 54','Bandung','Sukabumi','1982-06-27',1),
    -> (13,'Sahrul Mukmin','Jl. Bengawan','Solo','Semarang','1988-07-16',1),
    -> (14,'Qintara Hindi','Jl. Cihapit No. 80','Surabaya','Solo','1991-01-11',1),
    -> (15,'Maharani Nyanyi','Jl. Kehutanan No. 44','Surabaya','Jakarta','1999-02-30',1),
    -> (16,'Indah Melihat','Jl. Lansia No. 22','Semarang','Solo','2002-03-31',1),
    -> (17,'Siti Populer','Jl. Cipanas No. 92','Bandung','Garut','2003-08-19',1);


UPDATE anggota SET alamat='Jl. Kebhinekaan No 18' WHERE id_anggota = 13;

UPDATE anggota set nama = 'Richard Putra Pangestu' WHERE id_anggota = 6;

UPDATE anggota set nm_anggota = 'Richard Putra Pangestu' WHERE id_anggota = 6;

UPDATE anggota set nm_anggota = 'Abdul Zakaria' WHERE id_anggota = 1;

UPDATE anggota set kota = 'Solo' WHERE id_anggota = 3;

UPDATE anggota set kota = 'Palembang' WHERE nm_anggota='Black Widow';

UPDATE anggota set tempat_lahir = 'New York' WHERE tanggal_lahir = '2001-12-13';