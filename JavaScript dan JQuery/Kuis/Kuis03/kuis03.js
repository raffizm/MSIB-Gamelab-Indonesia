// Input Rumah
kawasanBanjir = false;
kawasanIndustri = false;
kawasanLongsor = false;
luasTanah = 900;
luasBangunan = 500;
kolamRenang = true;
parkirLuas = true;
kebunBelakang = true;



// Selesi Rumah
function seleksiRumah() {
    if (kawasanBanjir == false && kawasanLongsor == false && kawasanIndustri == false) {
        if (luasTanah >= 800 & luasBangunan >= 400) {
            if (kolamRenang == true && parkirLuas == true && kebunBelakang == true) {
                console.log("Rumah yang diinput sangat direkomendasikan oleh sistem, karena memenuhi semua kriteria")
            } else {
                console.log("Rumah yang diinput memenuhi kriteria kawasan dan luasan, tetapi tidak dengan kriteria fasilitas.")
            }
        } else {
            console.log("Rumah yang diinput memenuhi kriteria kawasan tetapi tidak dengan kriteria luasan.")
        }
    } else {
        console.log("Rumah yang diinput tidak memenuhi kriteria kawasan.")
    }
}

seleksiRumah();