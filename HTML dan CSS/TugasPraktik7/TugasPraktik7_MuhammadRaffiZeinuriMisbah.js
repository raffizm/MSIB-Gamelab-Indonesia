function mod(batasLoop) {
    let barisHasil = '';
    for (let i = 1; i <= batasLoop; i++) {

        // i Merupakan Kelipatan 3 dan 5
        if (i % 15 === 0) {
            barisHasil += 'GameLab Indonesia ';
        }
        // i Merupakan Kelipatan 5
        else if (i % 5 === 0) {
            barisHasil += 'GameLab ';
        }
        // i Merupakan Kelipatan 3
        else if (i % 3 === 0) {
            barisHasil += 'Game ';
        }
        // i Bukan Kelipatan 3 dan 5
        else {
            barisHasil += i + ' ';
        }
    }
    return barisHasil;
}
console.log('------------------------------------------')
    // Uji Pertama
console.log('Hasil Uji Pertama');
console.log(mod(4));
console.log('------------------------------------------')
    // Uji Kedua
console.log('Hasil Uji Kedua');
console.log(mod(10));
console.log('------------------------------------------')
    // Uji Ketiga
console.log('Hasil Uji Ketiga');
console.log(mod(30));
console.log('------------------------------------------')