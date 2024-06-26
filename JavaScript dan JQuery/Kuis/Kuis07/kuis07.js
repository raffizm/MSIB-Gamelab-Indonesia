$(document).ready(function() {
    // 1. Event Click
    $('img.imgClick1').click(function() {
        $("#hasilClick1").text("Ini Adalah Logo Dari HTML");
    });
    $('img.imgClick2').click(function() {
        $("#hasilClick2").text("Ini Adalah Logo Dari CSS");
    });
    $('img.imgClick3').click(function() {
        $("#hasilClick3").text("Ini Adalah Logo Dari JavaScript");
    });
    // 2. Event MouseEnter
    $('div.containerForm').mouseenter(function() {
        $("#hasilMouseEnter").text("Mouse Anda Memasuki Wilayah Form");
    });
    // 3. Event MouseLeave
    $('div.containerForm').mouseleave(function() {
        $("#hasilMouseEnter").text("Mouse Anda Meninggalkan Wilayah Form");
    });
    // 4. Event Keydown
    $(document).keypress(function(event) {
        var key = String.fromCharCode(event.which);
        $("#currentClick").text(key);
    });
    // 5. Event Form Submit
    $('#myForm').submit(function() {
        alert('Form Terkirim !');
    });
    // 6. Event Focus
    $('input').focus(function() {
        $(this).css("background-color", "#E7700D");
    });
    // 7. Event Blur
    $('input').blur(function() {
        $(this).css("background-color", "#FFFFFF");
    });
});