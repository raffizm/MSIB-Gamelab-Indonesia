$(document).ready(function() {
    // addClass()
    $('#addClassBtn').click(function() {
        $('p.k1').addClass('redText');
    });
    // removeClass()
    $('#removeClassBtn').click(function() {
        $('p.k2').removeClass('blueText');
    });
    // addRemoveClass()
    $('#addRemoveClassBtn').click(function() {
        $('p.k3').removeClass('blueText').addClass('greenText');
    });
    // checkClass()
    $('#checkClassBtn').click(function() {
        alert("Status kalimat ketiga(k3) memiliki class 'greenText': " + $('p.k3').hasClass('greenText'));
    });
    // Method html()
    $('#htmlBtn').click(function() {
        $('div.containerAuthor').html('<p>Author : Muhammad Raffi Zeinuri Misbah</p>');
    });
    // append()
    $('#appendBtn').click(function() {
        $('p.k1').append('<div class="append">Menambahkan Append</div>');
    });
});