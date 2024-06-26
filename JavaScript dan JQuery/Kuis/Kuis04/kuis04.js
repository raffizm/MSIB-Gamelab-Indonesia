var text = "* ";
for (var x = 0; x < 5; x++) {
    //Spasi
    for (var spasi = 0; spasi < 5 - x - 1; spasi++) {
        text += " ";
    }
    //Bintang
    for (var y = 1; y <= x; y++) {
        text += "*";
    }
    //Baris Baru
    text += "\n";
}

console.log(text);