-- Query Replace

UPDATE anggota set alamat = replace(alamat,'Jl.', 'Jalan');

-- Query Delete

DELETE from anggota 
WHERE id_anggota > 12;